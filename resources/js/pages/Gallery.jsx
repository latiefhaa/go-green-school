import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import useThemeMode from '../hooks/useThemeMode';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: 'var(--color-bg-muted)',
    paddingBottom: '80px',
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, var(--color-accent-deep), var(--color-accent))',
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

const LoadMoreWrap = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '22px',
});

const LoadMoreButton = styled('button', {
    border: '1px solid rgba(var(--rgb-accent),0.25)',
    background: 'var(--color-surface)',
    color: 'var(--color-accent-deep)',
    borderRadius: '999px',
    padding: '10px 18px',
    fontSize: '0.88rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'var(--color-surface-muted)',
        borderColor: 'rgba(var(--rgb-accent),0.4)',
    },
});

const GalleryItem = styled('div', {
    borderRadius: '16px',
    overflow: 'hidden',
    aspectRatio: '1',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: '0 4px 16px rgba(var(--rgb-black),0.08)',
    transition: 'all 0.35s ease',
    animation: `${fadeIn} 0.5s ease forwards`,
    backgroundColor: 'var(--color-surface-soft)',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.35s ease',
    },
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 12px 32px rgba(var(--rgb-accent),0.2)',
    },
    '&:hover img': {
        transform: 'scale(1.05)',
    },
    '&:hover .gallery-overlay': {
        opacity: 1,
    },
});

const GalleryOverlay = styled('div', {
    position: 'absolute',
    inset: 0,
    background: 'rgba(var(--rgb-accent),0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    color: 'var(--color-surface)',
    fontSize: '0.85rem',
    fontWeight: 600,
    textAlign: 'center',
    padding: '16px',
});

// Gallery items with real photos from public/images/gallery/
const galleryItems = [
    { src: '/images/gallery/foto%20buku%20.jpeg' },
    { src: '/images/gallery/foto%20buku%20dan%20rumput%20lagi.jpeg' },
    { src: '/images/gallery/foto%20daun.jpeg' },
    { src: '/images/gallery/foto%20gedung%20dan%20pohon.jpeg' },
    { src: '/images/gallery/foto%20lampu%20yg%20didalamnya%20ada%20tanaman.jpeg' },
    { src: '/images/gallery/pexels-artempodrez-7048268.jpg.jpeg' },
    { src: '/images/gallery/pexels-cottonbro-6591426.jpg.jpeg' },
    { src: '/images/gallery/pexels-cottonbro-6591431.jpg.jpeg' },
    { src: '/images/gallery/pexels-ian-panelo-7538364.jpg.jpeg' },
    { src: '/images/gallery/pexels-julia-m-cameron-6995380.jpg.jpeg' },
    { src: '/images/gallery/pexels-rahimegul-18785067.jpg.jpeg' },
    { src: '/images/gallery/pexels-rrodriguesim-18764116.jpg.jpeg' },
    { src: '/images/gallery/pexels-sarah-chai-7263019.jpg.jpeg' },
    { src: '/images/gallery/pexels-shvets-production-7512867.jpg.jpeg' },
    { src: '/images/gallery/pexels-thanh-luu-29104820-18356943.jpg.jpeg' },
    { src: '/images/gallery/pexels-thirdman-7656335.jpg.jpeg' },
    { src: '/images/gallery/pexels-thirdman-7656341.jpg.jpeg' },
];

export default function Gallery() {
    const { t } = useTranslation();
    const { mode } = useThemeMode();
    const [visibleCount, setVisibleCount] = useState(8);
    const visibleItems = useMemo(() => galleryItems.slice(0, visibleCount), [visibleCount]);
    const hasMore = visibleCount < galleryItems.length;

    return (
        <PageWrap className="themed-page gallery-page" data-theme-mode={mode}>
            <PageHeader className="theme-hero">
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(var(--rgb-white),0.05)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(var(--rgb-white),0.15)', border: '1px solid rgba(var(--rgb-white),0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-surface)', marginBottom: '16px' }}>
                        {t('gallery.title')}
                    </span>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-surface)', marginBottom: '12px' }}>{t('gallery.title')}</h1>
                    <p style={{ color: 'rgba(var(--rgb-white),0.85)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>{t('gallery.subtitle')}</p>
                </div>
            </PageHeader>

            <Content>
                <GalleryGrid>
                    {visibleItems.map((item, index) => (
                        <GalleryItem key={index} style={{
                            animationDelay: `${Math.min(index, 8) * 0.04}s`,
                        }}>
                            <img
                                src={item.src}
                                alt={`Gallery ${index + 1}`}
                                loading={index < 2 ? 'eager' : 'lazy'}
                                fetchPriority={index < 2 ? 'high' : 'low'}
                                decoding="async"
                                draggable="false"
                            />
                            <GalleryOverlay className="gallery-overlay">
                                Foto {index + 1}
                            </GalleryOverlay>
                        </GalleryItem>
                    ))}
                </GalleryGrid>

                {hasMore && (
                    <LoadMoreWrap>
                        <LoadMoreButton type="button" onClick={() => setVisibleCount((prev) => prev + 8)}>
                            {t('gallery.load_more', 'Muat lebih banyak foto')}
                        </LoadMoreButton>
                    </LoadMoreWrap>
                )}
            </Content>
        </PageWrap>
    );
}
