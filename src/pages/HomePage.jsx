import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './HomePage.css';

const stats = [
  { value: '4 ans', label: 'de formation ESAIP' },
  { value: '10+', label: 'projets réalisés' },
  { value: 'Bac+4', label: 'Ingénieur 4ème année' },
];

const skills_preview = ['Cybersécurité', 'Linux / Réseaux', 'Cloud & DevOps', 'Docker / K8s', 'Python & Bash', 'CI/CD'];

export default function HomePage() {
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg-shape" aria-hidden="true" />
        <div className="container hero__grid">
          {/* Left: texte */}
          <div className="hero__content">
            <span className="tag anim-slide-up">
              <span className="tag__dot" />
              Disponible — Stage dès Juin 2026 (3 mois)
            </span>

            <h1 className="hero__title anim-slide-up anim-delay-1">
              Yohann<br />
              <span className="hero__title-accent">Ekambie</span><br />
              Souamy
            </h1>

            <p className="hero__subtitle anim-slide-up anim-delay-2">
              Étudiant en <strong>Cybersécurité & Cloud/DevOps</strong>. 
              Je construis des infrastructures sécurisées et résilientes. 
              Basé à Angers — mobile toute la France.
            </p>

            <div className="hero__actions anim-slide-up anim-delay-3">
              <Link to="/projets" className="btn btn--primary">
                Voir mes projets <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Me contacter
              </Link>
            </div>

            <div className="hero__socials anim-slide-up anim-delay-4">
              <a href="https://github.com/Neluyah" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yohann-souamy-ys" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:contact@yekambie.com" aria-label="Email">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Right: photo + stats */}
          <div className="hero__visual anim-slide-up anim-delay-2">
            <div className="hero__photo-wrap">
              <div className="hero__photo-bg" aria-hidden="true" />
              <img
                src="/profile.jpg"
                alt="Yohann Ekambie Souamy"
                className="hero__photo"
              />
              {/* Badge flottant */}
              <div className="hero__badge hero__badge--tl">
                <span className="hero__badge-icon">🔐</span>
                <div>
                  <div className="hero__badge-label">Cybersécurité</div>
                  <div className="hero__badge-sub">Pentest & SIEM</div>
                </div>
              </div>
              <div className="hero__badge hero__badge--br">
                <span className="hero__badge-icon">☁️</span>
                <div>
                  <div className="hero__badge-label">Cloud / DevOps</div>
                  <div className="hero__badge-sub">AWS · Azure · K8s</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="container">
          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPÉTENCES PREVIEW ===== */}
      <section className="home-skills section">
        <div className="container">
          <div className="home-skills__header reveal">
            <span className="tag">Compétences clés</span>
            <h2>Ce que je maîtrise</h2>
          </div>
          <div className="home-skills__grid">
            {skills_preview.map((skill, i) => (
              <div key={skill} className={`home-skills__item reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span>{skill}</span>
                <FiArrowRight size={16} />
              </div>
            ))}
          </div>
          <div className="reveal home-skills__cta" style={{ transitionDelay: '0.5s' }}>
            <Link to="/profil" className="btn btn--outline">
              Voir toutes mes compétences <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="marquee-wrapper" aria-hidden="true">
        <div className="marquee__track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="marquee__content">
              {['Linux', 'Python', 'Docker', 'Kubernetes', 'Azure', 'AWS', 'CI/CD', 'Wireshark', 'Metasploit', 'Ansible', 'Terraform', 'Git', 'Bash'].map((t) => (
                <span key={t} className="marquee__item">{t} <span className="marquee__sep">·</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== APPEL A ACTION ===== */}
      <section className="home-cta section">
        <div className="container">
          <div className="home-cta__card reveal">
            <div className="home-cta__text">
              <h2>Prêt à collaborer ?</h2>
              <p>Je suis actuellement à la recherche d'un stage de 3 mois à partir de juin 2026 dans un environnement technique et ambitieux.</p>
            </div>
            <Link to="/contact" className="btn btn--warm">
              Discutons ensemble <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
