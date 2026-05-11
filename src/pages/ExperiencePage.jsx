import React from 'react';
import './ExperiencePage.css';

const formations = [
  {
    period: '2022 — 2025',
    title: 'Cycle Ingénieur — Informatique & Réseaux',
    org: 'ESAIP École d\'Ingénieurs — Angers',
    type: 'formation',
    desc: 'Formation d\'ingénieur en informatique avec spécialisation en Cybersécurité, Systèmes & Réseaux et Cloud/DevOps. Projets pratiques, CTF, déploiements cloud et DevSecOps.',
    tags: ['Cybersécurité', 'Cloud & DevOps', 'Réseaux', 'DevSecOps'],
  },
  {
    period: '2019 — 2022',
    title: 'Classes Préparatoires / Cycle Préparatoire',
    org: 'ESAIP École d\'Ingénieurs — Angers',
    type: 'formation',
    desc: 'Cycle préparatoire intégré : mathématiques, physique, informatique et fondamentaux de l\'ingénierie.',
    tags: ['Mathématiques', 'Informatique', 'Physique', 'Algorithmique'],
  },
];

const experiences = [
  {
    period: 'En cours',
    title: 'Projet AKS — Azure Kubernetes Service',
    org: 'Projet académique',
    type: 'projet',
    desc: 'Déploiement complet d\'une application containerisée sur AKS avec pipeline CI/CD GitHub Actions intégré.',
    tags: ['Azure', 'K8s', 'Docker', 'CI/CD'],
  },
  {
    period: '2024',
    title: 'Red Team — Escape Game DevSecOps',
    org: 'Projet académique',
    type: 'projet',
    desc: 'Participation à un Escape Game DevSecOps en équipe : pentest, exploitation de vulnérabilités et rédaction du rapport de Red Team.',
    tags: ['Pentest', 'CTF', 'Rapport', 'Active Directory'],
  },
];

const certifs = [
  { name: 'TryHackMe', detail: 'Parcours SOC Level 1', icon: '🎯', year: '2024' },
  { name: 'Google Cloud', detail: 'Cloud Digital Leader', icon: '☁️', year: '2023' },
  { name: 'Cisco Networking', detail: 'CCNA (en cours)', icon: '🌐', year: '2025' },
];

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div key={i} className="timeline-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
          <div className="timeline-item__marker">
            <div className="timeline-item__dot" />
            {i < items.length - 1 && <div className="timeline-item__line" />}
          </div>
          <div className="timeline-item__content">
            <div className="timeline-item__period">{item.period}</div>
            <div className="timeline-item__type-badge">{item.type === 'formation' ? '🎓 Formation' : '⚡ Projet'}</div>
            <h3 className="timeline-item__title">{item.title}</h3>
            <div className="timeline-item__org">{item.org}</div>
            <p className="timeline-item__desc">{item.desc}</p>
            <div className="timeline-item__tags">
              {item.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="experience-page section">
      <div className="container">
        {/* Header */}
        <div className="page-header reveal">
          <span className="tag">Parcours</span>
          <h1 className="page-title">Expériences &<br />Formations</h1>
        </div>

        {/* Formations */}
        <div className="exp-section">
          <h2 className="exp-section__title reveal">🎓 Formations</h2>
          <Timeline items={formations} />
        </div>

        {/* Projets & Expés */}
        <div className="exp-section">
          <h2 className="exp-section__title reveal">⚡ Projets & Réalisations</h2>
          <Timeline items={experiences} />
        </div>

        {/* Certifications */}
        <div className="exp-section">
          <h2 className="exp-section__title reveal">🏆 Certifications & Badges</h2>
          <div className="certifs-grid">
            {certifs.map((c, i) => (
              <div key={c.name} className="certif-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="certif-card__icon">{c.icon}</span>
                <div>
                  <div className="certif-card__name">{c.name}</div>
                  <div className="certif-card__detail">{c.detail}</div>
                </div>
                <span className="certif-card__year">{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
