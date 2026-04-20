import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { Recycle, Sprout, Zap, BookOpen, ArrowRight } from 'lucide-react';
import axios from 'axios';

const Section = styled('section', {
    padding: '96px 24px',
    background: 'linear-gradient(180deg, var(--color-bg-muted) 0%, var(--color-bg-muted) 100%)',
    variants: {
        mode: {
            dark: {
                background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-soft) 100%)',
            },
        },
    },
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
    background: 'rgba(var(--rgb-white),0.85)',
    color: 'var(--color-accent-deep)',
    borderRadius: '999px',
    padding: '8px 22px',
    fontSize: '0.85rem',
    fontWeight: 700,
    marginBottom: '14px',
    border: '1px solid rgba(var(--rgb-accent-strong),0.18)',
    boxShadow: '0 10px 30px rgba(var(--rgb-accent-strong),0.08)',
    variants: {
        mode: {
            dark: {
                background: 'rgba(var(--rgb-ink),0.75)',
                color: 'var(--color-link)',
                borderColor: 'rgba(var(--rgb-slate),0.35)',
                boxShadow: 'none',
            },
        },
    },
});

const SectionTitle = styled('h2', {
    fontSize: '2rem',
    fontWeight: 800,
    color: 'var(--color-text)',
    marginBottom: '16px',
    '@lg': { fontSize: '2.5rem' },
    variants: {
        mode: {
            dark: {
                color: 'var(--color-surface-soft)',
            },
        },
    },
});

const SectionSubtitle = styled('p', {
    fontSize: '1rem',
    color: 'var(--color-text-muted)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
    variants: {
        mode: {
            dark: {
                color: 'var(--color-text-muted)',
            },
        },
    },
});

const CardGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '24px',
    '@sm': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '@lg': { gridTemplateColumns: 'repeat(4, 1fr)' },
});

const ProgramCard = styled('div', {
    background: 'var(--color-surface)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.35s ease',
    boxShadow: '0 4px 20px rgba(var(--rgb-black),0.06)',
    border: '1px solid rgba(var(--rgb-accent),0.08)',
    cursor: 'pointer',
    animation: `${fadeIn} 0.6s ease forwards`,
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(var(--rgb-accent),0.15)',
        borderColor: 'rgba(var(--rgb-accent),0.3)',
    },
    '&:hover .card-icon-wrap': {
        background: 'var(--color-accent)',
        '& svg': {
            color: 'var(--color-surface)',
        },
    },
    '&:hover .card-link': {
        color: 'var(--color-accent)',
        '& svg': {
            transform: 'translateX(4px)',
        },
    },
    variants: {
        mode: {
            dark: {
                background: 'var(--color-bg-elevated)',
                borderColor: 'rgba(var(--rgb-slate),0.26)',
                boxShadow: '0 10px 28px rgba(var(--rgb-ink),0.35)',
                '&:hover': {
                    boxShadow: '0 16px 34px rgba(var(--rgb-ink),0.5)',
                    borderColor: 'rgba(var(--rgb-accent),0.35)',
                },
                '&:hover .card-icon-wrap': {
                    background: 'rgba(var(--rgb-accent-strong),0.2)',
                    '& svg': {
                        color: 'var(--color-link)',
                    },
                },
                '&:hover .card-link': {
                    color: 'var(--color-link)',
                },
            },
        },
    },
});

const CardIconWrap = styled('div', {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: 'rgba(var(--rgb-accent),0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
    '& svg': {
        color: 'var(--color-accent)',
        transition: 'all 0.3s ease',
    },
    variants: {
        mode: {
            dark: {
                background: 'rgba(var(--rgb-accent-strong),0.14)',
                '& svg': {
                    color: 'var(--color-link)',
                },
            },
        },
    },
});

const CardBody = styled('div', {
    padding: '28px',
});

const CardTitle = styled('h3', {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--color-text)',
    marginBottom: '10px',
    variants: {
        mode: {
            dark: {
                color: 'var(--color-surface-soft)',
            },
        },
    },
});

const CardDesc = styled('p', {
    fontSize: '0.875rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.65,
    marginBottom: '20px',
    variants: {
        mode: {
            dark: {
                color: 'var(--color-text-muted)',
            },
        },
    },
});

const CardLink = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.90rem',
    fontWeight: 700,
    color: 'var(--color-accent-strong)',
    textDecoration: 'none',
    transition: 'color 0.25s ease, transform 0.25s ease',
    '& svg': {
        transition: 'transform 0.25s ease',
    },
    '&:hover': {
        color: 'var(--color-accent-deep)',
        transform: 'translateX(2px)',
        '& svg': {
            transform: 'translateX(6px)',
        },
    },
    variants: {
        mode: {
            dark: {
                color: 'var(--color-link)',
                '&:hover': {
                    color: 'var(--color-surface-muted)',
                },
            },
        },
    },
});

const CardAccent = styled('div', {
    height: '6px',
    borderRadius: '999px',
    background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-strong))',
    transition: 'all 0.35s ease',
    variants: {
        mode: {
            dark: {
                background: 'linear-gradient(90deg, var(--color-accent-deep), var(--color-accent-strong))',
            },
        },
    },
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

export default function ProgramsSection({ mode = 'light' }) {
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
        <Section mode={mode}>
            <Inner>
                <SectionHeader>
                    <SectionBadge mode={mode}>{t('programs.title')}</SectionBadge>
                    <SectionTitle mode={mode}>{t('programs.title')}</SectionTitle>
                    <SectionSubtitle mode={mode}>{t('programs.subtitle')}</SectionSubtitle>
                </SectionHeader>

                <CardGrid>
                    {programs.map((program, index) => (
                        <ProgramCard key={program.id} mode={mode} style={{ animationDelay: `${index * 0.1}s` }}>
                            <CardAccent mode={mode} />
                            <CardBody>
                                <CardIconWrap className="card-icon-wrap" mode={mode}>
                                    {iconMap[program.icon] || <Sprout size={28} />}
                                </CardIconWrap>
                                <CardTitle mode={mode}>
                                    {isEn ? (program.title_en || program.title) : program.title}
                                </CardTitle>
                                <CardDesc mode={mode}>
                                    {isEn ? (program.description_en || program.description) : program.description}
                                </CardDesc>
                                <CardLink to={`/program#${program.slug}`} className="card-link" mode={mode}>
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
