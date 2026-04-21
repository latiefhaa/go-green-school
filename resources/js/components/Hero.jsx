import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, keyframes } from '../stitches.config';
import { ArrowRight, Eye, Leaf, Moon } from 'lucide-react';

const fadeInUp = keyframes({
    '0%': { opacity: 0, transform: 'translateY(40px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const floatAnim = keyframes({
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-15px) rotate(3deg)' },
});

const bounceSun = keyframes({
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
});

const swayLeaf = keyframes({
    '0%, 100%': { transform: 'rotate(-8deg) translateY(0px)' },
    '50%': { transform: 'rotate(8deg) translateY(-5px)' },
});

const HeroSection = styled('section', {
    position: 'relative',
    minHeight: 'calc(100vh - 70px)',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '88px 0 110px',
    transition: 'background 0.7s ease',
    variants: {
        mode: {
            light: {
                background: 'linear-gradient(128deg, #7bd36a 0%, #98dd78 52%, #b5e58f 100%)',
                '&::before': {
                    content: '',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(115deg, rgba(var(--rgb-white),0.2) 0%, rgba(var(--rgb-white),0.08) 100%)',
                    pointerEvents: 'none',
                },
            },
            dark: {
                background: 'linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-surface-muted) 48%, #1f3a2d 100%)',
                '&::before': {
                    content: '',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(120deg, rgba(var(--rgb-slate),0.08) 0%, rgba(var(--rgb-ink),0.24) 100%)',
                    pointerEvents: 'none',
                },
            },
        },
    },
});

const HeroOverlay = styled('div', {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    transition: 'background-image 0.7s ease',
    variants: {
        mode: {
            light: {
                backgroundImage: 'radial-gradient(circle at 12% 18%, rgba(var(--rgb-white),0.28) 0%, transparent 30%), radial-gradient(circle at 80% 14%, rgba(var(--rgb-white),0.15) 0%, transparent 24%)',
            },
            dark: {
                backgroundImage: 'radial-gradient(circle at 18% 18%, rgba(var(--rgb-slate),0.16) 0%, transparent 26%), radial-gradient(circle at 82% 14%, rgba(var(--rgb-slate),0.12) 0%, transparent 24%)',
            },
        },
    },
});

const HeroInner = styled('div', {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
    alignItems: 'center',
    '@lg': {
        gridTemplateColumns: '1.05fr 0.95fr',
    },
});

const HeroContent = styled('div', {
    animation: `${fadeInUp} 0.8s ease forwards`,
});

const Badge = styled('span', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '999px',
    padding: '10px 20px',
    fontSize: '0.82rem',
    fontWeight: 700,
    marginBottom: '24px',
    letterSpacing: '0.08em',
    transition: 'all 0.5s ease',
    variants: {
        mode: {
            light: {
                background: 'rgba(var(--rgb-white),0.86)',
                color: 'var(--color-accent-deep)',
            },
            dark: {
                background: 'rgba(var(--rgb-ink),0.62)',
                color: 'var(--color-link)',
                border: '1px solid rgba(var(--rgb-slate),0.35)',
            },
        },
    },
});

const HeroTitle = styled('h1', {
    fontFamily: "'Fredoka', 'Nunito', sans-serif",
    fontSize: '3rem',
    fontWeight: 700,
    color: 'var(--color-accent-deep)',
    lineHeight: 1.06,
    marginBottom: '24px',
    textShadow: '0 2px 8px rgba(var(--rgb-white),0.22)',
    transition: 'color 0.5s ease, text-shadow 0.5s ease',
    variants: {
        mode: {
            light: {},
            dark: {
                color: 'var(--color-text-strong)',
                textShadow: '0 8px 30px rgba(var(--rgb-black),0.35)',
            },
        },
    },
    '@lg': {
        fontSize: '4.6rem',
    },
});

const HeroSubtitle = styled('p', {
    fontSize: '1.05rem',
    color: 'var(--color-text-subtle)',
    lineHeight: 1.8,
    maxWidth: '680px',
    marginBottom: '36px',
    transition: 'color 0.5s ease',
    variants: {
        mode: {
            light: {},
            dark: {
                color: 'var(--color-text-subtle)',
            },
        },
    },
    '@lg': {
        fontSize: '1.15rem',
    },
});

