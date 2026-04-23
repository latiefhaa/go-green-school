import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProgramsSection from '../components/ProgramsSection';
import { styled, fadeIn } from '../stitches.config';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, ArrowRight, Leaf, Recycle, Sun, Droplets } from 'lucide-react';
import useThemeMode from '../hooks/useThemeMode';

const CTASection = styled('section', {
    background: 'linear-gradient(135deg, var(--color-accent-deep), var(--color-accent-deep))',
    padding: '92px 24px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 120px rgba(var(--rgb-black),0.08)',
    variants: {
        mode: {
            dark: {
                background: 'linear-gradient(135deg, var(--color-bg-elevated), var(--color-bg-soft))',
                boxShadow: 'inset 0 0 90px rgba(var(--rgb-ink),0.35)',
            },
        },
    },
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
    color: 'var(--color-surface)',
    marginBottom: '16px',
    '@lg': { fontSize: '2.5rem' },
});

const CTADesc = styled('p', {
    color: 'rgba(var(--rgb-white),0.85)',
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
                background: 'var(--color-surface)',
                color: 'var(--color-accent)',
                boxShadow: '0 22px 52px rgba(var(--rgb-accent),0.12)',
                '&:hover': { background: 'var(--color-bg-muted)', transform: 'translateY(-3px)', boxShadow: '0 26px 64px rgba(var(--rgb-accent),0.15)' },
            },
            outline: {
                background: 'rgba(var(--rgb-white),0.12)',
                color: 'var(--color-surface)',
                border: '2px solid rgba(var(--rgb-white),0.6)',
                '&:hover': { background: 'rgba(var(--rgb-white),0.18)', borderColor: 'var(--color-surface)', transform: 'translateY(-3px)' },
            },
        },
    },
});

const CarouselSection = styled('section', {
    padding: '34px 24px 46px',
    background: 'linear-gradient(180deg, var(--color-bg-muted) 0%, var(--color-bg-muted) 100%)',
    variants: {
        mode: {
            dark: {
                background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-soft) 100%)',
            },
        },
    },
});

const CarouselInner = styled('div', {
    maxWidth: '1100px',
    margin: '0 auto',
});

const CarouselFrame = styled('div', {
    overflow: 'hidden',
    borderRadius: '28px',
    border: '1px solid rgba(var(--rgb-accent),0.12)',
    boxShadow: '0 26px 70px rgba(var(--rgb-ink),0.08)',
    background: 'var(--color-surface)',
    contain: 'layout paint',
    variants: {
        mode: {
            dark: {
                background: 'var(--color-bg-elevated)',
                borderColor: 'rgba(var(--rgb-slate),0.24)',
                boxShadow: '0 18px 45px rgba(var(--rgb-ink),0.44)',
            },
        },
    },
});

const CarouselTrack = styled('div', {
    display: 'flex',
    transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
    transform: 'translate3d(0,0,0)',
    willChange: 'transform',
});

const CarouselSlide = styled('article', {
    minWidth: '100%',
    padding: '30px 26px',
    display: 'grid',
    gap: '22px',
    '@lg': {
        gridTemplateColumns: '1.15fr 0.85fr',
        alignItems: 'center',
        padding: '36px 38px',
    },
});

const SlideBadge = styled('span', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '999px',
    padding: '8px 14px',
    fontWeight: 700,
    fontSize: '0.78rem',
    letterSpacing: '0.05em',
    background: 'rgba(var(--rgb-accent),0.12)',
    color: 'var(--color-accent-deep)',
});

const SlideTitle = styled('h3', {
    fontSize: '1.6rem',
    lineHeight: 1.2,
    fontWeight: 800,
    color: 'var(--color-text-strong)',
    marginTop: '14px',
    '@lg': {
        fontSize: '2.1rem',
    },
});

const SlideDesc = styled('p', {
    marginTop: '12px',
    color: 'var(--color-text-muted)',
    fontSize: '0.96rem',
    lineHeight: 1.8,
    maxWidth: '620px',
});

const SlideAction = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '18px',
    borderRadius: '999px',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '0.88rem',
    color: 'var(--color-surface)',
    background: 'var(--color-accent)',
    padding: '11px 18px',
    transition: 'transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease',
    boxShadow: '0 10px 24px rgba(var(--rgb-accent),0.26)',
    '&:hover': {
        transform: 'translateY(-2px)',
        background: 'var(--color-accent-deep)',
    },
});

