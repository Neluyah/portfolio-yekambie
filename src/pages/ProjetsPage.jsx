import React, { useState } from 'react';
import { FiFileText, FiFilter, FiEye, FiGithub } from 'react-icons/fi';
import PdfViewer from '../components/PdfViewer';
import './ProjetsPage.css';

// ============================
// DONNÉES PROJETS
// ============================
const allProjects = [
  {
    id: 1,
    title: 'Red Team — DevSecOps Escape Game',
    category: 'Cybersécurité',
    emoji: '🔴',
    desc: "Mission de Red Team complète en équipe : exploitation de vulnérabilités, escalade de privilèges, compromission d'Active Directory et rédaction du rapport d'analyse dans le cadre d'un Escape Game DevSecOps à l'ESAIP.",
    tags: ['Pentest', 'CTF', 'Metasploit', 'Active Directory', 'Red Team'],
    pdf: '/rapports/rapport-redteam.pdf',
    github: null,
    featured: true,
  },
  {
    id: 2,
    title: 'TP 1 — Systèmes d\'Information',
    category: 'Systèmes d\'Information',
    emoji: '📊',
    desc: 'Audit du Système d\'Information : analyse théorique des risques et de l\'architecture hybride. Projet académique — Sécurité des Réseaux et des Systèmes. ESAIP, Majeur Cyber IR4.',
    tags: ['SI', 'Audit', 'Sécurité', 'Architecture hybride', 'ESAIP'],
    pdf: '/rapports/tp1-systemes-information.pdf',
    github: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Déploiement AKS — Pipeline CI/CD',
    category: 'Cloud & DevOps',
    emoji: '☁️',
    desc: "Conception et déploiement d'une application containerisée sur Azure Kubernetes Service (AKS), avec pipeline CI/CD via GitHub Actions.",
    tags: ['Azure', 'Kubernetes', 'Docker', 'GitHub Actions'],
    pdf: null,
    github: 'https://github.com/Neluyah',
    featured: false,
  },
  {
    id: 4,
    title: 'Architecture Réseau & Firewall',
    category: 'Systèmes & Réseaux',
    emoji: '🛡️',
    desc: "Mise en place d'une architecture réseau sécurisée avec segmentation VLAN, configuration pfSense et règles de filtrage avancées.",
    tags: ['pfSense', 'VLAN', 'Wireshark', 'Cisco'],
    pdf: null,
    github: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Infrastructure as Code avec Terraform',
    category: 'Cloud & DevOps',
    emoji: '⚙️',
    desc: 'Automatisation de la création d\'infrastructures cloud AWS avec Terraform et provisionnement via Ansible.',
    tags: ['Terraform', 'AWS', 'Ansible', 'IaC'],
    pdf: null,
    github: 'https://github.com/Neluyah',
    featured: false,
  },
  {
    id: 6,
    title: 'Analyse de Malware — Forensique',
    category: 'Cybersécurité',
    emoji: '🔬',
    desc: 'Analyse statique et dynamique d\'un échantillon de malware dans un environnement sandbox sécurisé.',
    tags: ['Forensique', 'Sandbox', 'Reverse engineering', 'YARA'],
    pdf: null,
    github: null,
    featured: false,
  },
  {
    id: 7,
    title: 'Serveur de supervision SIEM',
    category: 'Cybersécurité',
    emoji: '📡',
    desc: "Déploiement d'un SIEM open-source (Wazuh) pour la collecte, corrélation et alertes d'événements de sécurité.",
    tags: ['Wazuh', 'SIEM', 'SOC', 'Linux'],
    pdf: null,
    github: null,
    featured: false,
  },
  {
    id: 8,                          // ← numéro unique (incrementez +1)
    title: 'TP 2 — Active Directory',   // ← titre affiché
    category: 'Systèmes & Réseaux', // ← choisissez parmi :
                                    //   'Cybersécurité'
                                    //   'Cloud & DevOps'
                                    //   'Systèmes & Réseaux'
                                    //   'Systèmes d\'Information'
    emoji: '🖥️',                   // ← emoji représentatif
    desc: 'Configuration d\'un Active Directory sous Windows Server 2022...',
    tags: ['Windows Server', 'AD', 'GPO', 'ESAIP'],
    pdf: '/rapports/mon-nouveau-rapport.pdf',  // ← nom exact du fichier
    github: null,                   // ← lien GitHub ou null
    featured: false,                // ← true = mis en avant en haut
  },


];

