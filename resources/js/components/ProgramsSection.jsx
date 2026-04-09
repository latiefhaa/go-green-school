import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { Recycle, Sprout, Zap, BookOpen, ArrowRight } from 'lucide-react';
import axios from 'axios';

const Section = styled('section', {
    padding: '80px 24px',
    background: '#F0FFF0',
});

const Inner = styled('div', {
    maxWidth: '1280px',
    margin: '0 auto',
});

const SectionHeader = styled('div', {
    textAlign: 'center',
    marginBottom: '56px',
});

const SectionBadge = styled('span', {
    display: 'inline-block',
    background: 'rgba(34,139,34,0.1)',
    color: '#228B22',
    borderRadius: '20px',
    padding: '6px 18px',
    fontSize: '0.8rem',
    fontWeight: 600,
    marginBottom: '12px',
    border: '1px solid rgba(34,139,34,0.2)',
});

const SectionTitle = styled('h2', {
    fontSize: '2rem',
    fontWeight: 800,
    color: '#1f2937',
    marginBottom: '16px',
    '@lg': { fontSize: '2.5rem' },
});

const SectionSubtitle = styled('p', {
    fontSize: '1rem',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
});

const CardGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '24px',
    '@sm': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '@lg': { gridTemplateColumns: 'repeat(4, 1fr)' },
});

const ProgramCard = styled('div', {
    background: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.35s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    border: '1px solid rgba(34,139,34,0.08)',
    cursor: 'pointer',
    animation: `${fadeIn} 0.6s ease forwards`,
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(34,139,34,0.15)',
        borderColor: 'rgba(34,139,34,0.3)',
    },
    '&:hover .card-icon-wrap': {
        background: '#228B22',
        '& svg': {
            color: '#ffffff',
        },
    },
    '&:hover .card-link': {
        color: '#228B22',
        '& svg': {
            transform: 'translateX(4px)',
        },
    },
});

const CardIconWrap = styled('div', {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: 'rgba(34,139,34,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
    '& svg': {
        color: '#228B22',
        transition: 'all 0.3s ease',
    },
});

const CardBody = styled('div', {
    padding: '28px',
});

const CardTitle = styled('h3', {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#1f2937',
    marginBottom: '10px',
});

const CardDesc = styled('p', {
    fontSize: '0.875rem',
    color: '#6b7280',
    lineHeight: 1.65,
    marginBottom: '20px',
});

const CardLink = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#16a34a',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '& svg': {
        transition: 'transform 0.2s ease',
    },
    '&:hover': {
        color: '#228B22',
        '& svg': {
            transform: 'translateX(4px)',
        },
    },
});

const CardAccent = styled('div', {
    height: '4px',
    background: 'linear-gradient(90deg, #228B22, #4ade80)',
    transition: 'all 0.3s ease',
});

// Icon mapping
const iconMap = {
    recycle: <Recycle size={28} />,
    leaf: <Sprout size={28} />,
    zap: <Zap size={28} />,
    'book-open': <BookOpen size={28} />,
};

const imageMap = {
    'bank-sampah': '/images/programs/bank-sampah.jpeg',
    'kebun-vertikal': '/images/programs/kebun-vertikal.jpeg',
    'hemat-energi': '/images/programs/hemat-energi.jpeg',
    'edukasi-hijau': '/images/programs/edukasi-hijau.jpeg',
};

// Fallback data in case API fails
const fallbackPrograms = [
    {
        id: 1,
        title: 'Bank Sampah',
        title_en: 'Waste Bank',
        description: 'Program pengelolaan sampah terpadu yang mengajarkan siswa tentang nilai ekonomi dari sampah daur ulang.',
        description_en: 'Integrated waste management program teaching students the economic value of recyclable waste.',
        icon: 'recycle',
        slug: 'bank-sampah',
        image: '/images/programs/bank-sampah.jpeg',
    },
    {
        id: 2,
        title: 'Kebun Vertikal',
        title_en: 'Vertical Garden',
        description: 'Memanfaatkan lahan terbatas dengan teknik pertanian vertikal untuk menanam sayuran dan tanaman obat.',
        description_en: 'Utilizing limited space with vertical farming techniques to grow vegetables and medicinal plants.',
        icon: 'leaf',
        slug: 'kebun-vertikal',
        image: '/images/programs/kebun-vertikal.jpeg',
    },
    {
        id: 3,
        title: 'Hemat Energi',
        title_en: 'Energy Saving',
        description: 'Kampanye dan implementasi hemat energi, mulai dari panel surya mini hingga pemantauan penggunaan listrik.',
        description_en: 'Energy saving campaigns, from mini solar panels to daily electricity usage monitoring.',
        icon: 'zap',
        slug: 'hemat-energi',
        image: '/images/programs/hemat-energi.jpeg',
    },
    {
        id: 4,
        title: 'Edukasi Hijau',
        title_en: 'Green Education',
        description: 'Program pembelajaran lingkungan yang menghadirkan aktivitas kelas, demonstrasi, dan proyek kreatif untuk meningkatkan kesadaran hijau.',
        description_en: 'Environmental learning program with classroom activities, demonstrations, and creative projects to raise green awareness.',
        icon: 'book-open',
        slug: 'edukasi-hijau',
        image: '/images/programs/edukasi-hijau.jpeg',
    },
];

export default function ProgramsSection() {
    const { t, i18n } = useTranslation();
    const [programs, setPrograms] = useState(fallbackPrograms);

    useEffect(() => {
        axios.get('/api/v1/programs')
            .then(res => {
                if (res.data.data?.length > 0) {
                    setPrograms(res.data.data);
                }
            })
            .catch(() => {
                // Use fallback data
            });
    }, []);

    const isEn = i18n.language === 'en';

    return (
        <Section>
            <Inner>
                <SectionHeader>
                    <SectionBadge>🌱 {t('programs.title')}</SectionBadge>
                    <SectionTitle>{t('programs.title')}</SectionTitle>
                    <SectionSubtitle>{t('programs.subtitle')}</SectionSubtitle>
                </SectionHeader>

                <CardGrid>
                    {programs.map((program, index) => (
                        <ProgramCard key={program.id} style={{ animationDelay: `${index * 0.1}s` }}>
                            <CardAccent />
                            <CardBody>
                                <CardIconWrap className="card-icon-wrap">
                                    {iconMap[program.icon] || <Sprout size={28} />}
                                </CardIconWrap>
                                <CardTitle>
                                    {isEn ? (program.title_en || program.title) : program.title}
                                </CardTitle>
                                <CardDesc>
                                    {isEn ? (program.description_en || program.description) : program.description}
                                </CardDesc>
                                <CardLink to={`/program#${program.slug}`} className="card-link">
                                    {t('programs.read_more')}
                                    <ArrowRight size={14} />
                                </CardLink>
                            </CardBody>
                        </ProgramCard>
                    ))}
                </CardGrid>
            </Inner>
        </Section>
    );
}