const BtnGroup = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
});

const BtnPrimary = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: '#2f9e44',
    color: 'var(--color-surface)',
    padding: '16px 32px',
    borderRadius: '999px',
    fontWeight: 800,
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease',
    boxShadow: '0 18px 38px rgba(var(--rgb-accent-strong),0.34)',
    '&:hover': {
        background: '#37b24d',
        transform: 'translateY(-2px) scale(1.03)',
        boxShadow: '0 24px 44px rgba(var(--rgb-accent-strong),0.42)',
    },
    variants: {
        mode: {
            light: {},
            dark: {
                background: 'var(--color-accent-strong)',
                boxShadow: '0 20px 40px rgba(var(--rgb-accent-strong),0.35)',
                '&:hover': {
                    background: 'var(--color-accent-strong)',
                },
            },
        },
    },
});

const BtnSecondary = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: '#ffd54a',
    color: '#4a3500',
    padding: '16px 32px',
    borderRadius: '999px',
    fontWeight: 700,
    fontSize: '1rem',
    textDecoration: 'none',
    border: '2px solid #b78600',
    transition: 'transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease',
    boxShadow: '0 14px 30px rgba(183,134,0,0.24)',
    '&:hover': {
        background: '#ffdf68',
        transform: 'translateY(-2px) scale(1.03)',
        boxShadow: '0 18px 36px rgba(183,134,0,0.32)',
    },
    variants: {
        mode: {
            light: {},
            dark: {
                background: 'rgba(var(--rgb-ink),0.45)',
                color: 'var(--color-warning-soft)',
                border: '2px solid rgba(var(--rgb-warning),0.7)',
                boxShadow: '0 14px 30px rgba(var(--rgb-ink),0.32)',
                '&:hover': {
                    background: 'rgba(var(--rgb-ink),0.65)',
                },
            },
        },
    },
});

const StatsRow = styled('div', {
    display: 'grid',
    gap: '16px',
    marginTop: '42px',
    '@sm': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
});

const StatCard = styled('div', {
    background: 'rgba(var(--rgb-white),0.9)',
    borderRadius: '24px',
    padding: '24px 20px',
    boxShadow: '0 16px 36px rgba(var(--rgb-ink),0.14)',
    border: '1px solid rgba(var(--rgb-white),0.4)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 22px 42px rgba(var(--rgb-ink),0.2)',
    },
    '& .stat-icon': {
        fontSize: '1.15rem',
        marginBottom: '8px',
        lineHeight: 1,
    },
    '& .stat-number': {
        fontSize: '1.9rem',
        fontWeight: 900,
        color: 'var(--color-accent-deep)',
        marginBottom: '4px',
    },
    '& .stat-title': {
        fontSize: '1rem',
        color: 'var(--color-accent-deep)',
        lineHeight: 1.4,
        fontWeight: 700,
        marginBottom: '6px',
    },
    '& .stat-desc': {
        fontSize: '0.88rem',
        color: 'var(--color-text-subtle)',
        lineHeight: 1.5,
    },
    variants: {
        mode: {
            light: {},
            dark: {
                background: 'linear-gradient(135deg, rgba(var(--rgb-ink),0.75), rgba(var(--rgb-ink),0.85))',
                border: '1px solid rgba(var(--rgb-slate),0.24)',
                '& .stat-number': {
                    color: 'var(--color-surface-muted)',
                },
                '& .stat-title': {
                    color: 'var(--color-surface-muted)',
                },
                '& .stat-desc': {
                    color: 'rgba(var(--rgb-white),0.9)',
                },
            },
        },
        tone: {
            mint: {
                background: 'linear-gradient(135deg, rgba(var(--rgb-white),0.92), rgba(203,255,208,0.88))',
            },
            sky: {
                background: 'linear-gradient(135deg, rgba(var(--rgb-white),0.92), rgba(198,244,224,0.9))',
            },
            sun: {
                background: 'linear-gradient(135deg, rgba(var(--rgb-white),0.92), rgba(255,236,176,0.9))',
            },
        },
    },
});

