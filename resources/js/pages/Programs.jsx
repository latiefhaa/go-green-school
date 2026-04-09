import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const ProgramCard = styled('article', {
    background: '#ffffff',
    borderRadius: '26px',
    overflow: 'hidden',
    boxShadow: '0 24px 55px rgba(15,23,42,0.08)',
    border: '1px solid rgba(34,139,34,0.12)',
    marginBottom: '28px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    animation: `${fadeIn} 0.6s ease forwards`,
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 32px 80px rgba(15,23,42,0.12)',
    },
    '@lg': { gridTemplateColumns: '320px 1fr' },
});

const CardVisual = styled('div', {
    minHeight: '240px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    padding: '28px',
    '@lg': { minHeight: '100%', padding: '36px' },
});

const CardVisualOverlay = styled('div', {
    position: 'absolute',
    inset: 0,
    opacity: 0.32,
    background: 'linear-gradient(180deg, rgba(15,23,42,0.24), rgba(15,23,42,0.04))',
});

const CardImage = styled('img', {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.72,
    transform: 'scale(1.02)',
    filter: 'brightness(0.85)',
    zIndex: 0,
});

const CardContent = styled('div', {
    padding: '32px',
    '@lg': { padding: '36px 40px' },
});

const CardHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
});

const CardIconWrap = styled('div', {
    width: '56px',
    height: '56px',
    minWidth: '56px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.22)',
    display: 'grid',
    placeItems: 'center',
    color: '#ffffff',
});

const ProgramMeta = styled('span', {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#16a34a',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
});

const ProgramTitle = styled('h2', {
    fontSize: '1.65rem',
    fontWeight: 900,
    color: '#0f172a',
    marginBottom: '12px',
    lineHeight: 1.12,
});

const ProgramDesc = styled('p', {
    color: '#475569',
    lineHeight: 1.85,
    fontSize: '1rem',
    marginBottom: '22px',
});

const FeatureList = styled('ul', {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px',
    display: 'grid',
    gap: '14px',
});

const FeatureItem = styled('li', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '0.95rem',
    color: '#3b4752',
    lineHeight: 1.75,
    '& svg': { color: '#16a34a', flexShrink: 0, marginTop: '4px' },
});

const IntroSection = styled('div', {
    background: '#ffffff',
    borderRadius: '28px',
    padding: '28px 30px',
    boxShadow: '0 16px 45px rgba(15,23,42,0.08)',
    marginBottom: '26px',
    textAlign: 'center',
});

const IntroMeta = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px',
    color: '#16a34a',
    fontWeight: 700,
    svg: { display: 'block' },
});

const IntroTitle = styled('h2', {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#0f172a',
    marginBottom: '14px',
});

const IntroText = styled('p', {
    maxWidth: '820px',
    margin: '0 auto',
    color: '#334155',
    lineHeight: 1.8,
    fontSize: '1rem',
});

const InfoRow = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '18px',
    marginTop: '22px',
    '@md': { gridTemplateColumns: '1fr 1fr' },
});

const InfoCard = styled('div', {
    background: 'linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%)',
    borderRadius: '22px',
    padding: '20px',
    border: '1px solid rgba(34,139,34,0.12)',
});

const InfoCardTitle = styled('h3', {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: '#14532d',
    marginBottom: '10px',
});

const InfoCardText = styled('p', {
    color: '#27472a',
    lineHeight: 1.75,
    fontSize: '0.95rem',
});

const SectionCard = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '18px',
    flexWrap: 'wrap',
    marginTop: '20px',
});

const SectionButton = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 20px',
    background: '#16a34a',
    color: '#ffffff',
    borderRadius: '999px',
    textDecoration: 'none',
    fontWeight: 700,
    transition: 'background 0.2s ease',
    '&:hover': { background: '#15803d' },
});

const iconMap = {
    recycle: <Recycle size={40} />,
    leaf: <Sprout size={40} />,
    zap: <Zap size={40} />,
    'book-open': <BookOpen size={40} />,
};

const imageMap = {
    'bank-sampah': '/images/programs/bank-sampah.jpeg',
    'kebun-vertikal': '/images/programs/kebun-vertikal.jpeg',
    'hemat-energi': '/images/programs/hemat-energi.jpeg',
    'edukasi-hijau': '/images/programs/edukasi-hijau.jpeg',
};

const bgMap = {
    'bank-sampah': 'linear-gradient(135deg, #16a34a, #86efac)',
    'kebun-vertikal': 'linear-gradient(135deg, #15803d, #4ade80)',
    'hemat-energi': 'linear-gradient(135deg, #ca8a04, #fde047)',
    'edukasi-hijau': 'linear-gradient(135deg, #0f5132, #5eead4)',
};

