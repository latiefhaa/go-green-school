import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '../stitches.config';
import { Menu, X, Leaf, Globe } from 'lucide-react';

const Nav = styled('nav', {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2000,
    transition: 'background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease, backdrop-filter 0.35s ease',
    variants: {
        scrolled: {
            true: {
                backgroundColor: 'rgba(34, 139, 34, 0.92)',
                backdropFilter: 'blur(14px)',
                boxShadow: '0 18px 60px rgba(15, 23, 42, 0.16)',
            },
            false: {
                backgroundColor: 'transparent',
            },
        },
    },
});

const NavInner = styled('div', {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px',
});

const Logo = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    '& .logo-text': {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        fontSize: '1.25rem',
        color: '#ffffff',
        lineHeight: 1.1,
    },
    '& .logo-sub': {
        fontSize: '0.65rem',
        fontWeight: 400,
        color: 'rgba(255,255,255,0.85)',
        display: 'block',
    },
});

const NavLinks = styled('div', {
    display: 'none',
    alignItems: 'center',
    gap: '4px',
    '@md': {
        display: 'flex',
    },
});

const NavLink = styled(Link, {
    padding: '10px 16px',
    borderRadius: '12px',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.95)',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    transform: 'translateY(0)',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.16)',
        color: '#ffffff',
        transform: 'translateY(-2px)',
    },
    variants: {
        active: {
            true: {
                backgroundColor: 'rgba(255,255,255,0.24)',
                color: '#ffffff',
            },
        },
    },
});

const LangBtn = styled('button', {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.4)',
    background: 'rgba(255,255,255,0.1)',
    color: '#ffffff',
    fontSize: '0.8rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: "'Poppins', sans-serif",
    '&:hover': {
        background: 'rgba(255,255,255,0.2)',
        borderColor: 'rgba(255,255,255,0.6)',
    },
});

const MobileMenuBtn = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@md': { display: 'none' },
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    padding: '8px',
    minWidth: '48px',
    minHeight: '48px',
    borderRadius: '12px',
    zIndex: 2100,
    transition: 'background-color 0.25s ease, transform 0.15s ease',
    WebkitTapHighlightColor: 'transparent',
    '&:hover': {
        background: 'rgba(255,255,255,0.15)',
    },
    '&:active': {
        transform: 'scale(0.95)',
    },
});

const MobileMenu = styled('div', {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(34, 139, 34, 0.98)',
    backdropFilter: 'blur(16px)',
    padding: '18px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    boxShadow: '0 22px 60px rgba(15,23,42,0.22)',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 2050,
    '@md': { display: 'none' },
});

const MobileNavLink = styled(Link, {
    padding: '14px 18px',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.95)',
    textDecoration: 'none',
    transition: 'transform 0.25s ease, background-color 0.25s ease, color 0.25s ease',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.16)',
        color: '#ffffff',
        transform: 'translateX(4px)',
    },
    variants: {
        active: {
            true: {
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: '#ffffff',
            },
        },
    },
});

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const toggleLang = () => {
        const newLang = i18n.language === 'id' ? 'en' : 'id';
        i18n.changeLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: '/', label: t('nav.home') },
        { path: '/visi-misi', label: t('nav.visi_misi') },
        { path: '/program', label: t('nav.program') },
        { path: '/kalkulator-bank-sampah', label: t('nav.kalkulator') },
        { path: '/profil-sekolah', label: t('nav.profil') },
        { path: '/developer', label: t('nav.developer') },
        { path: '/galeri', label: t('nav.galeri') },
    ];

    return (
        <>
            <Nav scrolled={scrolled ? 'true' : 'false'} style={{ backgroundColor: scrolled ? 'rgba(34,139,34,0.97)' : '#228B22' }}>
                <NavInner>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Logo>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'rgba(255,255,255,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Leaf size={22} color="#ffffff" />
                            </div>
                            <div>
                                <span className="logo-text">Go Green School</span>
                                <span className="logo-sub">{t('tagline')}</span>
                            </div>
                        </Logo>
                    </Link>

                    <NavLinks>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                active={isActive(item.path) ? 'true' : undefined}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <LangBtn onClick={toggleLang}>
                            <Globe size={14} />
                            {i18n.language.toUpperCase()}
                        </LangBtn>
                    </NavLinks>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <LangBtn onClick={toggleLang} style={{ display: 'none' }} className="md:flex">
                            <Globe size={14} />
                            {i18n.language.toUpperCase()}
                        </LangBtn>
                        <MobileMenuBtn onClick={() => setMobileOpen(!mobileOpen)}>
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </MobileMenuBtn>
                    </div>
                </NavInner>
            </Nav>

            {mobileOpen && (
                <MobileMenu style={{
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateY(0)' : 'translateY(-10px)',
                    pointerEvents: mobileOpen ? 'auto' : 'none',
                    visibility: mobileOpen ? 'visible' : 'hidden',
                }}>
                    {navItems.map((item) => (
                        <MobileNavLink
                            key={item.path}
                            to={item.path}
                            active={isActive(item.path) ? 'true' : undefined}
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </MobileNavLink>
                    ))}
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                        <LangBtn onClick={toggleLang} style={{ width: '100%', justifyContent: 'center' }}>
                            <Globe size={14} />
                            {i18n.language === 'id' ? '🇮🇩 Indonesia' : '🇬🇧 English'}
                        </LangBtn>
                    </div>
                </MobileMenu>
            )}

            {/* Spacer for fixed navbar */}
            <div style={{ height: '70px' }} />
        </>
    );
}
