import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { btnPrimary } from './styles';

// Messages are emailed by FormSubmit (https://formsubmit.co), since GitHub Pages has no server.
// After the one-time activation, FormSubmit sends a random alias that can replace the address
// below so it isn't visible in the page source.
const CONTACT_EMAIL = 'rrahulgowda733@gmail.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const fieldClass =
  'rounded-xl h-11 border-white/10 bg-white/[0.03] dark:bg-white/[0.03] px-4 text-slate-100 placeholder:text-slate-500 focus-visible:border-cyan-400/60 focus-visible:ring-cyan-400/20';

const labelClass = 'mb-1.5 block text-sm font-medium text-slate-300';

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
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <Input
            id="contact-name"
            placeholder="Your name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
            className={fieldClass}
            required
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            className={fieldClass}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <Textarea
          id="contact-message"
          placeholder="What would you like to talk about?"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className={`${fieldClass} h-auto min-h-36 py-3`}
          required
        />
      </div>
      <button type="submit" disabled={status === 'sending'} className={`${btnPrimary} w-full sm:w-auto`}>
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send message
          </>
        )}
      </button>

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
