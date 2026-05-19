import React from 'react';
import './ExperiencePage.css';

// ── Formations ──────────────────────────────────────────────────────────────
const formations = [
  {
    period: '2025 — 2027',
    title: 'Cycle Ingénieur — Informatique & Réseaux (4ème année)',
    org: 'ESAIP École d\'Ingénieurs — Angers',
    type: 'formation',
    desc: 'Cycle ingénieur avec spécialisation en Cybersécurité, Systèmes & Réseaux et Cloud/DevOps. Projets pratiques, CTF, déploiements cloud et DevSecOps. Actuellement en 4ème année.',
    tags: ['Cybersécurité', 'Cloud & DevOps', 'Réseaux', 'DevSecOps'],
  },
  {
    period: '2022 — 2025',
    title: 'Cycle Préparatoire Intégré',
    org: 'ESAIP École d\'Ingénieurs — Angers',
    type: 'formation',
    desc: 'Cycle préparatoire intégré sur 3 ans : mathématiques, physique, informatique et fondamentaux de l\'ingénierie.',
    tags: ['Mathématiques', 'Informatique', 'Physique', 'Algorithmique'],
  },
];

// ── Projets & Réalisations ───────────────────────────────────────────────────
const experiences = [
  {
    period: '2025 — En cours',
    title: 'Projet AKS — Azure Kubernetes Service',
    org: 'Projet académique — ESAIP',
    type: 'projet',
    desc: 'Déploiement complet d\'une application containerisée sur AKS avec pipeline CI/CD GitHub Actions. Gestion des namespaces, RBAC et monitoring.',
    tags: ['Azure', 'Kubernetes', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    period: '2024',
    title: 'Red Team — Escape Game DevSecOps',
    org: 'Projet académique — ESAIP',
    type: 'projet',
    desc: 'Mission Red Team complète en équipe : pentest, exploitation de vulnérabilités, escalade de privilèges, compromission d\'Active Directory et rédaction du rapport d\'analyse.',
    tags: ['Pentest', 'CTF', 'Metasploit', 'Active Directory', 'Red Team'],
  },
  {
    period: '2023',
    title: 'Audit SI — Sécurité des Systèmes d\'Information',
    org: 'Projet académique — ESAIP Majeur Cyber IR4',
    type: 'projet',
    desc: 'Analyse théorique des risques et de l\'architecture hybride d\'un Système d\'Information. Identification des vulnérabilités, recommandations de sécurisation.',
    tags: ['Audit', 'SI', 'Sécurité', 'Architecture hybride'],
  },
];

// ── LEP : Expérience de Bénévolat ────────────────────────────────────────────
const lepExperiences = [
  {
    period: '2023 — 2025',
    icon: '🤝',
    color: '#10b981',
    title: 'Bénévole associatif',
    org: 'Engagement associatif — Angers',
    hours: '11h documentées',
    desc: 'Engagement bénévole sur 2 ans au sein d\'une association. Participation à des actions de solidarité, soutien logistique et accompagnement lors d\'événements associatifs.',
    impact: 'Développement du sens de la responsabilité, de l\'empathie et de l\'esprit d\'initiative. Expérience complémentaire valorisante à ma formation technique.',
    tags: ['Solidarité', 'Bénévolat', 'Travail d\'équipe', 'Engagement'],
    livret: '/rapports/Livret_Engagement_Yohann_EKAMBIE_SOUAMY%20(1).pdf',
    pdf: '/rapports/yohann11h.pdf',
    attestation: '/rapports/Attestation_Benevole.pdf',
  },
];


// ── Certifications ───────────────────────────────────────────────────────────
const certifs = [
  { name: 'TryHackMe', detail: 'Parcours SOC Level 1', icon: '🎯', year: '2024' },
  { name: 'Google Cloud', detail: 'Cloud Digital Leader', icon: '☁️', year: '2023' },
  { name: 'Cisco Networking', detail: 'CCNA (en cours)', icon: '🌐', year: '2025' },
];

// ── Valeurs & Anti-valeurs ───────────────────────────────────────────────────
const valeurs = [
  { icon: '🔐', label: 'Intégrité', desc: 'Je ne compromets jamais l\'éthique dans mes actions, surtout en cybersécurité où chaque décision a un impact réel.' },
  { icon: '🤝', label: 'Solidarité', desc: 'Le collectif prime sur l\'individuel. Je construis avec les autres, pas contre eux — que ce soit en équipe projet ou en bénévolat.' },
  { icon: '💡', label: 'Curiosité & apprentissage', desc: 'Je considère l\'ignorance comme une opportunité. Chaque outil, chaque technologie, chaque échec est une leçon à saisir.' },
  { icon: '🎯', label: 'Excellence opérationnelle', desc: 'Je fais les choses bien, pas seulement vite. Documentation, tests, rigueur : la qualité n\'est pas négociable.' },
];

const antivaleurs = [
  { icon: '❌', label: 'Malhonnêteté', desc: 'Mentir, tricher, contourner les règles : inacceptable dans un domaine où la confiance est fondamentale.' },
  { icon: '🚫', label: 'Indifférence', desc: 'L\'indifférence face aux problèmes des autres — en équipe ou en société — est contraire à qui je suis.' },
  { icon: '⛔', label: 'Stagnation', desc: 'Refuser d\'apprendre, de s\'adapter, d\'évoluer : dans un secteur aussi rapide que la tech, c\'est une faute professionnelle.' },
  { icon: '🔇', label: 'Manque de transparence', desc: 'Cacher des informations, ne pas communiquer les erreurs ou les risques : une culture du silence ne mène qu\'à des crises plus graves.' },
];

// ── Vision 3-5 ans ───────────────────────────────────────────────────────────
const vision = [
  {
    horizon: 'Dans 3 ans',
    icon: '🚀',
    color: '#2563eb',
    title: 'Ingénieur Cybersécurité / DevSecOps',
    desc: 'Intégrer une équipe SOC, Red Team ou DevSecOps dans une entreprise à dimension internationale. Obtenir les certifications CEH, OSCP ou AWS Security. Contribuer à des projets de sécurisation d\'infrastructures critiques.',
    milestones: ['Certif OSCP / CEH', 'Poste SOC / Red Team', 'Projet cloud sécurisé à grande échelle'],
  },
  {
    horizon: 'Dans 5 ans',
    icon: '🌍',
    color: '#8b5cf6',
    title: 'Lead Cybersécurité / Consultant Senior',
    desc: 'Évoluer vers un rôle de consultant senior ou de référent sécurité, avec une expertise reconnue en Cloud Security et Zero Trust. Mentorer les profils juniors et contribuer à la politique de sécurité d\'une organisation.',
    milestones: ['Référent sécurité', 'Expert Cloud & Zero Trust', 'Mentor & formateur'],
  },
];

// ── Composant Timeline ───────────────────────────────────────────────────────
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

// ── Page principale ──────────────────────────────────────────────────────────
export default function ExperiencePage() {
  return (
    <div className="experience-page section">
      <div className="container">

        {/* ── Header ── */}
        <div className="page-header reveal">
          <span className="tag">Parcours & LEP</span>
          <h1 className="page-title">Expériences &<br />Formations</h1>
          <p className="page-subtitle">Mon parcours académique, mes engagements, mes valeurs et ma vision professionnelle.</p>
        </div>

        {/* ── Formations ── */}
        <div className="exp-section">
          <h2 className="exp-section__title reveal">🎓 Formations</h2>
          <Timeline items={formations} />
        </div>

        {/* ── Projets & Réalisations ── */}
        <div className="exp-section">
          <h2 className="exp-section__title reveal">⚡ Projets & Réalisations</h2>
          <Timeline items={experiences} />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            LEP SUR 2 ANS
            ══════════════════════════════════════════════════════════════ */}
        <div className="exp-section lep-section">
          <div className="lep-header reveal">
            <div className="lep-header__badge">LEP</div>
            <div>
              <h2 className="exp-section__title" style={{ marginBottom: '0.5rem' }}>📘 Mon LEP sur 2 ans</h2>
              <p className="lep-header__sub">Livret d'Expériences Professionnelles — Engagements extra-académiques documentés sur 2 ans</p>
            </div>
          </div>

          {/* Livret d'Engagement — Document principal */}
          <div className="lep-livret-banner reveal">
            <div className="lep-livret-banner__left">
              <span className="lep-livret-banner__icon">📓</span>
              <div>
                <div className="lep-livret-banner__title">Livret d'Engagement Officiel</div>
                <div className="lep-livret-banner__sub">Yohann EKAMBIE SOUAMY — Document LEP complet sur 2 ans</div>
              </div>
            </div>
            <div className="lep-livret-banner__actions">
              <a
                href="/rapports/Livret_Engagement_Yohann_EKAMBIE_SOUAMY%20(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="lep-livret-btn lep-livret-btn--view"
                id="view-livret-engagement"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                Consulter le livret
              </a>
              <a
                href="/rapports/Livret_Engagement_Yohann_EKAMBIE_SOUAMY%20(1).pdf"
                download
                className="lep-livret-btn lep-livret-btn--dl"
                id="download-livret-engagement"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Télécharger
              </a>
            </div>
          </div>

          {/* Expériences détaillées */}
          <div className="lep-grid">
            {lepExperiences.map((exp, i) => (
              <div key={i} className="lep-card reveal" style={{ transitionDelay: `${i * 0.15}s`, '--lep-color': exp.color }}>
                <div className="lep-card__header">
                  <span className="lep-card__icon">{exp.icon}</span>
                  <div className="lep-card__meta">
                    <span className="lep-card__period">{exp.period}</span>
                    <span className="lep-card__hours">{exp.hours}</span>
                  </div>
                </div>
                <h3 className="lep-card__title">{exp.title}</h3>
                <div className="lep-card__org">{exp.org}</div>
                <p className="lep-card__desc">{exp.desc}</p>
                <div className="lep-card__impact">
                  <span className="lep-card__impact-label">✨ Impact personnel :</span>
                  <span> {exp.impact}</span>
                </div>
                <div className="lep-card__tags">
                  {exp.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                {(exp.livret || exp.pdf || exp.attestation) && (
                  <div className="lep-card__docs">
                    {exp.livret && (
                      <a href={exp.livret} target="_blank" rel="noopener noreferrer" className="lep-doc-btn" id="view-lep-livret-detail">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                        </svg>
                        Livret d'engagement
                      </a>
                    )}
                    {exp.pdf && (
                      <a href={exp.pdf} target="_blank" rel="noopener noreferrer" className="lep-doc-btn lep-doc-btn--alt" id="view-lep-rapport">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                        Rapport d'activité (11h)
                      </a>
                    )}
                    {exp.attestation && (
                      <a href={exp.attestation} target="_blank" rel="noopener noreferrer" className="lep-doc-btn lep-doc-btn--alt" id="view-lep-attestation">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                        </svg>
                        Attestation officielle
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            VALEURS & ANTI-VALEURS
            ══════════════════════════════════════════════════════════════ */}
        <div className="exp-section">
          <h2 className="exp-section__title reveal">⚖️ Mes valeurs / mes anti-valeurs</h2>
          <p className="exp-section__sub reveal">Ce qui me définit en tant que professionnel et individu — ce que j'incarne et ce que je refuse catégoriquement.</p>

          <div className="values-grid">
            <div className="values-col reveal">
              <div className="values-col__header values-col__header--green">
                <span>✅ Mes valeurs</span>
              </div>
              <div className="values-list">
                {valeurs.map((v) => (
                  <div key={v.label} className="value-card value-card--positive">
                    <span className="value-card__icon">{v.icon}</span>
                    <div>
                      <div className="value-card__label">{v.label}</div>
                      <div className="value-card__desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="values-col reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="values-col__header values-col__header--red">
                <span>❌ Mes anti-valeurs</span>
              </div>
              <div className="values-list">
                {antivaleurs.map((v) => (
                  <div key={v.label} className="value-card value-card--negative">
                    <span className="value-card__icon">{v.icon}</span>
                    <div>
                      <div className="value-card__label">{v.label}</div>
                      <div className="value-card__desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            COMMENT JE ME VOIS DANS 3 OU 5 ANS
            ══════════════════════════════════════════════════════════════ */}
        <div className="exp-section">
          <h2 className="exp-section__title reveal">🔭 Comment je me vois dans 3 ou 5 ans</h2>
          <p className="exp-section__sub reveal">Ma vision et mon projet professionnel à court et moyen terme.</p>

          <div className="vision-grid">
            {vision.map((v, i) => (
              <div key={v.horizon} className="vision-card reveal" style={{ transitionDelay: `${i * 0.15}s`, '--vision-color': v.color }}>
                <div className="vision-card__horizon">
                  <span className="vision-card__icon">{v.icon}</span>
                  <span className="vision-card__label">{v.horizon}</span>
                </div>
                <h3 className="vision-card__title">{v.title}</h3>
                <p className="vision-card__desc">{v.desc}</p>
                <div className="vision-card__milestones">
                  {v.milestones.map((m) => (
                    <div key={m} className="vision-milestone">
                      <span className="vision-milestone__dot" />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Certifications ── */}
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
