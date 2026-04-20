import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '../stitches.config';
import { Menu, X, Leaf, Globe, Sun, Moon } from 'lucide-react';

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
                backgroundColor: 'rgba(var(--rgb-accent), 0.9)',
                backdropFilter: 'blur(14px)',
                boxShadow: '0 14px 36px rgba(var(--rgb-ink), 0.16)',
            },
            false: {
                backgroundColor: 'rgba(var(--rgb-accent), 0.88)',
                boxShadow: '0 8px 24px rgba(var(--rgb-ink), 0.1)',
            },
        },
        mode: {
            dark: {
                boxShadow: '0 12px 28px rgba(2, 6, 23, 0.45)',
                backdropFilter: 'none',
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
        fontFamily: "'Fredoka', 'Nunito', sans-serif",
        fontWeight: 700,
        fontSize: '1.25rem',
        color: 'var(--color-surface)',
        lineHeight: 1.1,
    },
    '& .logo-sub': {
        fontSize: '0.65rem',
        fontWeight: 400,
        color: 'rgba(var(--rgb-white),0.85)',
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
    borderRadius: '999px',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: 'rgba(var(--rgb-white),0.95)',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    transform: 'translateY(0)',
    '&:hover': {
        backgroundColor: 'rgba(var(--rgb-white),0.16)',
        color: 'var(--color-surface)',
        transform: 'translateY(-2px)',
    },
    variants: {
        active: {
            true: {
                backgroundColor: 'rgba(var(--rgb-white),0.28)',
                color: 'var(--color-surface)',
                boxShadow: '0 6px 18px rgba(var(--rgb-black),0.12)',
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
    border: '1px solid rgba(var(--rgb-white),0.4)',
    background: 'rgba(var(--rgb-white),0.1)',
    color: 'var(--color-surface)',
    fontSize: '0.8rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: "'Poppins', sans-serif",
    '&:hover': {
        background: 'rgba(var(--rgb-white),0.2)',
        borderColor: 'rgba(var(--rgb-white),0.6)',
    },
});

const ThemeBtn = styled('button', {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px 6px 8px',
    borderRadius: '999px',
    border: '1px solid rgba(var(--rgb-white),0.38)',
    color: 'var(--color-surface)',
    fontSize: '0.8rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    '&:hover': {
        transform: 'translateY(-1px)',
        borderColor: 'rgba(var(--rgb-white),0.6)',
    },
    '& .icon-shell': {
        width: '26px',
        height: '26px',
        borderRadius: '999px',
        position: 'relative',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
    },
    '& .sun-icon, & .moon-icon': {
        position: 'absolute',
        transition: 'opacity 0.28s ease, transform 0.28s ease',
    },
    variants: {
        mode: {
            light: {
                background: 'rgba(var(--rgb-white),0.12)',
                '& .icon-shell': {
                    background: 'linear-gradient(135deg, var(--color-warning-soft), var(--color-warning))',
                    boxShadow: 'inset 0 0 0 1px rgba(var(--rgb-white),0.24)',
                },
                '& .sun-icon': {
                    opacity: 1,
                    transform: 'translateY(0) rotate(0deg) scale(1)',
                    color: 'var(--color-warning)',
                },
                '& .moon-icon': {
                    opacity: 0,
                    transform: 'translateY(8px) rotate(18deg) scale(0.84)',
                    color: 'var(--color-text)',
                },
            },
            dark: {
                background: 'rgba(var(--rgb-ink),0.52)',
                borderColor: 'rgba(var(--rgb-slate),0.45)',
                '& .icon-shell': {
                    background: 'linear-gradient(135deg, var(--color-surface-muted), var(--color-border))',
                    boxShadow: 'inset 0 0 0 1px rgba(var(--rgb-slate),0.3)',
                },
                '& .sun-icon': {
                    opacity: 0,
                    transform: 'translateY(-8px) rotate(-18deg) scale(0.84)',
                    color: 'var(--color-warning)',
                },
                '& .moon-icon': {
                    opacity: 1,
                    transform: 'translateY(0) rotate(0deg) scale(1)',
                    color: 'var(--color-surface-soft)',
                },
            },
        },
    },
});

const MobileMenuBtn = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@md': { display: 'none' },
    background: 'transparent',
    border: 'none',
    color: 'var(--color-surface)',
    cursor: 'pointer',
    padding: '8px',
    minWidth: '48px',
    minHeight: '48px',
    borderRadius: '12px',
    zIndex: 2100,
    transition: 'background-color 0.25s ease, transform 0.15s ease',
    WebkitTapHighlightColor: 'transparent',
    '&:hover': {
        background: 'rgba(var(--rgb-white),0.15)',
    },
    '&:active': {
        transform: 'scale(0.95)',
    },
});

const MobileMenuHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    paddingBottom: '10px',
    borderBottom: '1px solid rgba(var(--rgb-white),0.18)',
    color: 'var(--color-surface)',
});

const MobileLangBtn = styled(LangBtn, {
    width: '100%',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: '16px',
    background: 'rgba(var(--rgb-white),0.12)',
    border: '1px solid rgba(var(--rgb-white),0.28)',
    '&:hover': {
        background: 'rgba(var(--rgb-white),0.18)',
    },
});

