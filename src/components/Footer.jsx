import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Profil', to: '/profil' },
  { label: 'Projets', to: '/projets' },
  { label: 'Expériences', to: '/experiences' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">Y.E.S</Link>
          <p>Yohann Ekambie Souamy<br />Étudiant en Cybersécurité & Cloud/DevOps</p>
          <div className="footer__socials">
            <a href="https://github.com/Neluyah" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/yohann-souamy-ys" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:contact@yekambie.com" aria-label="Email"><FiMail /></a>
          </div>
        </div>

        <nav className="footer__nav">
          <span className="footer__nav-title">Navigation</span>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="footer__nav-link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="footer__contact">
          <span className="footer__nav-title">Contact</span>
          <a href="mailto:contact@yekambie.com" className="footer__nav-link">contact@yekambie.com</a>
          <span className="footer__nav-link">Angers — Mobile France</span>
          <div className="footer__available">
            <span className="footer__dot" />
            Stage dès juin 2026
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {year} Yohann Ekambie Souamy — yekambie.com</span>
        <span>Fait avec ❤️ et React</span>
      </div>
    </footer>
  );
}
