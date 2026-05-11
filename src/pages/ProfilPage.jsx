import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiFileText } from 'react-icons/fi';
import './ProfilPage.css';

const skillGroups = [
  {
    category: '🔐 Cybersécurité',
    color: '#ef4444',
    items: ['Pentest (OWASP)', 'Wireshark / Nmap', 'Metasploit', 'SIEM / SOC', 'Active Directory', 'Analyse forensique'],
  },
  {
    category: '🐧 Systèmes & Réseaux',
    color: '#f97316',
    items: ['Linux (Debian, Ubuntu, CentOS)', 'Windows Server', 'TCP/IP / VLANs', 'Firewall (pfSense)', 'Active Directory', 'Scripting Bash'],
  },
  {
    category: '☁️ Cloud & DevOps',
    color: '#2563eb',
    items: ['AWS (EC2, S3, IAM)', 'Azure (AKS, DevOps)', 'Docker / Docker Compose', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform / Ansible'],
  },
  {
    category: '💻 Développement',
    color: '#7c3aed',
    items: ['Python', 'Bash / PowerShell', 'Git / GitHub', 'API REST', 'SQL / MongoDB', 'JavaScript (bases)'],
  },
];

const languages = [
  { lang: 'Français', level: 'Natif', pct: 100 },
  { lang: 'Anglais', level: 'Professionnel (B2)', pct: 70 },
];

const softSkills = [
  'Autonomie', 'Esprit d\'analyse', 'Travail en équipe', 'Curiosité technique', 'Rigueur', 'Communication'
];

export default function ProfilPage() {
  return (
    <div className="profil-page section">
      <div className="container">
        {/* Header */}
        <div className="page-header reveal">
          <span className="tag">À propos de moi</span>
          <h1 className="page-title">Mon Profil</h1>
        </div>

        {/* Intro */}
        <div className="profil-intro reveal">
          <div className="profil-intro__photo">
            <img src="/profile.jpg" alt="Yohann" />
          </div>
          <div className="profil-intro__text">
            <h2>Qui suis-je ?</h2>
            <p>
              Je suis <strong>Yohann Ekambie Souamy</strong>, étudiant ingénieur à 
              <strong> l'ESAIP École d'Ingénieurs</strong> (Angers), spécialisé en 
              <strong> Cybersécurité, Systèmes & Réseaux et Cloud/DevOps</strong>.
            </p>
            <p style={{marginTop: '1rem'}}>
              Passionné par la sécurisation des infrastructures et l'automatisation des déploiements, 
              je cherche à mettre mes compétences au service d'une équipe technique ambitieuse. 
              Je suis rigoureux, curieux, et toujours prêt à apprendre de nouvelles technologies.
            </p>
          <div className="profil-intro__actions">
              <a href="/cv-yohann-ekambie.pdf" download="CV_Yohann_Ekambie_Souamy.pdf" className="btn btn--primary">
                <FiDownload /> Télécharger mon CV
              </a>
              <a href="/cv-yohann-ekambie.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
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
                <a href="/cv-yohann-ekambie.pdf" download="CV_Yohann_Ekambie_Souamy.pdf" className="cv-preview-box__dl">
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

        {/* Skills */}
        <div className="profil-section">
          <div className="section-header reveal">
            <span className="rule" />
            <h2>Compétences techniques</h2>
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

        {/* Langues + Soft Skills */}
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
            <h3>Savoir-être</h3>
            <div className="soft-skills">
              {softSkills.map((s) => (
                <span key={s} className="soft-skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
