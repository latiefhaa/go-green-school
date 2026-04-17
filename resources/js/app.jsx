import '@vitejs/plugin-react/preamble';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
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
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
if (container) {
    createRoot(container).render(<App />);
}
