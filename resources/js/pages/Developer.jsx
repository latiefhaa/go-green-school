import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { UserCircle2, Camera } from 'lucide-react';
import useThemeMode from '../hooks/useThemeMode';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #f8fff8 0%, #effff2 100%)',
    paddingBottom: '90px',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'fixed',
        inset: '0',
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34,139,34,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34,139,34,0.02) 0%, transparent 50%)`,
        pointerEvents: 'none',
        zIndex: 0,
    },
});

const Hero = styled('div', {
    background: 'linear-gradient(135deg, #14532d 0%, #166534 35%, #228B22 100%)',
    padding: '72px 24px 100px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 120px rgba(0,0,0,0.08)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        zIndex: 0,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-40px',
        left: '-40px',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        zIndex: 0,
    },
});

const HeroInner = styled('div', {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '18px',
    position: 'relative',
    zIndex: 1,
});

const PageTitle = styled('h1', {
    fontSize: '2.3rem',
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1.15,
    animation: `${fadeIn} 0.8s ease forwards`,
    '@lg': { fontSize: '2.8rem' },
});

const PageSubtitle = styled('p', {
    color: 'rgba(255,255,255,0.88)',
    maxWidth: '720px',
    lineHeight: 1.7,
    fontSize: '1rem',
    animation: `${fadeIn} 0.8s ease 0.2s forwards`,
    opacity: 0,
});

const Content = styled('div', {
    maxWidth: '1100px',
    margin: '-60px auto 0',
    padding: '0 24px',
    position: 'relative',
    zIndex: 2,
});

const CardGrid = styled('div', {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: '1fr',
    '@md': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '@lg': { gridTemplateColumns: 'repeat(4, 1fr)' },
});

const ProfileCard = styled('div', {
    background: '#ffffff',
    borderRadius: '26px',
    padding: '28px',
    boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
    border: '1px solid rgba(34,139,34,0.08)',
    textAlign: 'center',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    animation: `${fadeIn} 0.6s ease forwards`,
    '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 28px 70px rgba(15, 23, 42, 0.12)',
    },
    '&:nth-child(1)': { animationDelay: '0.1s' },
    '&:nth-child(2)': { animationDelay: '0.2s' },
    '&:nth-child(3)': { animationDelay: '0.3s' },
    '&:nth-child(4)': { animationDelay: '0.4s' },
});

const ProfileImage = styled('img', {
    width: '120px',
    height: '120px',
    borderRadius: '28px',
    objectFit: 'cover',
    marginBottom: '18px',
    border: '4px solid rgba(34,139,34,0.18)',
    boxShadow: '0 18px 40px rgba(15,23,42,0.12)',
});

const ProfileName = styled('h3', {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '8px',
});

const ProfileRole = styled('p', {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#16a34a',
    marginBottom: '12px',
});

const ProfileDesc = styled('p', {
    fontSize: '0.88rem',
    color: '#4b5563',
    lineHeight: 1.7,
});

const developerImages = {
    Latiefha: '/images/profile/latiefha.jpeg',
    Aren: '/images/profile/aren.jpeg',
    Rindu: '/images/profile/rindu.jpeg',
    Josaphat: '/images/profile/josaphat.jpeg',
};

export default function Developer() {
    const { t } = useTranslation();
    const { mode } = useThemeMode();
    const developers = t('developer.members', { returnObjects: true });

    return (
        <PageWrap className="themed-page developer-page" data-theme-mode={mode}>
            <Hero className="theme-hero">
                <HeroInner>
                    <UserCircle2 size={48} color="#ffffff" />
                    <PageTitle>{t('developer.title')}</PageTitle>
                    <PageSubtitle>{t('developer.subtitle')}</PageSubtitle>
                </HeroInner>
            </Hero>

            <Content>
                <CardGrid>
                    {Array.isArray(developers) && developers.map((dev) => (
                        <ProfileCard key={dev.name}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <ProfileImage src={developerImages[dev.name] || '/images/profile/latiefha.jpeg'} alt={dev.name} />
                            </div>
                            <ProfileName>{dev.name}</ProfileName>
                            <ProfileRole>{dev.role}</ProfileRole>
                            <ProfileDesc>{dev.desc}</ProfileDesc>
                        </ProfileCard>
                    ))}
                </CardGrid>
            </Content>
        </PageWrap>
    );
}
