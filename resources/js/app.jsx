import '@vitejs/plugin-react/preamble';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VisiMisi from './pages/VisiMisi';
import Programs from './pages/Programs';
import ProgramInfo from './pages/ProgramInfo';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Calculator from './pages/Calculator';
import Profil from './pages/Profil';
import Developer from './pages/Developer';
import '../css/app.css';

function AppLayout() {
    const location = useLocation();
    const [themeMode, setThemeMode] = useState(() => localStorage.getItem('dashboard_theme_mode') || 'light');

    const applyThemeAttribute = (mode) => {
        const normalizedMode = mode === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme-mode', normalizedMode);
        document.body.setAttribute('data-theme-mode', normalizedMode);

        if (normalizedMode === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    };

    useEffect(() => {
        const onThemeChange = (event) => {
            const mode = event?.detail?.mode || localStorage.getItem('dashboard_theme_mode') || 'light';
            setThemeMode(mode);
            applyThemeAttribute(mode);
        };

        window.addEventListener('ggs-theme-mode-change', onThemeChange);
        return () => window.removeEventListener('ggs-theme-mode-change', onThemeChange);
    }, []);

    useEffect(() => {
        applyThemeAttribute(themeMode);
    }, [themeMode]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    useEffect(() => {
        const nodes = Array.from(document.querySelectorAll('.scroll-reveal'));
        if (!nodes.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        nodes.forEach((node) => {
            node.classList.remove('is-visible');
            observer.observe(node);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
                <main className="flex-1 route-transition" key={location.pathname} data-theme={themeMode}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/visi-misi" element={<VisiMisi />} />
                        <Route path="/program" element={<Programs />} />
                        <Route path="/program-info" element={<ProgramInfo />} />
                        <Route path="/galeri" element={<Gallery />} />
                        <Route path="/kontak" element={<Contact />} />
                        <Route path="/kalkulator-bank-sampah" element={<Calculator />} />
                        <Route path="/profil-sekolah" element={<Profil />} />
                        <Route path="/developer" element={<Developer />} />
                    </Routes>
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
if (container) {
    createRoot(container).render(<App />);
}
