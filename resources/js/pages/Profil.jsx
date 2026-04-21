import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn, fadeInLeft, fadeInRight } from '../stitches.config';
import useThemeMode from '../hooks/useThemeMode';
import {
    School, MapPin, Phone, Mail, Globe, Award, Users, BookOpen,
    Calendar, Star, Leaf, Recycle, Zap, TrendingUp, CheckCircle,
    Building2, GraduationCap, Heart, Target, ChevronRight,
} from 'lucide-react';

/* Styled Components */
const PageWrap = styled('div', { minHeight: '100vh', background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-muted) 100%)', paddingBottom: '90px' });

const Hero = styled('div', {
    background: 'linear-gradient(135deg, var(--color-accent-deep) 0%, var(--color-accent-deep) 40%, var(--color-accent) 100%)',
    padding: '60px 24px 120px',
    position: 'relative',
    overflow: 'hidden',
});

const HeroInner = styled('div', {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px',
    position: 'relative',
    zIndex: 1,
});

const SchoolLogo = styled('div', {
    width: '100px',
    height: '100px',
    borderRadius: '24px',
    background: 'rgba(var(--rgb-white),0.15)',
    border: '2px solid rgba(var(--rgb-white),0.3)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: `${fadeIn} 0.6s ease forwards`,
});

const SchoolName = styled('h1', {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: 'var(--color-surface)',
    lineHeight: 1.2,
    animation: `${fadeIn} 0.7s ease 0.1s forwards`,
    opacity: 0,
    '@lg': { fontSize: '2.8rem' },
});

const SchoolTagline = styled('p', {
    color: 'rgba(var(--rgb-white),0.85)',
    fontSize: '1.05rem',
    maxWidth: '600px',
    lineHeight: 1.6,
    animation: `${fadeIn} 0.7s ease 0.2s forwards`,
    opacity: 0,
});

const BadgeRow = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    animation: `${fadeIn} 0.7s ease 0.3s forwards`,
    opacity: 0,
});

const Badge = styled('span', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    background: 'rgba(var(--rgb-white),0.15)',
    border: '1px solid rgba(var(--rgb-white),0.3)',
    borderRadius: '20px',
    padding: '5px 14px',
    fontSize: '0.78rem',
    fontWeight: 600,
    color: 'var(--color-surface)',
});

const Content = styled('div', {
    maxWidth: '1100px',
    margin: '-60px auto 0',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10,
    '@sm': { padding: '0 16px' },
});

/* Stats strip */
const StatsStrip = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '24px',
    '@sm': { gridTemplateColumns: 'repeat(4, 1fr)' },
});

const StatCard = styled('div', {
    background: 'var(--color-surface)',
    borderRadius: '20px',
    padding: '24px 20px',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(var(--rgb-black),0.07)',
    border: '1px solid rgba(var(--rgb-accent),0.08)',
    animation: `${fadeIn} 0.6s ease forwards`,
    transition: 'transform 0.2s ease',
    '&:hover': { transform: 'translateY(-4px)' },
});

const StatNumber = styled('div', {
    fontSize: '2rem',
    fontWeight: 800,
    color: 'var(--color-accent)',
    lineHeight: 1,
    marginBottom: '4px',
});

const StatLabel = styled('div', {
    fontSize: '0.78rem',
    color: 'var(--color-text-muted)',
    fontWeight: 500,
    lineHeight: 1.3,
});

/* Cards */
const Card = styled('div', {
    background: 'var(--color-surface)',
    borderRadius: '28px',
    padding: '40px',
    boxShadow: '0 20px 50px rgba(var(--rgb-ink),0.08)',
    border: '1px solid rgba(var(--rgb-accent),0.08)',
    marginBottom: '28px',
    animation: `${fadeIn} 0.6s ease forwards`,
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 28px 60px rgba(var(--rgb-ink),0.1)',
    },
    '@sm': {
        padding: '24px',
    },
});

