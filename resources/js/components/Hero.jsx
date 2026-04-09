import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, keyframes } from '../stitches.config';
import { ArrowRight, Eye, Leaf } from 'lucide-react';

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
    background: 'linear-gradient(180deg, #f2f8f1 0%, #d8f3d4 40%, #ffffff 100%)',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '80px 0 60px',
});

const HeroOverlay = styled('div', {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(6,78,33,0.06) 0%, transparent 24%), radial-gradient(circle at 90% 10%, rgba(83,184,84,0.08) 0%, transparent 18%), radial-gradient(circle at 65% 70%, rgba(27,103,49,0.05) 0%, transparent 25%)',
    pointerEvents: 'none',
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
    background: '#f0fbf3',
    color: '#0f5132',
    borderRadius: '999px',
    padding: '10px 20px',
    fontSize: '0.82rem',
    fontWeight: 700,
    marginBottom: '24px',
    letterSpacing: '0.08em',
});

const HeroTitle = styled('h1', {
    fontSize: '3rem',
    fontWeight: 900,
    color: '#0f172a',
    lineHeight: 1.02,
    marginBottom: '24px',
    '@lg': {
        fontSize: '4.8rem',
    },
});

const HeroSubtitle = styled('p', {
    fontSize: '1.05rem',
    color: '#334155',
    lineHeight: 1.8,
    maxWidth: '680px',
    marginBottom: '36px',
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
    background: '#0f5132',
    color: '#ffffff',
    padding: '16px 32px',
    borderRadius: '999px',
    fontWeight: 800,
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
    boxShadow: '0 20px 40px rgba(15,23,42,0.15)',
    '&:hover': {
        background: '#103f2c',
        transform: 'translateY(-2px)',
    },
});

const BtnSecondary = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(15,81,50,0.08)',
    color: '#0f5132',
    padding: '16px 32px',
    borderRadius: '999px',
    fontWeight: 700,
    fontSize: '1rem',
    textDecoration: 'none',
    border: '1px solid rgba(15,81,50,0.18)',
    transition: 'all 0.25s ease',
    '&:hover': {
        background: 'rgba(15,81,50,0.15)',
        transform: 'translateY(-2px)',
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
    background: '#ffffff',
    borderRadius: '24px',
    padding: '26px 22px',
    boxShadow: '0 20px 40px rgba(15,23,42,0.08)',
    border: '1px solid rgba(15,81,50,0.08)',
    '& .stat-number': {
        fontSize: '1.9rem',
        fontWeight: 900,
        color: '#0f5132',
        marginBottom: '10px',
    },
    '& .stat-label': {
        fontSize: '0.95rem',
        color: '#475569',
        lineHeight: 1.7,
    },
});

