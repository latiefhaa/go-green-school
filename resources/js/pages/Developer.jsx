import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { UserCircle2, Camera } from 'lucide-react';

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

const DeveloperList = [
    {
        name: 'Latiefha',
        role: 'Full Stack Developer',
        image: '/images/profile/latiefha.jpeg',
        desc: 'Memimpin pengembangan end-to-end, menghubungkan frontend dan backend untuk pengalaman web yang mulus.',
    },
    {
        name: 'Aren',
        role: 'Frontend Developer',
        image: '/images/profile/aren.jpeg',
        desc: 'Merancang antarmuka yang responsif dan interaktif agar website ramah pengguna di semua perangkat.',
    },
    {
        name: 'Rindu',
        role: 'Marketing',
        image: '/images/profile/rindu.jpeg',
        desc: 'Menyusun strategi konten dan komunikasi untuk menjangkau audiens dengan pesan ramah lingkungan.',
    },
    {
        name: 'Josaphat',
        role: 'Designer',
        image: '/images/profile/josaphat.jpeg',
        desc: 'Menciptakan desain visual yang estetis dan tata letak yang mudah dinavigasi untuk seluruh situs.',
    },
];

export default function Developer() {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === 'en';

    return (
        <PageWrap>
            <Hero>
                <HeroInner>
                    <UserCircle2 size={48} color="#ffffff" />
                    <PageTitle>{isEn ? 'Developer Team' : 'Tim Developer'}</PageTitle>
                    <PageSubtitle>
                        {isEn
                            ? 'Meet the people behind the Go Green School website and digital presence. Each team member owns a key role in delivering a polished, modern, and mobile-friendly experience.'
                            : 'Kenali tim yang membangun website Go Green School. Setiap anggota memegang peran penting untuk menghadirkan pengalaman digital yang menarik dan responsif.'}
                    </PageSubtitle>
                </HeroInner>
            </Hero>

            <Content>
                <CardGrid>
                    {DeveloperList.map((dev) => (
                        <ProfileCard key={dev.name}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <ProfileImage src={dev.image} alt={dev.name} />
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
