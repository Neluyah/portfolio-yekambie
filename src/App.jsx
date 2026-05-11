import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import HomePage from './pages/HomePage';
import ProfilPage from './pages/ProfilPage';
import ProjetsPage from './pages/ProjetsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import './App.css';

// Scroll to top on page change
function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Intersection Observer for reveal animations
function RevealObserver() {
  const { pathname } = useLocation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.12 }
      );
      elements.forEach((el) => observer.observe(el));
      // Déclenche immédiatement les éléments déjà visibles
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('visible');
        }
      });
      return () => observer.disconnect();
    }, 50);
    return () => clearTimeout(timeout);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollReset />
      <RevealObserver />
      <Cursor />
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
