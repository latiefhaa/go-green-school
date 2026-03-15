import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, keyframes } from '../stitches.config';
import { ArrowRight, Eye, Leaf, Sun, Droplets } from 'lucide-react';

const fadeInUp = keyframes({
    '0%': { opacity: 0, transform: 'translateY(40px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const floatAnim = keyframes({
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-15px) rotate(3deg)' },
});

const HeroSection = styled('section', {
    position: 'relative',
    minHeight: 'calc(100vh - 70px)',
    background: 'linear-gradient(135deg, #1a6b1a 0%, #228B22 40%, #2ea82e 70%, #3cb33c 100%)',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '60px 0',
});

const BgDecor = styled('div', {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    pointerEvents: 'none',
});

const HeroInner = styled('div', {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '48px',
    alignItems: 'center',
    '@lg': {
        gridTemplateColumns: '1fr 1fr',
    },
});

const HeroContent = styled('div', {
    animation: `${fadeInUp} 0.8s ease forwards`,
});

const Badge = styled('span', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '20px',
    padding: '6px 16px',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '20px',
    backdropFilter: 'blur(10px)',
});

const HeroTitle = styled('h1', {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1.15,
    marginBottom: '8px',
    '@lg': {
        fontSize: '3.5rem',
    },
});

const HeroSubtitle = styled('p', {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.85)',
    marginBottom: '32px',
    lineHeight: 1.6,
    fontWeight: 400,
    '@lg': {
        fontSize: '1.25rem',
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
    gap: '8px',
    background: '#ffffff',
    color: '#228B22',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: 700,
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    '&:hover': {
        background: '#f0fff0',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
    },
});

const BtnSecondary = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'transparent',
    color: '#ffffff',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: 600,
    fontSize: '0.95rem',
    textDecoration: 'none',
    border: '2px solid rgba(255,255,255,0.6)',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'rgba(255,255,255,0.15)',
        borderColor: '#ffffff',
        transform: 'translateY(-2px)',
    },
});

const StatsRow = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    marginTop: '48px',
});

const StatItem = styled('div', {
    '& .stat-number': {
        fontSize: '1.8rem',
        fontWeight: 800,
        color: '#ffffff',
        lineHeight: 1,
    },
    '& .stat-label': {
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.75)',
        marginTop: '4px',
        fontWeight: 400,
    },
});

const HeroIllustration = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: `${fadeInUp} 0.8s 0.3s ease both`,
    position: 'relative',
});

