import React from 'react';
import Hero from '../components/Hero';
import ProgramsSection from '../components/ProgramsSection';
import { styled, fadeIn } from '../stitches.config';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, ArrowRight, Leaf, Recycle, Sun, Droplets } from 'lucide-react';

const CTASection = styled('section', {
    background: 'linear-gradient(135deg, #228B22, #16a34a)',
    padding: '80px 24px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
});

const CTAInner = styled('div', {
    maxWidth: '700px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
});

const CTATitle = styled('h2', {
    fontSize: '2rem',
    fontWeight: 800,
    color: '#ffffff',
    marginBottom: '16px',
    '@lg': { fontSize: '2.5rem' },
});

const CTADesc = styled('p', {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '1.05rem',
    marginBottom: '32px',
    lineHeight: 1.6,
});

const CTABtnGroup = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '16px',
});

const CtaBtn = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: 700,
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    variants: {
        variant: {
            white: {
                background: '#ffffff',
                color: '#228B22',
                '&:hover': { background: '#f0fff0', transform: 'translateY(-2px)' },
            },
            outline: {
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid rgba(255,255,255,0.6)',
                '&:hover': { background: 'rgba(255,255,255,0.1)', borderColor: '#ffffff', transform: 'translateY(-2px)' },
            },
        },
    },
});

const FeaturesSection = styled('section', {
    background: '#ffffff',
    padding: '80px 24px',
});

const FeatGrid = styled('div', {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
    alignItems: 'center',
    '@lg': { gridTemplateColumns: '1fr 1fr' },
});

const FeatText = styled('div', {});

const FeatTitle = styled('h2', {
    fontSize: '1.8rem',
    fontWeight: 800,
    color: '#1f2937',
    marginBottom: '16px',
    lineHeight: 1.2,
    '@lg': { fontSize: '2.2rem' },
});

const FeatDesc = styled('p', {
    color: '#6b7280',
    lineHeight: 1.7,
    marginBottom: '24px',
    fontSize: '0.95rem',
});

const FeatList = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    marginBottom: '32px',
});

const FeatItem = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '16px',
    borderRadius: '12px',
    background: '#f9fafb',
    border: '1px solid #f0fdf4',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: '#f0fdf4',
        borderColor: 'rgba(34,139,34,0.2)',
    },
});

const FeatItemIcon = styled('div', {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'rgba(34,139,34,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    '& svg': { color: '#228B22' },
});

const FeatVisual = styled('div', {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    padding: '48px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '360px',
});

const BigCircle = styled('div', {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    background: 'rgba(34,139,34,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
});

const NumberBig = styled('div', {
    fontSize: '4rem',
    fontWeight: 800,
    color: '#228B22',
    textAlign: 'center',
    lineHeight: 1,
});

const BtnAction = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#228B22',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '50px',
    fontWeight: 600,
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: '#1a6b1a',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(34,139,34,0.3)',
    },
});

export default function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <Hero />

            <ProgramsSection />

            {/* Features / About section */}
            <FeaturesSection>
                <FeatGrid>
                    <FeatText>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(34,139,34,0.1)',
                            color: '#228B22',
                            borderRadius: '20px',
                            padding: '6px 18px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            marginBottom: '16px',
                        }}>
                            🌿 Kolaborasi Mata Pelajaran
                        </span>
                        <FeatTitle>Belajar Lingkungan Lewat Semua Mata Pelajaran</FeatTitle>
                        <FeatDesc>
                            Go Green School mengintegrasikan pendidikan lingkungan ke dalam setiap mata pelajaran, menciptakan pengalaman belajar yang holistik dan bermakna.
                        </FeatDesc>
                        <FeatList>
                            {[
                                { icon: <Calculator size={18} />, title: 'Math + RPL', desc: 'Kalkulator bank sampah & analisis data lingkungan' },
                                { icon: <BookOpen size={18} />, title: 'B.Ind + Digimar', desc: 'Kampanye digital & artikel lingkungan' },
                                { icon: <Leaf size={18} />, title: 'B.Ing + KIK', desc: 'Pameran inovasi hijau dalam Bahasa Inggris' },
                            ].map((item, i) => (
                                <FeatItem key={i}>
                                    <FeatItemIcon>{item.icon}</FeatItemIcon>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1f2937', marginBottom: '4px' }}>{item.title}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.desc}</div>
                                    </div>
                                </FeatItem>
                            ))}
                        </FeatList>
                        <BtnAction to="/edukasi">
                            Lihat Semua Proyek <ArrowRight size={16} />
                        </BtnAction>
                    </FeatText>

                    <FeatVisual>
                        <BigCircle>
                            <div>
                                <NumberBig>6</NumberBig>
                                <p style={{ textAlign: 'center', color: '#228B22', fontWeight: 600, fontSize: '0.9rem', marginTop: '8px' }}>
                                    Mata Pelajaran<br />Terintegrasi
                                </p>
                            </div>
                        </BigCircle>
                        {/* Floating badges */}
                        {[
                            { label: 'Math', top: '8%', left: '5%', bg: '#fef3c7' },
                            { label: 'RPL', top: '8%', right: '5%', bg: '#dbeafe' },
                            { label: 'B.Ind', bottom: '25%', left: '2%', bg: '#fce7f3' },
                            { label: 'Digimar', bottom: '15%', right: '2%', bg: '#e0e7ff' },
                            { label: 'B.Ing', bottom: '5%', left: '30%', bg: '#d1fae5' },
                            { label: 'KIK', top: '30%', right: '3%', bg: '#fee2e2' },
                        ].map((badge, i) => (
                            <div key={i} style={{
                                position: 'absolute',
                                top: badge.top,
                                bottom: badge.bottom,
                                left: badge.left,
                                right: badge.right,
                                background: badge.bg,
                                borderRadius: '10px',
                                padding: '8px 14px',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                color: '#374151',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            }}>
                                {badge.label}
                            </div>
                        ))}
                    </FeatVisual>
                </FeatGrid>
            </FeaturesSection>

            {/* CTA Section */}
            <CTASection>
                <div style={{
                    position: 'absolute', top: '-100px', right: '-100px',
                    width: '400px', height: '400px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)'
                }} />
                <CTAInner>
                    <CTATitle>🌱 Hitung Nilai Sampah Dapur Sekolahmu!</CTATitle>
                    <CTADesc>
                        Gunakan Kalkulator Bank Sampah kami untuk mengetahui nilai ekonomi dan dampak lingkungan dari sampah yang kamu daur ulang. Buat bumi lebih baik mulai sekarang!
                    </CTADesc>
                    <CTABtnGroup>
                        <CtaBtn to="/kalkulator-bank-sampah" variant="white">
                            <Calculator size={18} />
                            Coba Kalkulator
                        </CtaBtn>
                        <CtaBtn to="/edukasi" variant="outline">
                            <BookOpen size={18} />
                            Baca Artikel Edukasi
                        </CtaBtn>
                    </CTABtnGroup>
                </CTAInner>
            </CTASection>
        </div>
    );
}
