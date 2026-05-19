import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiFileText } from 'react-icons/fi';
import './ProfilPage.css';

// ── Compétences Techniques ──────────────────────────────────────────────────
const skillGroups = [
  {
    category: '🔐 Cybersécurité',
    color: '#ef4444',
    items: [
      'Pentest applicatif (OWASP Top 10)',
      'Wireshark / Nmap / Nessus',
      'Metasploit Framework',
      'SIEM / SOC (Wazuh, Splunk)',
      'Active Directory & AD attacks',
      'Analyse forensique & malware',
    ],
  },
  {
    category: '🐧 Systèmes & Réseaux',
    color: '#f97316',
    items: [
      'Linux (Debian, Ubuntu, CentOS)',
      'Windows Server 2019/2022',
      'TCP/IP, VLANs, routage',
      'Firewall pfSense / iptables',
      'Scripting Bash & PowerShell',
      'Administration AD / GPO',
    ],
  },
  {
    category: '☁️ Cloud & DevOps',
    color: '#2563eb',
    items: [
      'AWS (EC2, S3, IAM, VPC)',
      'Azure (AKS, DevOps, Entra ID)',
      'Docker & Docker Compose',
      'Kubernetes (déploiement, RBAC)',
      'CI/CD — GitHub Actions',
      'Terraform / Ansible (IaC)',
    ],
  },
  {
    category: '💻 Développement',
    color: '#7c3aed',
    items: [
      'Python (scripting, automatisation)',
      'Bash / PowerShell',
      'Git & GitHub (GitFlow)',
      'API REST & JSON',
      'SQL / MongoDB',
      'JavaScript (bases front-end)',
    ],
  },
];

// ── Compétences Comportementales ────────────────────────────────────────────
const behavioralSkills = [
  { icon: '🧩', label: 'Esprit d\'analyse', desc: 'Capacité à décomposer des problèmes complexes méthodiquement' },
  { icon: '🤝', label: 'Travail en équipe', desc: 'Collaboration active en mode Agile/Scrum sur plusieurs projets' },
  { icon: '🗣️', label: 'Communication', desc: 'Capacité à vulgariser des concepts techniques pour tout public' },
  { icon: '🎯', label: 'Rigueur', desc: 'Attention au détail, documentation soignée, respect des procédures' },
  { icon: '💡', label: 'Curiosité technique', desc: 'Veille technologique constante, auto-formation continue' },
  { icon: '🚀', label: 'Autonomie', desc: 'Capacité à gérer des projets de bout en bout de façon indépendante' },
];

// ── Compétences Transversales ───────────────────────────────────────────────
const transversalSkills = [
  { icon: '📋', label: 'Gestion de projet', desc: 'Méthodologie Agile, Scrum, suivi de jalons' },
  { icon: '📝', label: 'Rédaction technique', desc: 'Rapports d\'audit, documentation, comptes-rendus' },
  { icon: '🔍', label: 'Veille & recherche', desc: 'Sourcing de CVE, suivi des menaces, threat intelligence' },
  { icon: '🌍', label: 'Anglais professionnel', desc: 'B2 — lecture de doc, réunions, rédaction de rapports' },
  { icon: '🎓', label: 'Pédagogie', desc: 'Tutorat, transmission de connaissances, présentations techniques' },
  { icon: '⚖️', label: 'Éthique & conformité', desc: 'RGPD, règles déontologiques de la cybersécurité' },
];

// ── Langues ─────────────────────────────────────────────────────────────────
const languages = [
  { lang: 'Français', level: 'Natif (C2)', pct: 100 },
  { lang: 'Anglais', level: 'Professionnel (B2)', pct: 72 },
];