const featuresMap = {
    'bank-sampah': ['Pemilahan sampah organik & anorganik', 'Penimbangan dan pencatatan', 'Perhitungan nilai ekonomi', 'Integrasi Matematika & RPL'],
    'kebun-vertikal': ['Teknik hidroponik sederhana', 'Tanaman sayur & obat', 'Sistem irigasi tetes', 'Pelajaran Biologi & KIK'],
    'hemat-energi': ['Panel surya di atap sekolah', 'Monitoring konsumsi listrik', 'Kampanye hemat energi', 'Pelajaran Fisika & Digimar'],
    'edukasi-hijau': ['Proyek kelas ramah lingkungan', 'Presentasi kampanye hijau', 'Praktik sains terpadu', 'Pengembangan literasi lingkungan'],
};

const fallbackPrograms = [
    { id: 1, title: 'Bank Sampah', title_en: 'Waste Bank', description: 'Program pengelolaan sampah terpadu yang mengajarkan siswa tentang nilai ekonomi dari sampah daur ulang. Siswa belajar memilah, menimbang, dan menghitung nilai jual sampah.', description_en: 'An integrated waste management program that teaches students about the economic value of recyclable waste.', icon: 'recycle', slug: 'bank-sampah', image: imageMap['bank-sampah'] },
    { id: 2, title: 'Kebun Vertikal', title_en: 'Vertical Garden', description: 'Memanfaatkan lahan terbatas dengan teknik pertanian vertikal. Siswa menanam sayuran dan tanaman obat sambil belajar biologi dan kewirausahaan.', description_en: 'Utilizing limited space with vertical farming techniques. Students grow vegetables and medicinal plants.', icon: 'leaf', slug: 'kebun-vertikal', image: imageMap['kebun-vertikal'] },
    { id: 3, title: 'Hemat Energi', title_en: 'Energy Saving', description: 'Kampanye dan implementasi hemat energi di lingkungan sekolah. Mulai dari panel surya mini hingga pemantauan penggunaan listrik harian.', description_en: 'Energy saving campaigns and implementation in the school environment.', icon: 'zap', slug: 'hemat-energi', image: imageMap['hemat-energi'] },
    { id: 4, title: 'Edukasi Hijau', title_en: 'Green Education', description: 'Program pembelajaran lingkungan yang menghadirkan aktivitas kelas, demonstrasi, dan proyek kreatif untuk meningkatkan kesadaran hijau.', description_en: 'Environmental learning program with classroom activities, demonstrations, and creative projects to raise green awareness.', icon: 'book-open', slug: 'edukasi-hijau', image: imageMap['edukasi-hijau'] },
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

    const programList = programs.map(program => ({
        ...program,
        image: program.image || imageMap[program.slug],
    }));

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
                <IntroSection>
                    <IntroMeta>
                        <Sprout size={18} />
                        Discover the Go Green School approach
                    </IntroMeta>
                    <IntroTitle>Practical programs that teach sustainability with purpose.</IntroTitle>
                    <IntroText>
                        Our curriculum blends hands-on learning with real-world impact. Students gain confidence through activities that support recycling, energy efficiency, and environmental stewardship, while the school builds a stronger culture of eco-awareness.
                    </IntroText>
                    <InfoRow>
                        <InfoCard>
                            <InfoCardTitle>Why this matters</InfoCardTitle>
                            <InfoCardText>
                                Students learn by doing, turning awareness into measurable change across the school and community.
                            </InfoCardText>
                        </InfoCard>
                        <InfoCard>
                            <InfoCardTitle>What you will find</InfoCardTitle>
                            <InfoCardText>
                                Structured programs for waste management, green gardening, and energy-saving habits with clear student outcomes.
                            </InfoCardText>
                        </InfoCard>
                        <InfoCard>
                            <InfoCardTitle>Next step</InfoCardTitle>
                            <InfoCardText>
                                Explore the full program story on the dedicated page for deeper background and implementation details.
                            </InfoCardText>
                        </InfoCard>
                    </InfoRow>
                    <SectionCard>
                        <SectionButton to="/program-info">
                            Learn More About the Program
                            <ArrowRight size={18} />
                        </SectionButton>
                    </SectionCard>
                </IntroSection>

                {programList.map((program, index) => (
                    <ProgramCard key={program.id} id={program.slug} style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardVisual style={{ background: bgMap[program.slug] || 'linear-gradient(135deg, #228B22, #4ade80)' }}>
                            {program.image && (
                                <CardImage src={program.image} alt={isEn ? (program.title_en || program.title) : program.title} />
                            )}
                            <CardVisualOverlay />
                            <CardIconWrap>
                                {iconMap[program.icon] || <Sprout size={28} />}
                            </CardIconWrap>
                        </CardVisual>
                        <CardContent>
                            <CardHeader>
                                <div>
                                    <ProgramTitle>{isEn ? (program.title_en || program.title) : program.title}</ProgramTitle>
                                    <ProgramMeta>{isEn ? 'Featured Program' : 'Program Unggulan'}</ProgramMeta>
                                </div>
                            </CardHeader>
                            <ProgramDesc>{isEn ? (program.description_en || program.description) : program.description}</ProgramDesc>
                            <FeatureList>
                                {(featuresMap[program.slug] || []).map((feat, fi) => (
                                    <FeatureItem key={fi}>
                                        <Check size={16} />
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