const SlideVisual = styled('div', {
    borderRadius: '22px',
    padding: '22px',
    minHeight: '230px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: '10px',
    color: 'var(--color-surface)',
    position: 'relative',
    overflow: 'hidden',
    '& h4': {
        fontSize: '1rem',
        fontWeight: 800,
    },
    '& p': {
        fontSize: '0.87rem',
        lineHeight: 1.7,
        color: 'rgba(var(--rgb-white),0.92)',
    },
});

const SlideVisualImage = styled('img', {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
});

const SlideVisualOverlay = styled('div', {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(var(--rgb-ink),0.12) 20%, rgba(var(--rgb-ink),0.72) 100%)',
});

const SlideVisualContent = styled('div', {
    position: 'relative',
    zIndex: 1,
});

const CarouselFooter = styled('div', {
    marginTop: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '14px',
    flexWrap: 'wrap',
});

const DotRow = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
});

const DotButton = styled('button', {
    width: '10px',
    height: '10px',
    borderRadius: '999px',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    variants: {
        active: {
            true: {
                width: '28px',
                background: 'var(--color-accent)',
            },
            false: {
                background: 'var(--color-text-subtle)',
            },
        },
    },
});

const ControlRow = styled('div', {
    display: 'flex',
    gap: '8px',
});

const ControlButton = styled('button', {
    border: '1px solid rgba(var(--rgb-accent),0.24)',
    background: 'var(--color-surface)',
    color: 'var(--color-accent-deep)',
    borderRadius: '999px',
    padding: '8px 14px',
    fontSize: '0.8rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'var(--color-surface-muted)',
        transform: 'translateY(-1px)',
    },
});

const FeaturesSection = styled('section', {
    background: 'var(--color-surface)',
    padding: '80px 24px',
    variants: {
        mode: {
            dark: {
                background: 'var(--color-bg-elevated)',
            },
        },
    },
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
    color: 'var(--color-text)',
    marginBottom: '16px',
    lineHeight: 1.2,
    '@lg': { fontSize: '2.2rem' },
    variants: {
        mode: {
            dark: {
                color: 'var(--color-surface-soft)',
            },
        },
    },
});

const FeatDesc = styled('p', {
    color: 'var(--color-text-muted)',
    lineHeight: 1.7,
    marginBottom: '24px',
    fontSize: '0.95rem',
    variants: {
        mode: {
            dark: {
                color: 'var(--color-text-muted)',
            },
        },
    },
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
    background: 'var(--color-surface)',
    border: '1px solid rgba(var(--rgb-accent),0.12)',
    boxShadow: '0 18px 40px rgba(var(--rgb-ink),0.05)',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease, background-color 0.35s ease',
    '&:hover': {
        background: 'var(--color-bg-muted)',
        borderColor: 'rgba(var(--rgb-accent),0.22)',
        transform: 'translateY(-4px)',
        boxShadow: '0 24px 50px rgba(var(--rgb-ink),0.1)',
    },
    variants: {
        mode: {
            dark: {
                background: 'var(--color-text-strong)',
                borderColor: 'rgba(var(--rgb-slate),0.22)',
                boxShadow: '0 14px 32px rgba(var(--rgb-ink),0.34)',
                '&:hover': {
                    background: 'var(--color-text)',
                    borderColor: 'rgba(var(--rgb-accent),0.35)',
                },
            },
        },
    },
});

const FeatItemIcon = styled('div', {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'rgba(var(--rgb-accent),0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    '& svg': { color: 'var(--color-accent)' },
});

const FeatVisual = styled('div', {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, var(--color-surface-muted), var(--color-surface-muted))',
    padding: '48px 32px',
    minHeight: '360px',
    display: 'grid',
    gap: '18px',
    '@lg': {
        gridTemplateColumns: '1fr 1fr',
    },
    variants: {
        mode: {
            dark: {
                background: 'linear-gradient(135deg, var(--color-bg-soft), var(--color-bg-elevated))',
            },
        },
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
    background: 'var(--color-surface)',
    borderRadius: '22px',
    padding: '24px',
    boxShadow: '0 20px 40px rgba(var(--rgb-ink),0.08)',
    border: '1px solid rgba(var(--rgb-accent),0.08)',
    variants: {
        mode: {
            dark: {
                background: 'var(--color-bg-elevated)',
                borderColor: 'rgba(var(--rgb-slate),0.26)',
                boxShadow: '0 14px 30px rgba(var(--rgb-ink),0.36)',
            },
        },
    },
});