const CardTitle = styled('h2', {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: 'var(--color-text)',
    marginBottom: '20px',
    paddingBottom: '14px',
    borderBottom: '2px solid var(--color-surface-muted)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '& svg': { color: 'var(--color-accent)', flexShrink: 0 },
});

/* Two-column grid */
const TwoCol = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    '@lg': { gridTemplateColumns: '1fr 1fr' },
});

/* Info row */
const InfoRow = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '12px 0',
    borderBottom: '1px solid var(--color-border)',
    '&:last-child': { borderBottom: 'none' },
});

const InfoLabel = styled('span', {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--color-text-muted)',
    minWidth: '96px',
    flexShrink: 0,
    paddingTop: '1px',
    '@md': {
        minWidth: '140px',
    },
});

const InfoValue = styled('span', {
    fontSize: '0.895rem',
    color: 'var(--color-text)',
    fontWeight: 500,
    lineHeight: 1.5,
});

const MapWrap = styled('div', {
    marginTop: '16px',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(var(--rgb-accent),0.18)',
    background: 'var(--color-surface-soft)',
});

const MapFrame = styled('iframe', {
    width: '100%',
    height: '260px',
    border: '0',
    display: 'block',
});

const MapMeta = styled('div', {
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    flexWrap: 'wrap',
    borderTop: '1px solid var(--color-border)',
});

const MapHint = styled('span', {
    fontSize: '0.78rem',
    color: 'var(--color-text-muted)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
});

const MapAction = styled('a', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    fontSize: '0.78rem',
    fontWeight: 700,
    color: 'var(--color-accent)',
    border: '1px solid rgba(var(--rgb-accent),0.2)',
    padding: '7px 12px',
    borderRadius: '999px',
    background: 'var(--color-surface)',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'var(--color-surface-muted)',
        borderColor: 'rgba(var(--rgb-accent),0.35)',
    },
});

/* History timeline */
const Timeline = styled('div', {
    position: 'relative',
    paddingLeft: '32px',
    '&::before': {
        // We render a real div border in JSX instead
    },
});

const TimelineItem = styled('div', {
    position: 'relative',
    marginBottom: '28px',
    '&:last-child': { marginBottom: 0 },
});

const TimelineDot = styled('div', {
    position: 'absolute',
    left: '-39px',
    top: '4px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: 'var(--color-accent)',
    border: '3px solid var(--color-surface-muted)',
    flexShrink: 0,
});

const TimelineYear = styled('div', {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: 'var(--color-accent)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '4px',
});

const TimelineText = styled('div', {
    fontSize: '0.875rem',
    color: 'var(--color-text-subtle)',
    lineHeight: 1.6,
});

/* Program cards grid */
const ProgramGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
    '@sm': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '@lg': { gridTemplateColumns: 'repeat(2, 1fr)' },
});

const ProgramCard = styled('div', {
    borderRadius: '18px',
    padding: '24px',
    border: '1px solid rgba(var(--rgb-accent),0.1)',
    background: 'var(--color-surface-soft)',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'var(--color-surface-muted)',
        borderColor: 'rgba(var(--rgb-accent),0.25)',
        transform: 'translateY(-3px)',
        boxShadow: '0 10px 24px rgba(var(--rgb-accent),0.1)',
    },
});

const ProgramIcon = styled('div', {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    background: 'rgba(var(--rgb-accent),0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '14px',
    '& svg': { color: 'var(--color-accent)' },
});

/* Subject pill */
const SubjectGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    '@sm': { gridTemplateColumns: 'repeat(3, 1fr)' },
});

const SubjectCard = styled('div', {
    borderRadius: '16px',
    padding: '18px 16px',
    textAlign: 'center',
    border: '1px solid transparent',
    transition: 'all 0.2s ease',
    '&:hover': { transform: 'scale(1.03)' },
});

/* Achievement */
const AchievGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '12px',
    '@md': { gridTemplateColumns: 'repeat(2, 1fr)' },
});