const HeroVisual = styled('div', {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
        filter: 'saturate(1.1) contrast(1.02)',
    },
});

const GlassCard = styled('div', {
    width: '100%',
    maxWidth: '520px',
    padding: '32px',
    borderRadius: '32px',
    background: 'var(--color-surface)',
    border: '1px solid rgba(15,81,50,0.12)',
    boxShadow: '0 24px 60px rgba(var(--rgb-ink),0.08)',
});

const GlassTitle = styled('h2', {
    fontSize: '2rem',
    color: 'var(--color-accent-deep)',
    marginBottom: '18px',
    lineHeight: 1.1,
});

const GlassText = styled('p', {
    color: 'var(--color-text-subtle)',
    lineHeight: 1.8,
    marginBottom: '24px',
});

const GlassList = styled('ul', {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '16px',
});

const GlassItem = styled('li', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    color: 'var(--color-text-subtle)',
    fontSize: '0.95rem',
    lineHeight: 1.7,
});

const GlassDot = styled('span', {
    width: '10px',
    height: '10px',
    borderRadius: '999px',
    background: 'var(--color-accent-deep)',
    marginTop: '6px',
});

const FloatBlob = styled('div', {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.35,
    filter: 'blur(40px)',
    animation: `${floatAnim} 18s ease-in-out infinite`,
});

const AnimatedSun = styled('div', {
    position: 'absolute',
    top: '42px',
    right: '64px',
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 35% 35%, #fff7c9 0%, var(--color-warning-soft) 62%, var(--color-warning) 100%)',
    boxShadow: '0 0 0 8px rgba(var(--rgb-warning),0.16), 0 0 34px rgba(var(--rgb-warning),0.36)',
    animation: `${bounceSun} 3.2s ease-in-out infinite`,
    zIndex: 2,
    transition: 'top 0.9s ease, opacity 0.9s ease, transform 0.9s ease',
    variants: {
        mode: {
            light: {},
            dark: {
                top: '190px',
                opacity: 0,
                transform: 'scale(0.85)',
            },
        },
    },
});

const MoonOrb = styled('div', {
    position: 'absolute',
    top: '-40px',
    right: '64px',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 35% 35%, var(--color-surface-soft) 0%, var(--color-text) 60%, var(--color-text-subtle) 100%)',
    boxShadow: '0 0 0 8px rgba(var(--rgb-slate),0.16), 0 0 32px rgba(var(--rgb-slate),0.3)',
    zIndex: 2,
    opacity: 0,
    transform: 'scale(0.84)',
    transition: 'top 0.9s ease, opacity 0.9s ease, transform 0.9s ease',
    '&::after': {
        content: '',
        position: 'absolute',
        top: '10px',
        left: '18px',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        background: 'rgba(var(--rgb-slate),0.35)',
    },
    variants: {
        mode: {
            light: {},
            dark: {
                top: '42px',
                opacity: 1,
                transform: 'scale(1)',
            },
        },
    },
});

const FloatingLeaf = styled('div', {
    position: 'absolute',
    color: 'rgba(var(--rgb-white),0.88)',
    animation: `${swayLeaf} 4.5s ease-in-out infinite`,
    zIndex: 2,
});

const WaveDivider = styled('div', {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-1px',
    lineHeight: 0,
    '& svg': {
        display: 'block',
        width: '100%',
        height: '86px',
    },
});

