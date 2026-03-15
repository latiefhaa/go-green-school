import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { Image } from 'lucide-react';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: '#F0FFF0',
    paddingBottom: '80px',
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, #15803d, #228B22)',
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

const GalleryGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    '@sm': { gridTemplateColumns: 'repeat(3, 1fr)' },
    '@lg': { gridTemplateColumns: 'repeat(4, 1fr)' },
});

const GalleryItem = styled('div', {
    borderRadius: '16px',
    overflow: 'hidden',
    aspectRatio: '1',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    transition: 'all 0.35s ease',
    animation: `${fadeIn} 0.5s ease forwards`,
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 12px 32px rgba(34,139,34,0.2)',
    },
    '&:hover .gallery-overlay': {
        opacity: 1,
    },
});

const GalleryOverlay = styled('div', {
    position: 'absolute',
    inset: 0,
    background: 'rgba(34,139,34,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    color: '#ffffff',
    fontSize: '0.85rem',
    fontWeight: 600,
    textAlign: 'center',
    padding: '16px',
});

// Gallery items with gradient backgrounds as placeholders
const galleryItems = [
    { title: 'Bank Sampah', emoji: '♻️', bg: 'linear-gradient(135deg, #16a34a, #86efac)', span: 'col' },
    { title: 'Kebun Vertikal', emoji: '🌿', bg: 'linear-gradient(135deg, #166534, #4ade80)' },
    { title: 'Panel Surya', emoji: '☀️', bg: 'linear-gradient(135deg, #ca8a04, #fde047)' },
    { title: 'Edukasi Hijau', emoji: '📚', bg: 'linear-gradient(135deg, #0891b2, #67e8f9)', span: 'row' },
    { title: 'Kompos', emoji: '🌱', bg: 'linear-gradient(135deg, #65a30d, #d9f99d)' },
    { title: 'Workshop', emoji: '🔨', bg: 'linear-gradient(135deg, #7c3aed, #c4b5fd)' },
    { title: 'Pameran Inovasi', emoji: '🏆', bg: 'linear-gradient(135deg, #dc2626, #fca5a5)' },
    { title: 'Siswa Go Green', emoji: '👩‍🌾', bg: 'linear-gradient(135deg, #228B22, #86efac)' },
    { title: 'Daur Ulang', emoji: '🔄', bg: 'linear-gradient(135deg, #0369a1, #7dd3fc)' },
    { title: 'Tanam Pohon', emoji: '🌳', bg: 'linear-gradient(135deg, #15803d, #bbf7d0)' },
    { title: 'Hemat Air', emoji: '💧', bg: 'linear-gradient(135deg, #0284c7, #bae6fd)' },
    { title: 'Eco Market', emoji: '🛒', bg: 'linear-gradient(135deg, #b45309, #fcd34d)' },
];

export default function Gallery() {
    const { t } = useTranslation();

    return (
        <PageWrap>
            <PageHeader>
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '16px' }}>
                        📸 {t('gallery.title')}
                    </span>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>{t('gallery.title')}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>{t('gallery.subtitle')}</p>
                </div>
            </PageHeader>

            <Content>
                <GalleryGrid>
                    {galleryItems.map((item, index) => (
                        <GalleryItem key={index} style={{
                            background: item.bg,
                            animationDelay: `${index * 0.05}s`,
                            gridColumn: item.span === 'col' ? 'span 2' : undefined,
                            gridRow: item.span === 'row' ? 'span 2' : undefined,
                        }}>
                            <div style={{
                                position: 'absolute', inset: 0,
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', justifyContent: 'center',
                                gap: '8px',
                            }}>
                                <span style={{ fontSize: item.span ? '4rem' : '2.5rem', opacity: 0.7 }}>{item.emoji}</span>
                                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 600 }}>{item.title}</span>
                            </div>
                            <GalleryOverlay className="gallery-overlay">
                                {item.title}
                            </GalleryOverlay>
                        </GalleryItem>
                    ))}
                </GalleryGrid>
            </Content>
        </PageWrap>
    );
}
