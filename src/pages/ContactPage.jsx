import React, { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import './ContactPage.css';

const contactInfos = [
  { icon: <FiMail />, label: 'Email', value: 'contact@yekambie.com', href: 'mailto:contact@yekambie.com' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'yohann-souamy-ys', href: 'https://www.linkedin.com/in/yohann-souamy-ys' },
  { icon: <FiGithub />, label: 'GitHub', value: 'Neluyah', href: 'https://github.com/Neluyah' },
  { icon: <FiMapPin />, label: 'Localisation', value: 'Angers — Mobile France', href: null },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi — branchez votre backend ou EmailJS ici
    setSent(true);
  };

  return (
    <div className="contact-page section">
      <div className="container">
        {/* Header */}
        <div className="page-header reveal">
          <span className="tag">Restons en contact</span>
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">
            Une opportunité de stage, une question ou simplement envie d'échanger ?<br />
            Je réponds sous 24h.
          </p>
        </div>

        <div className="contact-grid">
          {/* Infos contact */}
          <div className="contact-info reveal">
            <h2>Coordonnées</h2>
            <p style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
              Disponible pour un stage de 3 mois dès <strong style={{ color: 'var(--ink)' }}>juin 2026</strong>.
            </p>

            <div className="contact-cards">
              {contactInfos.map((info) => (
                <div key={info.label} className="contact-card">
                  <div className="contact-card__icon">{info.icon}</div>
                  <div>
                    <div className="contact-card__label">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="contact-card__value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-card__value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Disponibilité */}
            <div className="availability-badge">
              <span className="availability-dot" />
              <span>Disponible pour un stage dès Juin 2026</span>
            </div>
          </div>

          {/* Formulaire */}
          <div className="contact-form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
            {sent ? (
              <div className="form-success">
                <div className="form-success__icon"><FiCheck size={32} /></div>
                <h3>Message envoyé !</h3>
                <p>Je vous répondrai dans les meilleurs délais.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jean Dupont"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Adresse email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jean@exemple.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Proposition de stage, Question..."
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Bonjour Yohann, je vous contacte au sujet de..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--full">
                  <FiSend /> Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
