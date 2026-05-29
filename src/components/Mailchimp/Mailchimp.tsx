'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import styles from './Mailchimp.module.css';

interface MailchimpProps {
  title?: string;
}

export default function Mailchimp({ title }: MailchimpProps) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    setResult(null);

    try {
      const response = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        setResult('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setResult('error');
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const messageClassName = `${styles.message} ${result === 'success' ? styles.success : ''} ${result === 'error' ? styles.error : ''}`;

  return (
    <div className={styles.mailchimp}>
      {title && <h3>{title}</h3>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <div className={styles.inputs}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email..."
              required
            />
            <button type="submit">
              <FaPaperPlane />
            </button>
          </div>
        </fieldset>
      </form>
      {message && (
        <div className={messageClassName}>
          {result === 'success' && <FaCheckCircle />}
          {result === 'error' && <FaExclamationCircle />}
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