const MobileThemeBtn = styled(ThemeBtn, {
    width: '100%',
    justifyContent: 'center',
    padding: '12px 16px',
    borderRadius: '16px',
});

const MobileMenu = styled('div', {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(var(--rgb-accent), 0.98)',
    backdropFilter: 'blur(16px)',
    padding: '18px 20px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    boxShadow: '0 22px 60px rgba(var(--rgb-ink),0.22)',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 2050,
    '@md': { display: 'none' },
    variants: {
        mode: {
            dark: {
                backgroundColor: 'rgba(var(--rgb-ink), 0.98)',
                borderTop: '1px solid rgba(var(--rgb-slate),0.25)',
                backdropFilter: 'none',
            },
        },
    },
});

const MobileNavLink = styled(Link, {
    padding: '14px 18px',
    borderRadius: '999px',
    fontSize: '1rem',
    fontWeight: 600,
    color: 'rgba(var(--rgb-white),0.95)',
    textDecoration: 'none',
    transition: 'transform 0.25s ease, background-color 0.25s ease, color 0.25s ease',
    '&:hover': {
        backgroundColor: 'rgba(var(--rgb-white),0.16)',
        color: 'var(--color-surface)',
        transform: 'translateX(4px)',
    },
    variants: {
        active: {
            true: {
                backgroundColor: 'rgba(var(--rgb-white),0.24)',
                color: 'var(--color-surface)',
            },
        },
    },
});

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('dashboard_theme_mode') === 'dark');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileOpen]);

    useEffect(() => {
        const onThemeChange = (event) => {
            const mode = event?.detail?.mode || localStorage.getItem('dashboard_theme_mode') || 'light';
            setIsDarkMode(mode === 'dark');
        };

        window.addEventListener('ggs-theme-mode-change', onThemeChange);
        return () => window.removeEventListener('ggs-theme-mode-change', onThemeChange);
    }, []);

    const toggleLang = () => {
        const newLang = i18n.language === 'id' ? 'en' : 'id';
        i18n.changeLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    const isActive = (path) => location.pathname === path;
    const themeMode = isDarkMode ? 'dark' : 'light';
    const themeLabel = i18n.language === 'id'
        ? (isDarkMode ? 'Gelap' : 'Terang')
        : (isDarkMode ? 'Dark' : 'Light');
    const themeAriaLabel = i18n.language === 'id'
        ? (isDarkMode ? 'Ganti ke mode terang' : 'Ganti ke mode gelap')
        : (isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');
    const navBackground = isDarkMode
        ? (scrolled ? 'rgba(var(--rgb-ink), 0.92)' : 'rgba(var(--rgb-ink), 0.88)')
        : (scrolled ? 'rgba(var(--rgb-accent),0.93)' : 'rgba(var(--rgb-accent),0.9)');

    const toggleTheme = () => {
        const nextMode = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(nextMode === 'dark');
        localStorage.setItem('dashboard_theme_mode', nextMode);
        if (nextMode === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        window.dispatchEvent(new CustomEvent('ggs-theme-mode-change', { detail: { mode: nextMode } }));
    };

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
            <Nav scrolled={scrolled ? 'true' : 'false'} mode={isDarkMode ? 'dark' : undefined} style={{ backgroundColor: navBackground }}>
                <NavInner>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Logo>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'rgba(var(--rgb-white),0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Leaf size={22} color="var(--color-surface)" />
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
                        <ThemeBtn type="button" mode={themeMode} onClick={toggleTheme} aria-label={themeAriaLabel} title={themeAriaLabel}>
                            <span className="icon-shell">
                                <Sun size={14} className="sun-icon" />
                                <Moon size={14} className="moon-icon" />
                            </span>
                            {themeLabel}
                        </ThemeBtn>
                        <LangBtn onClick={toggleLang}>
                            <Globe size={14} />
                            {i18n.language.toUpperCase()}
                        </LangBtn>
                    </NavLinks>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MobileMenuBtn onClick={() => setMobileOpen(!mobileOpen)}>
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </MobileMenuBtn>
                    </div>
                </NavInner>
            </Nav>

            {mobileOpen && (
                <MobileMenu style={{
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateY(0)' : 'translateY(-12px)',
                    pointerEvents: mobileOpen ? 'auto' : 'none',
                    visibility: mobileOpen ? 'visible' : 'hidden',
                }} mode={isDarkMode ? 'dark' : undefined}>
                    <MobileMenuHeader>
                        <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>Menu</div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(var(--rgb-white),0.84)' }}>{i18n.language === 'id' ? 'ID' : 'EN'}</div>
                    </MobileMenuHeader>
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
                    <MobileThemeBtn type="button" mode={themeMode} onClick={toggleTheme} aria-label={themeAriaLabel}>
                        <span className="icon-shell">
                            <Sun size={14} className="sun-icon" />
                            <Moon size={14} className="moon-icon" />
                        </span>
                        {themeLabel}
                    </MobileThemeBtn>
                    <MobileLangBtn onClick={toggleLang}>
                        <Globe size={16} />
                        {i18n.language === 'id' ? 'Indonesia' : 'English'}
                    </MobileLangBtn>
                </MobileMenu>
            )}

            {/* Spacer for fixed navbar */}
            <div style={{ height: '70px' }} />
        </>
    );
}