const GreenIllustration = () => (
    <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '480px' }}>
        <ellipse cx="250" cy="380" rx="220" ry="30" fill="rgba(var(--rgb-accent),0.1)" />
        <rect x="236" y="260" width="28" height="120" rx="8" fill="rgba(var(--rgb-warning),0.4)" />
        <circle cx="250" cy="220" r="80" fill="rgba(var(--rgb-accent-strong),0.25)" />
        <circle cx="250" cy="210" r="70" fill="rgba(var(--rgb-accent-strong),0.28)" />
        <circle cx="210" cy="240" r="50" fill="rgba(var(--rgb-accent-strong),0.24)" />
        <circle cx="290" cy="240" r="50" fill="rgba(var(--rgb-accent-strong),0.24)" />
        <circle cx="250" cy="190" r="65" fill="rgba(var(--rgb-accent),0.32)" />
        <circle cx="160" cy="310" r="22" fill="rgba(var(--rgb-white),0.95)" />
        <rect x="144" y="330" width="32" height="48" rx="10" fill="var(--color-accent-strong)" />
        <rect x="148" y="360" width="12" height="30" rx="6" fill="rgba(var(--rgb-white),0.9)" />
        <rect x="164" y="360" width="12" height="30" rx="6" fill="rgba(var(--rgb-white),0.9)" />
        <circle cx="180" cy="320" r="14" fill="var(--color-warning-soft)" />
        <rect x="177" y="326" width="6" height="16" rx="3" fill="rgba(var(--rgb-white),0.72)" />
        <circle cx="340" cy="310" r="22" fill="rgba(var(--rgb-white),0.95)" />
        <rect x="324" y="330" width="32" height="48" rx="10" fill="var(--color-link)" />
        <rect x="328" y="360" width="12" height="30" rx="6" fill="rgba(var(--rgb-white),0.9)" />
        <rect x="344" y="360" width="12" height="30" rx="6" fill="rgba(var(--rgb-white),0.9)" />
        <rect x="315" y="318" width="22" height="18" rx="5" fill="rgba(var(--rgb-white),0.78)" />
        <path d="M337 325 C350 320 355 325 352 332" stroke="rgba(var(--rgb-white),0.78)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <rect x="60" y="260" width="70" height="50" rx="4" fill="rgba(var(--rgb-white),0.13)" stroke="rgba(var(--rgb-white),0.3)" strokeWidth="2"/>
        <line x1="60" y1="278" x2="130" y2="278" stroke="rgba(var(--rgb-white),0.32)" strokeWidth="1"/>
        <line x1="60" y1="295" x2="130" y2="295" stroke="rgba(var(--rgb-white),0.32)" strokeWidth="1"/>
        <line x1="83" y1="260" x2="83" y2="310" stroke="rgba(var(--rgb-white),0.32)" strokeWidth="1"/>
        <line x1="107" y1="260" x2="107" y2="310" stroke="rgba(var(--rgb-white),0.32)" strokeWidth="1"/>
        <rect x="88" y="310" width="4" height="30" rx="3" fill="rgba(var(--rgb-white),0.46)"/>
        <rect x="380" y="290" width="50" height="60" rx="6" fill="rgba(var(--rgb-white),0.14)" stroke="rgba(var(--rgb-white),0.3)" strokeWidth="2"/>
        <text x="390" y="326" fontSize="20" fill="rgba(var(--rgb-white),0.78)">?</text>
        <circle cx="200" cy="355" r="16" fill="rgba(var(--rgb-white),0.14)"/>
        <circle cx="300" cy="355" r="12" fill="rgba(var(--rgb-white),0.14)"/>
        <path d="M80 150 C85 145 90 145 95 150" stroke="rgba(var(--rgb-white),0.6)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M110 130 C116 124 122 124 128 130" stroke="rgba(var(--rgb-white),0.5)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
);