const InfoCardTitle = styled('h3', {
    fontSize: '1.05rem',
    fontWeight: 800,
    color: 'var(--color-accent-deep)',
    marginBottom: '10px',
    variants: {
        mode: {
            dark: {
                color: 'var(--color-surface-muted)',
            },
        },
    },
});

const InfoCardText = styled('p', {
    color: 'var(--color-text-muted)',
    fontSize: '0.95rem',
    lineHeight: 1.75,
    variants: {
        mode: {
            dark: {
                color: 'var(--color-text-muted)',
            },
        },
    },
});

const BigCircle = styled('div', {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    background: 'rgba(var(--rgb-accent),0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
});

const NumberBig = styled('div', {
    fontSize: '4rem',
    fontWeight: 800,
    color: 'var(--color-accent)',
    textAlign: 'center',
    lineHeight: 1,
});

const BtnAction = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'var(--color-accent)',
    color: 'var(--color-surface)',
    padding: '12px 24px',
    borderRadius: '50px',
    fontWeight: 600,
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'var(--color-accent-deep)',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(var(--rgb-accent),0.3)',
    },
});

const DeveloperSection = styled('section', {
    background: 'linear-gradient(180deg, var(--color-bg-muted) 0%, #f0fff0 100%)',
    padding: '80px 24px',
    variants: {
        mode: {
            dark: {
                background: 'linear-gradient(180deg, var(--color-bg-soft) 0%, var(--color-bg-elevated) 100%)',
            },
        },
    },
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
    background: 'var(--color-surface)',
    borderRadius: '28px',
    padding: '32px',
    boxShadow: '0 20px 60px rgba(var(--rgb-ink),0.08)',
    border: '1px solid rgba(var(--rgb-accent),0.08)',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 28px 72px rgba(var(--rgb-ink),0.11)',
    },
    variants: {
        mode: {
            dark: {
                background: 'var(--color-bg-elevated)',
                borderColor: 'rgba(var(--rgb-slate),0.26)',
                boxShadow: '0 16px 36px rgba(var(--rgb-ink),0.35)',
            },
        },
    },
});

const DeveloperAvatar = styled('div', {
    width: '96px',
    height: '96px',
    borderRadius: '24px',
    overflow: 'hidden',
    marginBottom: '18px',
    background: 'linear-gradient(135deg, var(--color-link), var(--color-accent-strong))',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
});

const DeveloperName = styled('h3', {
    fontSize: '1.15rem',
    fontWeight: 800,
    color: 'var(--color-text-strong)',
    marginBottom: '6px',
    variants: {
        mode: {
            dark: {
                color: 'var(--color-text-strong)',
            },
        },
    },
});

const DeveloperRole = styled('p', {
    fontSize: '0.9rem',
    color: 'var(--color-accent-strong)',
    fontWeight: 700,
    marginBottom: '14px',
    variants: {
        mode: {
            dark: {
                color: 'var(--color-link)',
            },
        },
    },
});

const DeveloperDesc = styled('p', {
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
    lineHeight: 1.7,
    variants: {
        mode: {
            dark: {
                color: 'var(--color-text-muted)',
            },
        },
    },
});

const DEFAULT_CAROUSEL_IMAGES = [
    '/images/gallery/programs/hemat energi.jpeg',
    '/images/gallery/programs/bank sampah.jpeg',
    '/images/gallery/programs/edukasi hijau.jpeg',
    '/images/gallery/programs/kebun vertikal.jpeg',
];

