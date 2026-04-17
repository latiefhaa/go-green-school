import React from 'react';
import Hero from '../components/Hero';
import ProgramsSection from '../components/ProgramsSection';
import { styled, fadeIn } from '../stitches.config';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, ArrowRight, Leaf, Recycle, Sun, Droplets } from 'lucide-react';

const CTASection = styled('section', {
    background: 'linear-gradient(135deg, #1f7a1f, #1c5e1c)',
    padding: '92px 24px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 120px rgba(0,0,0,0.08)',
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
    gap: '10px',
    padding: '16px 32px',
    borderRadius: '999px',
    fontWeight: 700,
    fontSize: '0.96rem',
    textDecoration: 'none',
    transition: 'transform 0.35s ease, background-color 0.35s ease, box-shadow 0.35s ease',
    variants: {
        variant: {
            white: {
                background: '#ffffff',
                color: '#228B22',
                boxShadow: '0 22px 52px rgba(34,139,34,0.12)',
                '&:hover': { background: '#f6fff7', transform: 'translateY(-3px)', boxShadow: '0 26px 64px rgba(34,139,34,0.15)' },
            },
            outline: {
                background: 'rgba(255,255,255,0.12)',
                color: '#ffffff',
                border: '2px solid rgba(255,255,255,0.6)',
                '&:hover': { background: 'rgba(255,255,255,0.18)', borderColor: '#ffffff', transform: 'translateY(-3px)' },
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
    gap: '14px',
    padding: '20px',
    borderRadius: '18px',
    background: '#ffffff',
    border: '1px solid rgba(34,139,34,0.12)',
    boxShadow: '0 18px 40px rgba(15,23,42,0.05)',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease, background-color 0.35s ease',
    '&:hover': {
        background: '#f5fff3',
        borderColor: 'rgba(34,139,34,0.22)',
        transform: 'translateY(-4px)',
        boxShadow: '0 24px 50px rgba(15,23,42,0.1)',
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
    minHeight: '360px',
    display: 'grid',
    gap: '18px',
    '@lg': {
        gridTemplateColumns: '1fr 1fr',
    },
});

const InfoGrid = styled('div', {
    display: 'grid',
    gap: '20px',
    '@lg': {
        gridTemplateColumns: '1fr 1fr',
    },
});

const InfoCard = styled('div', {
    background: '#ffffff',
    borderRadius: '22px',
    padding: '24px',
    boxShadow: '0 20px 40px rgba(15,23,42,0.08)',
    border: '1px solid rgba(34,139,34,0.08)',
});

const InfoCardTitle = styled('h3', {
    fontSize: '1.05rem',
    fontWeight: 800,
    color: '#164e2e',
    marginBottom: '10px',
});

const InfoCardText = styled('p', {
    color: '#475569',
    fontSize: '0.95rem',
    lineHeight: 1.75,
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

const DeveloperSection = styled('section', {
    background: 'linear-gradient(180deg, #f5fff3 0%, #f0fff0 100%)',
    padding: '80px 24px',
});

const DeveloperRow = styled('div', {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: '1fr',
    '@md': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
});

const DeveloperCard = styled('div', {
    background: '#ffffff',
    borderRadius: '28px',
    padding: '32px',
    boxShadow: '0 20px 60px rgba(15,23,42,0.08)',
    border: '1px solid rgba(34,139,34,0.08)',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 28px 72px rgba(15,23,42,0.11)',
    },
});

const DeveloperAvatar = styled('div', {
    width: '96px',
    height: '96px',
    borderRadius: '24px',
    overflow: 'hidden',
    marginBottom: '18px',
    background: 'linear-gradient(135deg, #86efac, #16a34a)',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
});

const DeveloperName = styled('h3', {
    fontSize: '1.15rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '6px',
});

const DeveloperRole = styled('p', {
    fontSize: '0.9rem',
    color: '#16a34a',
    fontWeight: 700,
    marginBottom: '14px',
});

const DeveloperDesc = styled('p', {
    fontSize: '0.95rem',
    color: '#475569',
    lineHeight: 1.7,
});

export default function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <Hero />

            <ProgramsSection />

            {/* Features / About section */}
            <FeaturesSection className="scroll-reveal">
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
                            🌿 Pentingnya Go Green School
                        </span>
                        <FeatTitle>Mengapa Go Green School Penting?</FeatTitle>
                        <FeatDesc>
                            Go Green School adalah pendekatan pendidikan yang membawa prinsip keberlanjutan ke dalam kehidupan sekolah sehari-hari. Program ini mengajarkan siswa bahwa setiap tindakan kecil, dari memilah sampah hingga menghemat energi, berdampak nyata bagi lingkungan.
                        </FeatDesc>
                        <FeatDesc>
                            Dengan menempatkan praktik ramah lingkungan dalam kegiatan belajar, siswa tidak hanya memahami teori, tetapi juga merasakan sendiri manfaatnya. Program ini membantu membentuk sikap tanggung jawab, kreativitas, dan rasa peduli terhadap alam.
                        </FeatDesc>
                        <FeatDesc>
                            Sekolah menjadi tempat di mana kebiasaan hijau berkembang. Siswa belajar bekerja sama, merawat lingkungan, dan membawa perubahan positif yang dapat dilanjutkan di rumah dan komunitas.
                        </FeatDesc>
                        <FeatDesc>
                            Hasilnya adalah generasi yang lebih sadar lingkungan, lebih siap menghadapi tantangan masa depan, dan mampu mengambil langkah kecil yang konsisten demi bumi yang lebih sehat.
                        </FeatDesc>
                        <BtnAction to="/program">
                            Lihat Semua Program <ArrowRight size={16} />
                        </BtnAction>
                    </FeatText>
                </FeatGrid>
            </FeaturesSection>

            <DeveloperSection className="scroll-reveal">
                <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(34,139,34,0.12)',
                        color: '#166534',
                        borderRadius: '999px',
                        padding: '8px 20px',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                    }}>
                        👩‍💻 Pengembang Web
                    </span>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '18px', color: '#0f172a' }}>
                        Dibuat oleh tim yang fokus pada hasil dan profesionalisme
                    </h2>
                    <p style={{ color: '#475569', fontSize: '1rem', marginTop: '14px', lineHeight: 1.8, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Tim pengembang memastikan website tidak hanya menarik, tetapi juga cepat, responsif, dan mudah digunakan di semua perangkat.
                    </p>
                </div>
                <DeveloperRow>
                    {[
                        {
                            name: 'Latiefha',
                            role: 'Full Stack Developer',
                            desc: 'Memimpin pengembangan aplikasi secara menyeluruh, menghubungkan frontend dan backend demi pengalaman pengguna yang mulus.',
                            image: 'https://ui-avatars.com/api/?name=Latiefha&background=16a34a&color=ffffff&size=256',
                        },
                        {
                            name: 'Aren',
                            role: 'Frontend Developer',
                            desc: 'Memperkuat tampilan dan interaksi aplikasi dengan kode frontend yang responsif dan modern.',
                            image: 'https://ui-avatars.com/api/?name=Aren&background=22c55e&color=ffffff&size=256',
                        },
                        {
                            name: 'Rindu',
                            role: 'Marketing',
                            desc: 'Mendesain strategi komunikasi dan konten untuk menjangkau lebih banyak pengguna dengan pesan yang jelas.',
                            image: 'https://ui-avatars.com/api/?name=Rindu&background=059669&color=ffffff&size=256',
                        },
                        {
                            name: 'Josaphat',
                            role: 'Designer',
                            desc: 'Menciptakan pengalaman visual yang estetis dan tata letak yang mudah digunakan sepanjang situs.',
                            image: 'https://ui-avatars.com/api/?name=Josaphat&background=047857&color=ffffff&size=256',
                        },
                    ].map((dev) => (
                        <DeveloperCard key={dev.name}>
                            <DeveloperAvatar>
                                <img src={dev.image} alt={dev.name} />
                            </DeveloperAvatar>
                            <DeveloperName>{dev.name}</DeveloperName>
                            <DeveloperRole>{dev.role}</DeveloperRole>
                            <DeveloperDesc>{dev.desc}</DeveloperDesc>
                        </DeveloperCard>
                    ))}
                </DeveloperRow>
            </DeveloperSection>

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
                    </CTABtnGroup>
                </CTAInner>
            </CTASection>
        </div>
    );
}