const categories = ['Tous', 'Cybersécurité', 'Cloud & DevOps', 'Systèmes & Réseaux', 'Systèmes d\'Information'];

// ============================
// Bouton "Consulter" — ouvre un modal interne, PAS un onglet
// ============================
function ConsultBtn({ onClick }) {
  return (
    <button className="pdf-btn pdf-btn--open" onClick={onClick}>
      <FiEye size={15} /> Consulter le rapport
    </button>
  );
}


// ============================
// PAGE PRINCIPALE
// ============================
export default function ProjetsPage() {
  const [active, setActive] = useState('Tous');
  const [openPdf, setOpenPdf] = useState(null); // { pdf, title }

  const filtered = active === 'Tous'
    ? allProjects
    : allProjects.filter((p) => p.category === active);

  const featured = allProjects.filter((p) => p.featured);

  return (
    <div className="projets-page section">
      <div className="container">
        {/* Header */}
        <div className="page-header reveal">
          <span className="tag">Mes Réalisations</span>
          <h1 className="page-title">Projets & TPs</h1>
          <p className="page-subtitle">
            Travaux académiques et personnels en cybersécurité, cloud, systèmes et SI.<br />
            Les rapports s'ouvrent en <strong>lecture seule</strong>, directement sur ce site.
          </p>
        </div>

        {/* ===== PROJETS VEDETTE ===== */}
        <div className="featured-projects reveal">
          {featured.map((p) => (
            <div key={p.id} className="featured-card">
              <div className="featured-card__emoji">{p.emoji}</div>
              <div className="featured-card__content">
                <div className="featured-card__meta">
                  <span className="tag">{p.category}</span>
                  {p.pdf && <span className="tag tag--pdf"><FiFileText size={12} /> Rapport disponible</span>}
                </div>
                <h2 className="featured-card__title">{p.title}</h2>
                <p className="featured-card__desc">{p.desc}</p>
                <div className="featured-card__tags">
                  {p.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
              <div className="featured-card__actions">
                {p.pdf && (
                  <ConsultBtn onClick={() => setOpenPdf({ pdf: p.pdf, title: p.title })} />
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                    <FiGithub size={15} /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ===== FILTRES ===== */}
        <div className="filters reveal">
          <FiFilter size={16} style={{ color: 'var(--muted)' }} />
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== GRILLE PROJETS ===== */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div key={p.id} className="project-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="project-card__top">
                <span className="project-card__emoji">{p.emoji}</span>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="icon-btn">
                    <FiGithub size={16} />
                  </a>
                )}
              </div>
              <span className="project-card__cat">{p.category}</span>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              {p.pdf ? (
                <div className="project-card__pdf-zone">
                  <ConsultBtn onClick={() => setOpenPdf({ pdf: p.pdf, title: p.title })} />
                </div>
              ) : (
                <div className="project-card__no-pdf">Pas de rapport disponible</div>
              )}
            </div>
          ))}
        </div>

        <div className="add-hint reveal">
          <FiFileText />
          <span>Pour ajouter un rapport : déposez votre PDF dans <code>public/rapports/</code></span>
        </div>
      </div>

      {/* ===== VISIONNEUSE PDF react-pdf ===== */}
      {openPdf && (
        <PdfViewer
          pdf={openPdf.pdf}
          title={openPdf.title}
          onClose={() => setOpenPdf(null)}
        />
      )}
    </div>
  );
}
