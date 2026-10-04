// usage: node print.mjs <input.html> <output.pdf>
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [input, output] = process.argv.slice(2);
const port = 9200 + Math.floor(Math.random() * 90);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--disable-gpu', `--remote-debugging-port=${port}`,
  `--user-data-dir=${process.env.TEMP}\\cdp-${port}`, '--allow-file-access-from-files', 'about:blank',
]);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 60 && !target; i++) {
  await sleep(200);
  try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page'); } catch {}
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); } };
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

await send('Page.enable');
await send('Page.navigate', { url: pathToFileURL(path.resolve(input)).href });
await sleep(1500);
const fonts = await send('Runtime.evaluate', {
  expression: `document.fonts.ready.then(() => [...document.fonts].map(f => f.family + ' ' + f.weight + ' ' + f.style + ':' + f.status).join(' | '))`,
  awaitPromise: true, returnByValue: true,
});
console.log('fonts:', fonts.result.result.value);
const res = await send('Page.printToPDF', {
  preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false,
  marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, generateTaggedPDF: true,
});
if (!res.result) { console.error(res.error); process.exit(1); }
fs.writeFileSync(output, Buffer.from(res.result.data, 'base64'));
console.log('wrote', output, fs.statSync(output).size, 'bytes');
ws.close(); chrome.kill(); process.exit(0);