const AchievItem = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    padding: '16px',
    background: 'var(--color-surface-soft)',
    borderRadius: '14px',
    border: '1px solid rgba(var(--rgb-accent),0.08)',
    transition: 'all 0.2s ease',
    '&:hover': { background: 'var(--color-surface-muted)', borderColor: 'rgba(var(--rgb-accent),0.2)' },
});

/* Facility */
const FacilityGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    '@md': { gridTemplateColumns: 'repeat(3, 1fr)' },
    '@lg': { gridTemplateColumns: 'repeat(4, 1fr)' },
});

const FacilityItem = styled('div', {
    padding: '14px',
    background: 'var(--color-surface-muted)',
    borderRadius: '12px',
    border: '1px solid rgba(var(--rgb-accent),0.12)',
    textAlign: 'center',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: 'var(--color-accent-deep)',
});

/* Ekskul / Tab */
const TabRow = styled('div', {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '20px',
});

const Tab = styled('button', {
    padding: '10px 18px',
    borderRadius: '999px',
    fontSize: '0.88rem',
    fontWeight: 700,
    border: '1px solid rgba(var(--rgb-accent),0.18)',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
    variants: {
        active: {
            true: {
                background: 'var(--color-accent)',
                color: 'var(--color-surface)',
                borderColor: 'var(--color-accent)',
                transform: 'translateY(-2px)',
            },
            false: {
                background: 'var(--color-surface)',
                color: 'var(--color-text-subtle)',
                '&:hover': { background: 'var(--color-surface-muted)', borderColor: 'var(--color-accent)', color: 'var(--color-accent)', transform: 'translateY(-1px)' },
            },
        },
    },
});

const TabPanel = styled('div', {
    animation: `${fadeIn} 0.45s ease both`,
    transition: 'opacity 0.35s ease, transform 0.35s ease',
});

/* Data */
const PROGRAMS_GO_GREEN = [
    {
        icon: <Recycle size={22} />,
        color: 'var(--color-accent-strong)',
        bg: 'rgba(var(--rgb-accent-strong),0.08)',
        title: 'Bank Sampah',
        title_en: 'Waste Bank',
        desc: 'Program pengelolaan dan daur ulang sampah yang mengajarkan nilai ekonomi dari limbah. Siswa belajar memilah, menimbang, dan menghitung nilai jual sampah.',
        desc_en: 'An integrated waste management and recycling program that teaches the economic value of waste. Participants learn to sort, weigh, and calculate the value of recyclables.',
        stats: '750 kg/bln',
    },
    {
        icon: <Leaf size={22} />,
        color: 'var(--color-accent-deep)',
        bg: 'rgba(var(--rgb-accent-strong),0.08)',
        title: 'Kebun Vertikal',
        title_en: 'Vertical Garden',
        desc: 'Pemanfaatan dinding dan lahan sempit dengan teknik hidroponik & aquaponik. Hasil panen digunakan untuk kantin sekolah dan dijual.',
        desc_en: 'Utilizing walls and narrow land with hydroponic & aquaponic techniques. Harvest results are used for the school canteen and sold.',
        stats: '200 tanaman',
    },
    {
        icon: <Zap size={22} />,
        color: 'var(--color-warning)',
        bg: 'rgba(var(--rgb-warning),0.08)',
        title: 'Hemat Energi',
        title_en: 'Energy Saving',
        desc: 'Pemasangan panel surya mini, sensor cahaya otomatis, dan kampanye digital pengurangan emisi karbon. Monitoring konsumsi listrik harian dilakukan untuk mengukur dampak nyata.',
        desc_en: 'Installation of mini solar panels, automatic light sensors, and digital carbon emission reduction campaigns. Daily electricity use is monitored to measure real impact.',
        stats: '30% hemat listrik',
    },
];