// SVG Illustration
const GreenIllustration = () => (
    <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '480px' }}>
        {/* Ground */}
        <ellipse cx="250" cy="380" rx="220" ry="30" fill="rgba(255,255,255,0.1)" />
        {/* Big tree */}
        <rect x="236" y="260" width="28" height="120" rx="8" fill="rgba(255,255,255,0.3)" />
        <circle cx="250" cy="220" r="80" fill="rgba(255,255,255,0.15)" />
        <circle cx="250" cy="210" r="70" fill="rgba(255,255,255,0.2)" />
        <circle cx="210" cy="240" r="50" fill="rgba(255,255,255,0.15)" />
        <circle cx="290" cy="240" r="50" fill="rgba(255,255,255,0.15)" />
        <circle cx="250" cy="190" r="65" fill="rgba(255,255,255,0.25)" />
        {/* Student 1 */}
        <circle cx="160" cy="310" r="22" fill="rgba(255,255,255,0.9)" />
        <rect x="144" y="330" width="32" height="48" rx="10" fill="#4ade80" />
        <rect x="148" y="360" width="12" height="30" rx="6" fill="rgba(255,255,255,0.8)" />
        <rect x="164" y="360" width="12" height="30" rx="6" fill="rgba(255,255,255,0.8)" />
        {/* Plant in hands of student 1 */}
        <circle cx="180" cy="320" r="14" fill="#86efac" />
        <rect x="177" y="326" width="6" height="16" rx="3" fill="rgba(255,255,255,0.6)" />
        {/* Student 2 */}
        <circle cx="340" cy="310" r="22" fill="rgba(255,255,255,0.9)" />
        <rect x="324" y="330" width="32" height="48" rx="10" fill="#f9a8d4" />
        <rect x="328" y="360" width="12" height="30" rx="6" fill="rgba(255,255,255,0.8)" />
        <rect x="344" y="360" width="12" height="30" rx="6" fill="rgba(255,255,255,0.8)" />
        {/* Watering can */}
        <rect x="315" y="318" width="22" height="18" rx="5" fill="rgba(255,255,255,0.7)" />
        <path d="M337 325 C350 320 355 325 352 332" stroke="rgba(255,255,255,0.7)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Sun */}
        <circle cx="420" cy="70" r="35" fill="rgba(255,255,0,0.3)" />
        <circle cx="420" cy="70" r="25" fill="rgba(255,220,0,0.4)" />
        {/* Rays */}
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <line key={i}
                x1={420 + 28 * Math.cos(deg * Math.PI/180)}
                y1={70 + 28 * Math.sin(deg * Math.PI/180)}
                x2={420 + 42 * Math.cos(deg * Math.PI/180)}
                y2={70 + 42 * Math.sin(deg * Math.PI/180)}
                stroke="rgba(255,220,0,0.5)" strokeWidth="3" strokeLinecap="round"
            />
        ))}
        {/* Solar panel */}
        <rect x="60" y="260" width="70" height="50" rx="4" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
        <line x1="60" y1="278" x2="130" y2="278" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        <line x1="60" y1="295" x2="130" y2="295" strokeWidth="1" stroke="rgba(255,255,255,0.4)"/>
        <line x1="83" y1="260" x2="83" y2="310" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        <line x1="107" y1="260" x2="107" y2="310" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        <rect x="88" y="310" width="4" height="30" fill="rgba(255,255,255,0.3)"/>
        {/* Recycle bin */}
        <rect x="380" y="290" width="50" height="60" rx="6" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
        <text x="390" y="326" fontSize="20" fill="rgba(255,255,255,0.8)">♻</text>
        {/* Small plants */}
        <circle cx="200" cy="355" r="16" fill="rgba(255,255,255,0.2)"/>
        <rect x="197" y="360" width="6" height="20" rx="3" fill="rgba(255,255,255,0.3)"/>
        <circle cx="300" cy="355" r="12" fill="rgba(255,255,255,0.2)"/>
        <rect x="297" y="360" width="6" height="18" rx="3" fill="rgba(255,255,255,0.3)"/>
        {/* Birds */}
        <path d="M80 150 C85 145 90 145 95 150" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M110 130 C116 124 122 124 128 130" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
);

export default function Hero() {
    const { t } = useTranslation();

    return (
        <HeroSection>
            {/* Background decorations */}
            <BgDecor style={{ width: '400px', height: '400px', top: '-100px', right: '-100px' }} />
            <BgDecor style={{ width: '300px', height: '300px', bottom: '-50px', left: '-80px' }} />
            <BgDecor style={{ width: '200px', height: '200px', top: '20%', left: '30%' }} />

            <HeroInner>
                <HeroContent>
                    <Badge>
                        <Leaf size={14} />
                        Go Green School 2024
                    </Badge>

                    <HeroTitle>{t('hero.title')}</HeroTitle>
                    <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>

                    <BtnGroup>
                        <BtnPrimary to="/program">
                            {t('hero.cta_program')}
                            <ArrowRight size={18} />
                        </BtnPrimary>
                        <BtnSecondary to="/visi-misi">
                            <Eye size={18} />
                            {t('hero.cta_visi')}
                        </BtnSecondary>
                    </BtnGroup>

                    <StatsRow>
                        <StatItem>
                            <div className="stat-number">4+</div>
                            <div className="stat-label">Program Unggulan</div>
                        </StatItem>
                        <div style={{ width: '1px', background: 'rgba(255,255,255,0.3)', margin: '0 8px' }} />
                        <StatItem>
                            <div className="stat-number">6</div>
                            <div className="stat-label">Mata Pelajaran</div>
                        </StatItem>
                        <div style={{ width: '1px', background: 'rgba(255,255,255,0.3)', margin: '0 8px' }} />
                        <StatItem>
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Siswa Aktif</div>
                        </StatItem>
                    </StatsRow>
                </HeroContent>

                <HeroIllustration>
                    <GreenIllustration />
                </HeroIllustration>
            </HeroInner>

            {/* Wave decoration */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0 }}>
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F0FFF0" />
                </svg>
            </div>
        </HeroSection>
    );
}