function HomeCarousel({ slides, mode, t }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!slides.length || isPaused) return;
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5200);

        return () => clearInterval(timer);
    }, [slides.length, isPaused]);

    const nextSlide = () => {
        if (!slides.length) return;
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        if (!slides.length) return;
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    if (!slides.length) return null;

    return (
        <CarouselSection className="scroll-reveal is-visible" mode={mode}>
            <CarouselInner>
                <CarouselFrame
                    mode={mode}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    <CarouselTrack style={{ transform: `translate3d(-${activeSlide * 100}%,0,0)` }}>
                        {slides.map((slide, index) => {
                            const imageSrc = slide.image || DEFAULT_CAROUSEL_IMAGES[index % DEFAULT_CAROUSEL_IMAGES.length];
                            const isHighPriority = index === activeSlide || index === (activeSlide + 1) % slides.length;

                            return (
                                <CarouselSlide key={`${slide.title}-${index}`}>
                                    <div>
                                        <SlideBadge>
                                            Featured: {slide.badge}
                                        </SlideBadge>
                                        <SlideTitle>{slide.title}</SlideTitle>
                                        <SlideDesc>{slide.desc}</SlideDesc>
                                        <SlideAction to={slide.cta_link || '/program'}>
                                            {slide.cta}
                                            <ArrowRight size={14} />
                                        </SlideAction>
                                    </div>
                                    <SlideVisual style={{ background: slide.visual_bg || 'linear-gradient(135deg, var(--color-surface-muted), var(--color-surface-muted))' }}>
                                        <SlideVisualImage
                                            src={imageSrc}
                                            alt={slide.visual_title || slide.title || 'Go Green Slide'}
                                            loading={isHighPriority ? 'eager' : 'lazy'}
                                            fetchPriority={isHighPriority ? 'high' : 'low'}
                                            decoding="async"
                                        />
                                        <SlideVisualOverlay />
                                        <SlideVisualContent>
                                            <h4>{slide.visual_title}</h4>
                                            <p>{slide.visual_desc}</p>
                                        </SlideVisualContent>
                                    </SlideVisual>
                                </CarouselSlide>
                            );
                        })}
                    </CarouselTrack>
                </CarouselFrame>
                <CarouselFooter>
                    <DotRow>
                        {slides.map((slide, idx) => (
                            <DotButton
                                key={`${slide.title}-dot-${idx}`}
                                type="button"
                                active={idx === activeSlide ? 'true' : 'false'}
                                onClick={() => setActiveSlide(idx)}
                                aria-label={`slide-${idx + 1}`}
                            />
                        ))}
                    </DotRow>
                    <ControlRow>
                        <ControlButton type="button" onClick={prevSlide}>{t('home_carousel.prev')}</ControlButton>
                        <ControlButton type="button" onClick={nextSlide}>{t('home_carousel.next')}</ControlButton>
                    </ControlRow>
                </CarouselFooter>
            </CarouselInner>
        </CarouselSection>
    );
}