export default function Hero() {
    const { t } = useTranslation();
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('dashboard_theme_mode') === 'dark');
    const stats = t('hero.stats', { returnObjects: true });
    const defaultStats = [
        { icon: '??', value: '3+', title: 'Program unggulan', desc: 'Aksi hijau utama yang berjalan di sekolah.' },
        { icon: '??', value: '6+', title: 'Proyek lintas pelajaran', desc: 'Kolaborasi siswa dari berbagai mapel.' },
        { icon: '?', value: 'Setiap hari', title: 'Kebiasaan hijau', desc: 'Fokus pada aksi nyata yang konsisten.' },
    ];
    const statData = Array.isArray(stats) ? stats : defaultStats;
    const statTones = ['mint', 'sky', 'sun'];
    const mode = isDarkMode ? 'dark' : 'light';

    useEffect(() => {
        const syncTheme = (modeName) => setIsDarkMode(modeName === 'dark');
        const onThemeChange = (event) => {
            const modeName = event?.detail?.mode || localStorage.getItem('dashboard_theme_mode') || 'light';
            syncTheme(modeName);
        };
        const onStorageChange = (event) => {
            if (event.key === 'dashboard_theme_mode') {
                syncTheme(event.newValue || 'light');
            }
        };

        syncTheme(localStorage.getItem('dashboard_theme_mode') || 'light');
        window.addEventListener('ggs-theme-mode-change', onThemeChange);
        window.addEventListener('storage', onStorageChange);

        return () => {
            window.removeEventListener('ggs-theme-mode-change', onThemeChange);
            window.removeEventListener('storage', onStorageChange);
        };
    }, []);

    return (
        <HeroSection mode={mode}>
            <HeroOverlay mode={mode} />
            <AnimatedSun mode={mode} />
            <MoonOrb mode={mode}>
                <Moon size={24} style={{ position: 'absolute', right: '10px', top: '22px', color: 'var(--color-text-subtle)' }} />
            </MoonOrb>
            <FloatingLeaf style={{ top: '22%', left: '7%' }}>
                <Leaf size={26} />
            </FloatingLeaf>
            <FloatingLeaf style={{ top: '14%', left: '46%', animationDelay: '0.8s' }}>
                <Leaf size={22} />
            </FloatingLeaf>
            <FloatingLeaf style={{ top: '32%', right: '14%', animationDelay: '1.3s' }}>
                <Leaf size={24} />
            </FloatingLeaf>
            <FloatBlob style={{ width: '320px', height: '320px', top: '-90px', right: '-120px', background: 'rgba(var(--rgb-accent),0.18)' }} />
            <FloatBlob style={{ width: '260px', height: '260px', bottom: '20px', left: '40px', background: 'rgba(var(--rgb-accent-strong),0.23)' }} />
            <FloatBlob style={{ width: '180px', height: '180px', top: '22%', left: '28%', background: 'rgba(var(--rgb-white),0.18)' }} />

            <HeroInner>
                <HeroContent>
                    <Badge mode={mode}>
                        <Leaf size={16} />
                        {t('app_name')}
                    </Badge>

                    <HeroTitle mode={mode}>{t('hero.title')}</HeroTitle>
                    <HeroSubtitle mode={mode}>{t('hero.subtitle')}</HeroSubtitle>

                    <BtnGroup>
                        <BtnPrimary to="/program" mode={mode}>
                            {t('hero.cta_program')}
                            <ArrowRight size={18} />
                        </BtnPrimary>
                        <BtnSecondary to="/visi-misi" mode={mode}>
                            <Eye size={18} />
                            {t('hero.cta_visi')}
                        </BtnSecondary>
                    </BtnGroup>

                    <StatsRow>
                        {statData.slice(0, 3).map((item, idx) => (
                            <StatCard key={`${item.title}-${idx}`} tone={statTones[idx] || 'mint'} mode={mode}>
                                <div className="stat-icon">{item.icon}</div>
                                <div className="stat-number">{item.value}</div>
                                <div className="stat-title">{item.title}</div>
                                <div className="stat-desc">{item.desc}</div>
                            </StatCard>
                        ))}
                    </StatsRow>
                </HeroContent>

                <HeroVisual>
                    <GreenIllustration />
                    <FloatBlob style={{ width: '240px', height: '240px', top: '10%', right: '-90px', background: 'rgba(var(--rgb-white),0.16)' }} />
                    <FloatBlob style={{ width: '160px', height: '160px', bottom: '8%', left: '5%', background: 'rgba(var(--rgb-white),0.12)' }} />
                </HeroVisual>
            </HeroInner>
            <WaveDivider>
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,38 C180,102 360,104 540,68 C720,32 900,-4 1080,18 C1230,36 1320,64 1440,44 L1440,120 L0,120 Z" fill={isDarkMode ? 'var(--color-bg)' : 'var(--color-surface)'} />
                </svg>
            </WaveDivider>
        </HeroSection>
    );
}
