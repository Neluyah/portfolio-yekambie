import React from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './PdfViewer.css';

export default function PdfViewer({ pdf, title, onClose }) {
  // L'overlay transparent par-dessus l'iframe empêche les interactions
  // avec la barre d'outils native du navigateur
  return (
    <div className="pdfv-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="pdfv-modal" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="pdfv-header">
          <div className="pdfv-header__left">
            <span className="pdfv-header__title">{title}</span>
            <span className="pdfv-badge">🔒 Lecture seule</span>
          </div>
          <button className="pdfv-close" onClick={onClose} aria-label="Fermer">
            <FiX size={18} />
          </button>
        </div>

        {/* CORPS — iframe + overlay bloquant */}
        <div className="pdfv-body">
          <iframe
            src={`${pdf}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
            title={title}
            className="pdfv-frame"
          />
          {/* Overlay transparent qui capture les événements souris
              et empêche les clics sur la toolbar native du PDF */}
          <div className="pdfv-block-overlay" />
        </div>

        {/* FOOTER */}
        <div className="pdfv-footer">
          <span>📄 Rapport académique — ESAIP École d'Ingénieurs · Yohann Ekambie Souamy</span>
          <button className="pdfv-close-btn" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
}