const HeroVisual = styled('div', {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const GlassCard = styled('div', {
    width: '100%',
    maxWidth: '520px',
    padding: '32px',
    borderRadius: '32px',
    background: '#ffffff',
    border: '1px solid rgba(15,81,50,0.12)',
    boxShadow: '0 24px 60px rgba(15,23,42,0.08)',
});

const GlassTitle = styled('h2', {
    fontSize: '2rem',
    color: '#0f5132',
    marginBottom: '18px',
    lineHeight: 1.1,
});

const GlassText = styled('p', {
    color: '#334155',
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
    color: '#334155',
    fontSize: '0.95rem',
    lineHeight: 1.7,
});

const GlassDot = styled('span', {
    width: '10px',
    height: '10px',
    borderRadius: '999px',
    background: '#0f5132',
    marginTop: '6px',
});

const FloatBlob = styled('div', {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.35,
    filter: 'blur(40px)',
    animation: `${floatAnim} 18s ease-in-out infinite`,
});

const GreenIllustration = () => (
    <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '480px' }}>
        <ellipse cx="250" cy="380" rx="220" ry="30" fill="rgba(15,81,50,0.08)" />
        <rect x="236" y="260" width="28" height="120" rx="8" fill="rgba(15,81,50,0.22)" />
        <circle cx="250" cy="220" r="80" fill="rgba(15,81,50,0.18)" />
        <circle cx="250" cy="210" r="70" fill="rgba(15,81,50,0.24)" />
        <circle cx="210" cy="240" r="50" fill="rgba(15,81,50,0.16)" />
        <circle cx="290" cy="240" r="50" fill="rgba(15,81,50,0.16)" />
        <circle cx="250" cy="190" r="65" fill="rgba(15,81,50,0.26)" />
        <circle cx="160" cy="310" r="22" fill="rgba(255,255,255,0.95)" />
        <rect x="144" y="330" width="32" height="48" rx="10" fill="#4ade80" />
        <rect x="148" y="360" width="12" height="30" rx="6" fill="rgba(255,255,255,0.9)" />
        <rect x="164" y="360" width="12" height="30" rx="6" fill="rgba(255,255,255,0.9)" />
        <circle cx="180" cy="320" r="14" fill="#86efac" />
        <rect x="177" y="326" width="6" height="16" rx="3" fill="rgba(255,255,255,0.72)" />
        <circle cx="340" cy="310" r="22" fill="rgba(255,255,255,0.95)" />
        <rect x="324" y="330" width="32" height="48" rx="10" fill="#f9a8d4" />
        <rect x="328" y="360" width="12" height="30" rx="6" fill="rgba(255,255,255,0.9)" />
        <rect x="344" y="360" width="12" height="30" rx="6" fill="rgba(255,255,255,0.9)" />
        <rect x="315" y="318" width="22" height="18" rx="5" fill="rgba(255,255,255,0.78)" />
        <path d="M337 325 C350 320 355 325 352 332" stroke="rgba(255,255,255,0.78)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="420" cy="70" r="35" fill="rgba(255,255,0,0.2)" />
        <circle cx="420" cy="70" r="25" fill="rgba(255,220,0,0.35)" />
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <line key={i}
                x1={420 + 28 * Math.cos(deg * Math.PI/180)}
                y1={70 + 28 * Math.sin(deg * Math.PI/180)}
                x2={420 + 42 * Math.cos(deg * Math.PI/180)}
                y2={70 + 42 * Math.sin(deg * Math.PI/180)}
                stroke="rgba(255,220,0,0.45)" strokeWidth="3" strokeLinecap="round"
            />
        ))}
        <rect x="60" y="260" width="70" height="50" rx="4" fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        <line x1="60" y1="278" x2="130" y2="278" stroke="rgba(255,255,255,0.32)" strokeWidth="1"/>
        <line x1="60" y1="295" x2="130" y2="295" stroke="rgba(255,255,255,0.32)" strokeWidth="1"/>
        <line x1="83" y1="260" x2="83" y2="310" stroke="rgba(255,255,255,0.32)" strokeWidth="1"/>
        <line x1="107" y1="260" x2="107" y2="310" stroke="rgba(255,255,255,0.32)" strokeWidth="1"/>
        <rect x="88" y="310" width="4" height="30" rx="3" fill="rgba(255,255,255,0.46)"/>
        <rect x="380" y="290" width="50" height="60" rx="6" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        <text x="390" y="326" fontSize="20" fill="rgba(255,255,255,0.78)">♻</text>
        <circle cx="200" cy="355" r="16" fill="rgba(255,255,255,0.14)"/>
        <circle cx="300" cy="355" r="12" fill="rgba(255,255,255,0.14)"/>
        <path d="M80 150 C85 145 90 145 95 150" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M110 130 C116 124 122 124 128 130" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
);

export default function Hero() {
    const { t } = useTranslation();

    return (
        <HeroSection>
            <HeroOverlay />
            <FloatBlob style={{ width: '320px', height: '320px', top: '-90px', right: '-120px', background: 'rgba(15,107,44,0.18)' }} />
            <FloatBlob style={{ width: '260px', height: '260px', bottom: '20px', left: '40px', background: 'rgba(122,205,110,0.23)' }} />
            <FloatBlob style={{ width: '180px', height: '180px', top: '22%', left: '28%', background: 'rgba(255,255,255,0.18)' }} />

            <HeroInner>
                <HeroContent>
                    <Badge>
                        <Leaf size={16} />
                        Go Green School
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
                        <StatCard>
                            <div className="stat-number">3+</div>
                            <div className="stat-label">Program unggulan</div>
                        </StatCard>
                        <StatCard>
                            <div className="stat-number">6</div>
                            <div className="stat-label">Kegiatan lintas pelajaran</div>
                        </StatCard>
                        <StatCard>
                            <div className="stat-number">Praktis</div>
                            <div className="stat-label">Fokus pada aksi nyata</div>
                        </StatCard>
                    </StatsRow>
                </HeroContent>

                <HeroVisual>
                    <GreenIllustration />
                    <FloatBlob style={{ width: '240px', height: '240px', top: '10%', right: '-90px', background: 'rgba(255,255,255,0.16)' }} />
                    <FloatBlob style={{ width: '160px', height: '160px', bottom: '8%', left: '5%', background: 'rgba(255,255,255,0.12)' }} />
                </HeroVisual>
            </HeroInner>
        </HeroSection>
    );
}
