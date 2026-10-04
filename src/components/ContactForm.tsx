import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

// Messages are emailed by FormSubmit (https://formsubmit.co), since GitHub Pages has no server.
// After the one-time activation, FormSubmit sends a random alias that can replace the address
// below so it isn't visible in the page source.
const CONTACT_EMAIL = 'rrahulgowda733@gmail.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const fieldClass =
  'rounded-xl bg-slate-800/50 border-purple-400/30 text-white placeholder:text-cyan-200/60 focus:border-cyan-400';

const emptyForm = { name: '', email: '', message: '' };

type Status = 'idle' | 'sending' | 'sent' | 'error';

// Kept in its own component so typing re-renders only the form, not the whole page
export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<Status>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status !== 'sending') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hidden honeypot field: real visitors never fill it, spam bots usually do
    const honeypot = new FormData(e.currentTarget).get('_honey');
    if (honeypot) return;

    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email, // FormSubmit uses this as the reply-to address
          message: formData.message,
          _subject: `New portfolio message from ${formData.name}`,
          _template: 'table'
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) !== 'true') {
        throw new Error(result.message || `Request failed (${response.status})`);
      }
      setFormData(emptyForm);
      setStatus('sent');
    } catch (err) {
      console.error('Contact form failed:', err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div>
        <Input
          placeholder="Your Name"
          name="name"
          aria-label="Your name"
          value={formData.name}
          onChange={handleInputChange}
          className={fieldClass}
          required
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          name="email"
          aria-label="Your email"
          value={formData.email}
          onChange={handleInputChange}
          className={fieldClass}
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          name="message"
          aria-label="Your message"
          value={formData.message}
          onChange={handleInputChange}
          className={`${fieldClass} min-h-32`}
          required
        />
      </div>
      <Button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-xl border border-purple-400/30 disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Rocket className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>

      <div aria-live="polite">
        {status === 'sent' && (
          <p className="flex items-start gap-2 rounded-xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
            Thanks! Your message has been sent. I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>
              Sorry, your message couldn't be sent. Please try again, or
              email me directly at <span className="font-medium text-white select-all">{CONTACT_EMAIL}</span>.
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