const ACHIEVEMENTS = [
    { year: '2024', title: 'Juara 1 Sekolah Adiwiyata Nasional', level: 'Nasional', icon: <Award size={18} /> },
    { year: '2024', title: 'Best Green School - ASEAN Youth Summit 2024', level: 'Internasional', icon: <Star size={18} /> },
    { year: '2023', title: 'Juara 2 Lomba Bank Sampah Tingkat Provinsi', level: 'Provinsi', icon: <Award size={18} /> },
    { year: '2023', title: 'Top 10 Sekolah Inovatif - Kemendikbud', level: 'Nasional', icon: <TrendingUp size={18} /> },
    { year: '2023', title: 'Penghargaan Lingkungan Hidup - KLHK', level: 'Nasional', icon: <Leaf size={18} /> },
    { year: '2022', title: 'Juara 1 Karya Ilmiah Remaja - Tema Lingkungan', level: 'Kota', icon: <GraduationCap size={18} /> },
];

const TIMELINE = [
    { year: '2018', text: 'SMK Karya Bangsa resmi meluncurkan program lingkungan sekolah dengan fokus pada kesadaran dan aksi nyata.' },
    { year: '2019', text: 'Pembangunan kebun vertikal pertama & instalasi sistem pengomposan organik mandiri.' },
    { year: '2020', text: 'Peluncuran Bank Sampah Sekolah - pertama di kota yang menerapkan sistem sampah terkelola.' },
    { year: '2021', text: 'Implementasi panel surya mini & dashboard pemantauan energi berbasis teknologi sekolah.' },
    { year: '2022', text: 'Program berhasil mengurangi sampah sekolah sebesar 65% dibanding tahun 2018.' },
    { year: '2023', text: 'Diakui sebagai rujukan nasional oleh Kemendikbud; 12 sekolah studi banding ke sini.' },
    { year: '2024', text: 'Meraih penghargaan ASEAN Best Green School & ekspansi program ke masyarakat sekitar.' },
];

const FACILITIES = [
    'Kebun Vertikal Hidroponik', 'Bank Sampah Terpadu', 'Panel Surya 5 kWp',
    'Kolam Aquaponik', 'Lab Lingkungan Hidup', 'Lab Komputer',
    'WiFi Seluruh Area', 'Greenhouse Mini',
    'Studio Konten Digital', 'Area Kompos', 'Sistem Daur Ulang Air',
];

const STAFF = [
    { name: 'Latiefha', role: 'Full Stack Developer', icon: 'FS' },
    { name: 'Aren', role: 'Frontend Developer', icon: 'FE' },
    { name: 'Rindu', role: 'Marketing', icon: 'MK' },
    { name: 'Josaphat', role: 'Designer', icon: 'DS' },
];

