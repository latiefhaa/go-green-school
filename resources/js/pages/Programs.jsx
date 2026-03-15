import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { Recycle, Sprout, Zap, BookOpen, ArrowRight, Check } from 'lucide-react';
import axios from 'axios';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: '#F0FFF0',
    paddingBottom: '80px',
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, #14532d, #228B22)',
    padding: '60px 24px 80px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
});

const Content = styled('div', {
    maxWidth: '1100px',
    margin: '-40px auto 0',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10,
});

const ProgramCard = styled('div', {
    background: '#ffffff',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
    border: '1px solid rgba(34,139,34,0.08)',
    marginBottom: '24px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    animation: `${fadeIn} 0.6s ease forwards`,
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
        boxShadow: '0 16px 40px rgba(34,139,34,0.12)',
    },
    '@lg': { gridTemplateColumns: '300px 1fr' },
});

const CardVisual = styled('div', {
    minHeight: '220px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    '@lg': { minHeight: '280px' },
});

const CardContent = styled('div', {
    padding: '32px',
});

const ProgramTitle = styled('h2', {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#1f2937',
    marginBottom: '12px',
});

const ProgramDesc = styled('p', {
    color: '#6b7280',
    lineHeight: 1.7,
    fontSize: '0.9rem',
    marginBottom: '20px',
});

const FeatureList = styled('ul', {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
});

const FeatureItem = styled('li', {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.85rem',
    color: '#374151',
    '& svg': { color: '#228B22', flexShrink: 0 },
});

const iconMap = {
    recycle: <Recycle size={40} />,
    leaf: <Sprout size={40} />,
    zap: <Zap size={40} />,
    'book-open': <BookOpen size={40} />,
};

const bgMap = {
    'bank-sampah': 'linear-gradient(135deg, #16a34a, #86efac)',
    'kebun-vertikal': 'linear-gradient(135deg, #15803d, #4ade80)',
    'hemat-energi': 'linear-gradient(135deg, #ca8a04, #fde047)',
    'edukasi-hijau': 'linear-gradient(135deg, #0891b2, #67e8f9)',
};

const featuresMap = {
    'bank-sampah': ['Pemilahan sampah organik & anorganik', 'Penimbangan dan pencatatan', 'Perhitungan nilai ekonomi', 'Integrasi Matematika & RPL'],
    'kebun-vertikal': ['Teknik hidroponik sederhana', 'Tanaman sayur & obat', 'Sistem irigasi tetes', 'Pelajaran Biologi & KIK'],
    'hemat-energi': ['Panel surya di atap sekolah', 'Monitoring konsumsi listrik', 'Kampanye hemat energi', 'Pelajaran Fisika & Digimar'],
    'edukasi-hijau': ['Workshop lingkungan', 'Proyek lintas mata pelajaran', 'Pameran inovasi hijau', 'Semua mata pelajaran terintegrasi'],
};

const fallbackPrograms = [
    { id: 1, title: 'Bank Sampah', title_en: 'Waste Bank', description: 'Program pengelolaan sampah terpadu yang mengajarkan siswa tentang nilai ekonomi dari sampah daur ulang. Siswa belajar memilah, menimbang, dan menghitung nilai jual sampah.', description_en: 'An integrated waste management program that teaches students about the economic value of recyclable waste.', icon: 'recycle', slug: 'bank-sampah' },
    { id: 2, title: 'Kebun Vertikal', title_en: 'Vertical Garden', description: 'Memanfaatkan lahan terbatas dengan teknik pertanian vertikal. Siswa menanam sayuran dan tanaman obat sambil belajar biologi dan kewirausahaan.', description_en: 'Utilizing limited space with vertical farming techniques. Students grow vegetables and medicinal plants.', icon: 'leaf', slug: 'kebun-vertikal' },
    { id: 3, title: 'Hemat Energi', title_en: 'Energy Saving', description: 'Kampanye dan implementasi hemat energi di lingkungan sekolah. Mulai dari panel surya mini hingga pemantauan penggunaan listrik harian.', description_en: 'Energy saving campaigns and implementation in the school environment.', icon: 'zap', slug: 'hemat-energi' },
    { id: 4, title: 'Edukasi Hijau', title_en: 'Green Education', description: 'Program edukasi lingkungan yang mengintegrasikan semua mata pelajaran. Siswa belajar tentang keberlanjutan melalui proyek kolaboratif lintas mata pelajaran.', description_en: 'Environmental education program integrating all subjects through collaborative projects.', icon: 'book-open', slug: 'edukasi-hijau' },
];

export default function Programs() {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === 'en';
    const [programs, setPrograms] = useState(fallbackPrograms);

    useEffect(() => {
        axios.get('/api/v1/programs')
            .then(res => {
                if (res.data.data?.length > 0) setPrograms(res.data.data);
            })
            .catch(() => {});
    }, []);

    return (
        <PageWrap>
            <PageHeader>
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '16px' }}>
                        🌱 {t('programs.title')}
                    </span>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                        {t('programs.title')}
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        {t('programs.subtitle')}
                    </p>
                </div>
            </PageHeader>

            <Content>
                {programs.map((program, index) => (
                    <ProgramCard key={program.id} id={program.slug} style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardVisual style={{ background: bgMap[program.slug] || 'linear-gradient(135deg, #228B22, #4ade80)' }}>
                            <div style={{ opacity: 0.8, color: '#ffffff' }}>
                                {iconMap[program.icon] || <Sprout size={40} />}
                            </div>
                            <div style={{
                                position: 'absolute', bottom: '16px', left: '16px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '20px', padding: '6px 14px',
                                fontSize: '0.75rem', fontWeight: 700, color: '#ffffff',
                                backdropFilter: 'blur(4px)',
                            }}>
                                #{index + 1} Program Unggulan
                            </div>
                        </CardVisual>
                        <CardContent>
                            <ProgramTitle>{isEn ? (program.title_en || program.title) : program.title}</ProgramTitle>
                            <ProgramDesc>{isEn ? (program.description_en || program.description) : program.description}</ProgramDesc>
                            <FeatureList>
                                {(featuresMap[program.slug] || []).map((feat, fi) => (
                                    <FeatureItem key={fi}>
                                        <Check size={15} />
                                        {feat}
                                    </FeatureItem>
                                ))}
                            </FeatureList>
                        </CardContent>
                    </ProgramCard>
                ))}
            </Content>
        </PageWrap>
    );
}