export default function Home() {
    const { t } = useTranslation();
    const { mode } = useThemeMode();
    const carouselSlides = t('home_carousel.slides', { returnObjects: true });
    const slides = Array.isArray(carouselSlides) ? carouselSlides : [];

    return (
        <div className="themed-page home-page" data-theme-mode={mode}>
            <Hero />

            <HomeCarousel slides={slides} mode={mode} t={t} />

            <ProgramsSection mode={mode} />

            {/* Features / About section */}
            <FeaturesSection className="scroll-reveal" mode={mode}>
                <FeatGrid>
                    <FeatText>
                        <span style={{
                            display: 'inline-block',
                            background: mode === 'dark' ? 'rgba(var(--rgb-accent),0.15)' : 'rgba(var(--rgb-accent),0.1)',
                            color: mode === 'dark' ? 'var(--color-link)' : 'var(--color-accent)',
                            borderRadius: '20px',
                            padding: '6px 18px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            marginBottom: '16px',
                        }}>
                            Pentingnya Go Green School
                        </span>
                        <FeatTitle mode={mode}>Mengapa Go Green School Penting?</FeatTitle>
                        <FeatDesc mode={mode}>
                            Go Green School adalah pendekatan pendidikan yang membawa prinsip keberlanjutan ke dalam kehidupan sekolah sehari-hari. Program ini mengajarkan siswa bahwa setiap tindakan kecil, dari memilah sampah hingga menghemat energi, berdampak nyata bagi lingkungan.
                        </FeatDesc>
                        <FeatDesc mode={mode}>
                            Dengan menempatkan praktik ramah lingkungan dalam kegiatan belajar, siswa tidak hanya memahami teori, tetapi juga merasakan sendiri manfaatnya. Program ini membantu membentuk sikap tanggung jawab, kreativitas, dan rasa peduli terhadap alam.
                        </FeatDesc>
                        <FeatDesc mode={mode}>
                            Sekolah menjadi tempat di mana kebiasaan hijau berkembang. Siswa belajar bekerja sama, merawat lingkungan, dan membawa perubahan positif yang dapat dilanjutkan di rumah dan komunitas.
                        </FeatDesc>
                        <FeatDesc mode={mode}>
                            Hasilnya adalah generasi yang lebih sadar lingkungan, lebih siap menghadapi tantangan masa depan, dan mampu mengambil langkah kecil yang konsisten demi bumi yang lebih sehat.
                        </FeatDesc>
                        <BtnAction to="/program">
                            Lihat Semua Program <ArrowRight size={16} />
                        </BtnAction>
                    </FeatText>
                </FeatGrid>
            </FeaturesSection>

            <DeveloperSection className="scroll-reveal" mode={mode}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: mode === 'dark' ? 'rgba(var(--rgb-accent),0.15)' : 'rgba(var(--rgb-accent),0.12)',
                        color: mode === 'dark' ? 'var(--color-link)' : 'var(--color-accent-deep)',
                        borderRadius: '999px',
                        padding: '8px 20px',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                    }}>
                        Pengembang Web
                    </span>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '18px', color: 'var(--color-text-strong)' }}>
                        Dibuat oleh tim yang fokus pada hasil dan profesionalisme
                    </h2>
                    <p style={{ color: mode === 'dark' ? 'var(--color-text-muted)' : 'var(--color-text-muted)', fontSize: '1rem', marginTop: '14px', lineHeight: 1.8, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Tim pengembang memastikan website tidak hanya menarik, tetapi juga cepat, responsif, dan mudah digunakan di semua perangkat.
                    </p>
                </div>
                <DeveloperRow>
                    {[
                        {
                            name: 'Profile Latiefha',
                            role: 'Full Stack Developer',
                            desc: 'Memimpin pengembangan aplikasi secara menyeluruh, menghubungkan frontend dan backend demi pengalaman pengguna yang mulus.',
                            image: '/images/profile/Profile%20Latiefha.jpeg',
                        },
                        {
                            name: 'Profile Aren',
                            role: 'Frontend Developer',
                            desc: 'Memperkuat tampilan dan interaksi aplikasi dengan kode frontend yang responsif dan modern.',
                            image: '/images/profile/Profile%20Aren.jpeg',
                        },
                        {
                            name: 'Profile Rindu',
                            role: 'Marketing',
                            desc: 'Mendesain strategi komunikasi dan konten untuk menjangkau lebih banyak pengguna dengan pesan yang jelas.',
                            image: '/images/profile/Profile%20Rindu.jpeg',
                        },
                        {
                            name: 'Profile Josaphat',
                            role: 'Designer',
                            desc: 'Menciptakan pengalaman visual yang estetis dan tata letak yang mudah digunakan sepanjang situs.',
                            image: '/images/profile/Profile%20Josaphat.jpeg',
                        },
                    ].map((dev) => (
                        <DeveloperCard key={dev.name} mode={mode}>
                            <DeveloperAvatar>
                                <img src={dev.image} alt={dev.name} />
                            </DeveloperAvatar>
                            <DeveloperName mode={mode}>{dev.name}</DeveloperName>
                            <DeveloperRole mode={mode}>{dev.role}</DeveloperRole>
                            <DeveloperDesc mode={mode}>{dev.desc}</DeveloperDesc>
                        </DeveloperCard>
                    ))}
                </DeveloperRow>
            </DeveloperSection>

            {/* CTA Section */}
            <CTASection mode={mode}>
                <div style={{
                    position: 'absolute', top: '-100px', right: '-100px',
                    width: '400px', height: '400px', borderRadius: '50%',
                    background: 'rgba(var(--rgb-white),0.05)'
                }} />
                <CTAInner>
                    <CTATitle>Hitung Nilai Sampah Dapur Sekolahmu!</CTATitle>
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