// ────────────────────────────────────────────────────────────────────────────
export default function ProfilPage() {
  return (
    <div className="profil-page section">
      <div className="container">

        {/* ── Header ── */}
        <div className="page-header reveal">
          <span className="tag">À propos de moi</span>
          <h1 className="page-title">Mon Profil</h1>
        </div>

        {/* ── Intro + Photo ── */}
        <div className="profil-intro reveal">
          <div className="profil-intro__photo">
            <img src="/profile.jpg" alt="Yohann Ekambie Souamy" />
          </div>

          <div className="profil-intro__text">
            <h2>Qui suis-je ?</h2>
            <p>
              Je suis <strong>Yohann Ekambie Souamy</strong>, étudiant ingénieur en <strong>4ème année</strong> à{' '}
              <strong>l’ESAIP École d’Ingénieurs</strong> (Angers), spécialisé en{' '}
              <strong>Cybersécurité, Systèmes &amp; Réseaux et Cloud/DevOps</strong>.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Passionné par la sécurisation des infrastructures et l'automatisation
              des déploiements, je cherche à mettre mes compétences au service d'une
              équipe technique ambitieuse. Je suis rigoureux, curieux, et toujours
              prêt à apprendre de nouvelles technologies.
            </p>

            <div className="profil-intro__actions">
              <a
                href="/cv-yohann-ekambie.pdf"
                download="CV_Yohann_Ekambie_Souamy.pdf"
                className="btn btn--primary"
              >
                <FiDownload /> Télécharger mon CV
              </a>
              <a
                href="/cv-yohann-ekambie.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                <FiArrowRight /> Voir le CV
              </a>
              <Link to="/contact" className="btn btn--outline">
                Me contacter
              </Link>
            </div>

            {/* Aperçu CV */}
            <div className="cv-preview-box">
              <div className="cv-preview-box__header">
                <FiFileText size={16} />
                <span>Aperçu du CV</span>
                <a
                  href="/cv-yohann-ekambie.pdf"
                  download="CV_Yohann_Ekambie_Souamy.pdf"
                  className="cv-preview-box__dl"
                >
                  <FiDownload size={14} /> Télécharger
                </a>
              </div>
              <iframe
                src="/cv-yohann-ekambie.pdf"
                title="CV Yohann Ekambie Souamy"
                className="cv-preview-box__frame"
              />
            </div>
          </div>
        </div>

        {/* ── Compétences Techniques ── */}
        <div className="profil-section">
          <div className="section-header reveal">
            <span className="rule" />
            <h2>Compétences techniques</h2>
            <p className="section-desc">Outils, technologies et domaines maîtrisés</p>
          </div>
          <div className="skills-groups reveal">
            {skillGroups.map((group) => (
              <div key={group.category} className="skill-group">
                <div className="skill-group__header">
                  <span className="skill-group__title">{group.category}</span>
                  <div className="skill-group__line" style={{ background: group.color }} />
                </div>
                <ul className="skill-group__list">
                  {group.items.map((item) => (
                    <li key={item} className="skill-group__item">
                      <span className="skill-group__dot" style={{ background: group.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Compétences Comportementales ── */}
        <div className="profil-section">
          <div className="section-header reveal">
            <span className="rule" style={{ background: '#10b981' }} />
            <h2>Compétences comportementales</h2>
            <p className="section-desc">Savoir-être et qualités humaines développées en formation et en projet</p>
          </div>
          <div className="soft-grid reveal">
            {behavioralSkills.map((s) => (
              <div key={s.label} className="soft-card soft-card--green">
                <span className="soft-card__icon">{s.icon}</span>
                <div>
                  <div className="soft-card__label">{s.label}</div>
                  <div className="soft-card__desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Compétences Transversales ── */}
        <div className="profil-section">
          <div className="section-header reveal">
            <span className="rule" style={{ background: '#8b5cf6' }} />
            <h2>Compétences transversales</h2>
            <p className="section-desc">Aptitudes polyvalentes mobilisables dans tout contexte professionnel</p>
          </div>
          <div className="soft-grid reveal">
            {transversalSkills.map((s) => (
              <div key={s.label} className="soft-card soft-card--purple">
                <span className="soft-card__icon">{s.icon}</span>
                <div>
                  <div className="soft-card__label">{s.label}</div>
                  <div className="soft-card__desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Langues ── */}
        <div className="profil-bottom">
          <div className="reveal">
            <span className="rule" />
            <h3>Langues</h3>
            <div className="languages">
              {languages.map((l) => (
                <div key={l.lang} className="language-item">
                  <div className="language-item__header">
                    <span className="language-item__name">{l.lang}</span>
                    <span className="language-item__level">{l.level}</span>
                  </div>
                  <div className="language-bar">
                    <div className="language-bar__fill" style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <span className="rule" />
            <h3>Centres d'intérêt</h3>
            <div className="interests-grid">
              {[
                { icon: '🔐', label: 'CTF & Hacking éthique' },
                { icon: '☁️', label: 'Cloud & Infrastructure' },
                { icon: '📚', label: 'Veille cyber & tech' },
                { icon: '🏋️', label: 'Sport & dépassement de soi' },
                { icon: '🤝', label: 'Bénévolat associatif' },
                { icon: '🎮', label: 'Jeux stratégiques' },
              ].map((i) => (
                <div key={i.label} className="interest-item">
                  <span>{i.icon}</span>
                  <span>{i.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