/* Component */
export default function Profil() {
    const { t, i18n } = useTranslation();
    const { mode } = useThemeMode();
    const isEn = i18n.language === 'en';
    const [activeTab, setActiveTab] = useState('profil');
    const schoolMapQuery = 'SMK KARYA BANGSA SINTANG';
    const schoolAddress = 'Jalan Sintang, Kapuas Kanan Hulu, Kec. Sungai Tebelian, Kabupaten Sintang, Kalimantan Barat 78616';
    const schoolMapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(schoolMapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    const schoolMapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(schoolMapQuery)}`;

    const tabs = [
        { id: 'profil', label: isEn ? 'Identity' : 'Identitas Sekolah' },
        { id: 'program', label: isEn ? 'School Programs' : 'Program Sekolah' },
        { id: 'prestasi', label: isEn ? 'Achievements' : 'Prestasi' },
        { id: 'sejarah', label: isEn ? 'History' : 'Sejarah' },
    ];

    return (
        <PageWrap className="themed-page profil-page" data-theme-mode={mode}>
            {/* Hero */}
            <Hero className="theme-hero">
                {/* decorative circles */}
                <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(var(--rgb-white),0.04)' }} />
                <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(var(--rgb-white),0.04)' }} />

                <HeroInner>
                    <SchoolLogo>
                        <Leaf size={48} color="var(--color-surface)" />
                    </SchoolLogo>

                    <SchoolName>
                        {isEn ? 'SMK Karya Bangsa Profile' : 'Profil SMK Karya Bangsa'}
                    </SchoolName>

                    <SchoolTagline>
                        {isEn
                            ? 'A complete overview of our school identity, programs, achievements, and commitment to environmental education.'
                            : 'Gambaran lengkap identitas sekolah, program, prestasi, dan komitmen kami terhadap pendidikan lingkungan hidup.'}
                    </SchoolTagline>

                    <BadgeRow>
                        <Badge><Award size={12} /> Adiwiyata Nasional 2024</Badge>
                        <Badge><Star size={12} /> ASEAN Best Green School 2024</Badge>
                        <Badge><CheckCircle size={12} /> Akreditasi B</Badge>
                        <Badge><Leaf size={12} /> Eco-Friendly Campus</Badge>
                    </BadgeRow>
                </HeroInner>
            </Hero>

            <Content>
                {/* Stats Strip */}
                <StatsStrip className="scroll-reveal">
                    {[
                        { num: '150+', label: isEn ? 'Active Students' : 'Siswa Aktif', delay: '0s' },
                        { num: '15+', label: isEn ? 'Educators' : 'Tenaga Pendidik', delay: '0.05s' },
                        { num: '4', label: isEn ? 'School Programs' : 'Program Sekolah', delay: '0.1s' },
                        { num: '65%', label: isEn ? 'Waste Reduction' : 'Pengurangan Sampah', delay: '0.15s' },
                    ].map((s, i) => (
                        <StatCard key={i} style={{ animationDelay: s.delay }}>
                            <StatNumber>{s.num}</StatNumber>
                            <StatLabel>{s.label}</StatLabel>
                        </StatCard>
                    ))}
                </StatsStrip>

                {/* Tabs */}
                <TabRow className="scroll-reveal">
                    {tabs.map(tab => (
                        <Tab
                            key={tab.id}
                            active={activeTab === tab.id ? 'true' : 'false'}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </Tab>
                    ))}
                </TabRow>

                {/* Tab: Identitas Sekolah */}
                {activeTab === 'profil' && (
                    <TabPanel>
                        <TwoCol>
                            {/* Identitas */}
                            <div>
                                <Card>
                                    <CardTitle><School size={22} /> {isEn ? 'School Identity' : 'Identitas Sekolah'}</CardTitle>
                                    {[
                                        { label: isEn ? 'School Name' : 'Nama Sekolah', value: 'SMK Karya Bangsa' },
                                        { label: isEn ? 'School Type' : 'Jenis Sekolah', value: 'SMK (Sekolah Menengah Kejuruan)' },
                                        { label: 'NPSN', value: '20238456' },
                                        { label: isEn ? 'Accreditation' : 'Akreditasi', value: 'B' },
                                        { label: isEn ? 'Founded' : 'Tahun Berdiri', value: '2005' },
                                        { label: isEn ? 'Status' : 'Status', value: isEn ? 'Private School' : 'Sekolah Swasta' },
                                        { label: isEn ? 'Province' : 'Provinsi', value: 'Kalimantan Barat' },
                                        { label: isEn ? 'Curriculum' : 'Kurikulum', value: 'Merdeka Belajar (2022)' },
                                    ].map((r, i) => (
                                        <InfoRow key={i}>
                                            <InfoLabel>{r.label}</InfoLabel>
                                            <InfoValue>{r.value}</InfoValue>
                                        </InfoRow>
                                    ))}
                                    <MapWrap style={{ marginTop: 0 }}>
                                        <MapFrame
                                            title={isEn ? 'SMK Karya Bangsa location map' : 'Peta lokasi SMK Karya Bangsa'}
                                            src={schoolMapEmbedUrl}
                                            loading="lazy"
                                            allowFullScreen
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                        <MapMeta>
                                            <MapHint>
                                                <MapPin size={14} />
                                                {isEn ? 'School location map' : 'Peta lokasi sekolah'}
                                            </MapHint>
                                            <MapAction href={schoolMapOpenUrl} target="_blank" rel="noreferrer">
                                                {isEn ? 'Open in Google Maps' : 'Buka di Google Maps'}
                                                <ChevronRight size={14} />
                                            </MapAction>
                                        </MapMeta>
                                    </MapWrap>
                                </Card>
                            </div>

                        {/* Kontak & Lokasi */}
                        <div>
                            <Card style={{ marginBottom: '16px' }}>
                                <CardTitle><MapPin size={22} /> {isEn ? 'Contact & Location' : 'Kontak & Lokasi'}</CardTitle>
                                {[
                                    { icon: <MapPin size={15} />, label: isEn ? 'Address' : 'Alamat', value: schoolAddress },
                                    { icon: <Phone size={15} />, label: isEn ? 'Phone' : 'Telepon', value: '0815-4939-5400' },
                                    { icon: <Mail size={15} />, label: 'Email', value: 'info@karyabangsa.sch.id' },
                                    { icon: <Globe size={15} />, label: 'Website', value: 'karyabangsa.sch.id' },
                                ].map((r, i) => (
                                    <InfoRow key={i}>
                                        <InfoLabel style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent)' }}>
                                            {r.icon} {r.label}
                                        </InfoLabel>
                                        <InfoValue>{r.value}</InfoValue>
                                    </InfoRow>
                                ))}
                            </Card>

                            {/* Tenaga Pendidik */}
                            <Card>
                                <CardTitle><Users size={22} /> {isEn ? 'Developer Team' : 'Tim Developer'}</CardTitle>
                            {STAFF.map((s, i) => (
                                <InfoRow key={i}>
                                    <InfoLabel style={{ fontSize: '1.2rem', minWidth: '36px' }}>{s.icon}</InfoLabel>
                                    <div>
                                        <InfoValue style={{ display: 'block', fontWeight: 600 }}>{s.name}</InfoValue>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 500 }}>{s.role}</span>
                                    </div>
                                </InfoRow>
                            ))}
                            </Card>
                        </div>

                        {/* Fasilitas */}
                        <Card style={{ gridColumn: '1 / -1' }}>
                            <CardTitle><Building2 size={22} /> {isEn ? 'Facilities' : 'Fasilitas Sekolah'}</CardTitle>
                            <FacilityGrid>
                                {FACILITIES.map((f, i) => (
                                    <FacilityItem key={i}>{f}</FacilityItem>
                                ))}
                            </FacilityGrid>
                        </Card>
                    </TwoCol>
                    </TabPanel>
                )}

                {/* Tab: Program Sekolah */}
                {activeTab === 'program' && (
                    <TabPanel>
                        {/* Intro */}
                        <Card style={{ background: 'linear-gradient(135deg, var(--color-surface-muted), var(--color-surface-muted))', border: '1px solid rgba(var(--rgb-accent),0.15)' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(var(--rgb-accent),0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Leaf size={28} color="var(--color-accent)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-accent-deep)', marginBottom: '8px' }}>
                                        {isEn ? 'About SMK Karya Bangsa Programs' : 'Tentang Program SMK Karya Bangsa'}
                                    </h3>
                                    <p style={{ color: 'var(--color-text-subtle)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                                        {isEn
                                            ? 'SMK Karya Bangsa develops practical, eco-conscious student programs that combine technical skills with environmental stewardship. Our programs build leadership, entrepreneurship, and real impact in the local community.'
                                            : 'SMK Karya Bangsa mengembangkan program-program praktis dan berwawasan lingkungan yang menggabungkan keterampilan teknis dengan kepedulian lingkungan. Program kami membangun kepemimpinan, kewirausahaan, dan dampak nyata di masyarakat lokal.'}
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <ProgramGrid>
                            {PROGRAMS_GO_GREEN.map((p, i) => (
                                <ProgramCard key={i}>
                                    <ProgramIcon style={{ background: p.bg }}>
                                        {React.cloneElement(p.icon, { color: p.color })}
                                    </ProgramIcon>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '8px' }}>
                                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>
                                            {isEn ? p.title_en : p.title}
                                        </h3>
                                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: p.color, background: p.bg, padding: '3px 10px', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                                            {p.stats}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: '0.845rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '14px' }}>
                                        {isEn ? p.desc_en : p.desc}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-accent-deep)', background: 'var(--color-surface-muted)', border: '1px solid var(--color-surface-muted)', padding: '6px 12px', borderRadius: '12px' }}>
                                            {isEn ? 'Community impact' : 'Dampak komunitas'}
                                        </span>
                                    </div>
                                </ProgramCard>
                            ))}
                        </ProgramGrid>

                        {/* Dampak program */}
                        <Card style={{ marginTop: '24px' }}>
                            <CardTitle><TrendingUp size={22} /> {isEn ? 'Program Impact' : 'Dampak Program (2024)'}</CardTitle>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                                {[
                                    { emoji: 'R', num: '750 kg', label: isEn ? 'Waste recycled/month' : 'Sampah didaur ulang/bulan' },
                                    { emoji: 'V', num: '200+', label: isEn ? 'Vertical plants' : 'Tanaman vertikal' },
                                    { emoji: 'E', num: '30%', label: isEn ? 'Electricity saved' : 'Penghematan listrik' },
                                    { emoji: 'G', num: '65%', label: isEn ? 'Total waste reduction' : 'Pengurangan total sampah' },
                                    { emoji: 'P', num: 'Rp 4.5 jt', label: isEn ? 'Monthly waste revenue' : 'Pendapatan sampah/bulan' },
                                    { emoji: 'A', num: '12+', label: isEn ? 'Awards since 2020' : 'Penghargaan sejak 2020' },
                                ].map((d, i) => (
                                    <div key={i} style={{ padding: '16px', background: 'var(--color-surface-soft)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                                        <span style={{ fontSize: '1.8rem' }}>{d.emoji}</span>
                                        <div>
                                            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-accent)' }}>{d.num}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>{d.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </TabPanel>
                )}


                {/* Tab: Prestasi */}
                {activeTab === 'prestasi' && (
                    <TabPanel>
                        <Card>
                        <CardTitle><Award size={22} /> {isEn ? 'Awards & Achievements' : 'Penghargaan & Prestasi'}</CardTitle>
                        <AchievGrid>
                            {ACHIEVEMENTS.map((a, i) => (
                                <AchievItem key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                                    <div style={{
                                        width: '44px', height: '44px', borderRadius: '12px',
                                        background: 'rgba(var(--rgb-accent),0.1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        color: 'var(--color-accent)',
                                    }}>
                                        {a.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '4px' }}>{a.title}</div>
                                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-accent)', background: 'var(--color-surface-muted)', padding: '2px 8px', borderRadius: '10px' }}>{a.year}</span>
                                            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>{a.level}</span>
                                        </div>
                                    </div>
                                </AchievItem>
                            ))}
                        </AchievGrid>

                        {/* Akreditasi banner */}
                        <div style={{ marginTop: '24px', padding: '24px', background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))', borderRadius: '18px', textAlign: 'center', color: 'var(--color-surface)' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>B</div>
                            <div style={{ fontWeight: 700, fontSize: '1rem', marginTop: '8px' }}>
                                {isEn ? 'School Accreditation - B' : 'Akreditasi Sekolah - B'}
                            </div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.85, marginTop: '4px' }}>
                                BAN-S/M - {isEn ? 'Valid until' : 'Berlaku hingga'} 2027
                            </div>
                        </div>
                    </Card>
                    </TabPanel>
                )}

                {/* Tab: Sejarah */}
                {activeTab === 'sejarah' && (
                    <TabPanel>
                        <Card>
                        <CardTitle><Calendar size={22} /> {isEn ? 'Program History' : 'Sejarah Program'}</CardTitle>
                        <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: '2px solid var(--color-surface-muted)' }}>
                            {TIMELINE.map((item, i) => (
                                <TimelineItem key={i}>
                                    <TimelineDot />
                                    <TimelineYear>{item.year}</TimelineYear>
                                    <TimelineText>{item.text}</TimelineText>
                                </TimelineItem>
                            ))}
                        </div>
                    </Card>
                    </TabPanel>
                )}
            </Content>
        </PageWrap>
    );
}
