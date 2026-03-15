import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { Eye, Target, Heart, Users, Lightbulb, Shield, Check } from 'lucide-react';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: '#F0FFF0',
    paddingBottom: '80px',
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, #166534, #228B22)',
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

const Section = styled('div', {
    background: '#ffffff',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
    marginBottom: '24px',
    border: '1px solid rgba(34,139,34,0.06)',
    animation: `${fadeIn} 0.6s ease forwards`,
});

const SectionTitle = styled('h2', {
    fontSize: '1.6rem',
    fontWeight: 800,
    color: '#1f2937',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingBottom: '16px',
    borderBottom: '2px solid #f0fdf4',
    '& svg': { color: '#228B22' },
});

const VisiBox = styled('div', {
    background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    border: '1px solid rgba(34,139,34,0.2)',
    borderRadius: '16px',
    padding: '28px',
    position: 'relative',
    overflow: 'hidden',
});

const VisiQuote = styled('span', {
    position: 'absolute',
    top: '-10px',
    left: '20px',
    fontSize: '5rem',
    color: 'rgba(34,139,34,0.15)',
    fontFamily: 'Georgia, serif',
    lineHeight: 1,
    userSelect: 'none',
    pointerEvents: 'none',
});

const VisiText = styled('p', {
    fontSize: '1.1rem',
    color: '#1f2937',
    lineHeight: 1.75,
    fontWeight: 500,
    fontStyle: 'italic',
    position: 'relative',
    zIndex: 1,
    paddingLeft: '16px',
    borderLeft: '3px solid #228B22',
});

const MisiList = styled('ul', {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
});

const MisiItem = styled('li', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '14px 16px',
    background: '#f9fafb',
    borderRadius: '12px',
    fontSize: '0.9rem',
    color: '#374151',
    lineHeight: 1.6,
    transition: 'all 0.2s ease',
    '&:hover': {
        background: '#f0fdf4',
        transform: 'translateX(4px)',
    },
});

const CheckIcon = styled('div', {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'rgba(34,139,34,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px',
    '& svg': { color: '#228B22' },
});

const ValuesGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    '@lg': { gridTemplateColumns: 'repeat(4, 1fr)' },
});

const ValueCard = styled('div', {
    background: '#f9fafb',
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid rgba(34,139,34,0.08)',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: '#f0fdf4',
        borderColor: 'rgba(34,139,34,0.2)',
        transform: 'translateY(-4px)',
    },
});

const ValueIcon = styled('div', {
    width: '52px',
    height: '52px',
    borderRadius: '14px',
    background: 'rgba(34,139,34,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 12px',
    '& svg': { color: '#228B22' },
});

const valueIcons = [<Target size={22} />, <Users size={22} />, <Lightbulb size={22} />, <Shield size={22} />];

export default function VisiMisi() {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === 'en';

    const misiItems = t('visi_misi.misi_items', { returnObjects: true });
    const values = t('visi_misi.values', { returnObjects: true });

    return (
        <PageWrap>
            <PageHeader>
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '16px' }}>
                        <Eye size={14} /> {t('visi_misi.title')}
                    </span>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                        {t('visi_misi.title')}
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Landasan filosofi dan arah tujuan Go Green School
                    </p>
                </div>
            </PageHeader>

            <Content>
                {/* Visi */}
                <Section>
                    <SectionTitle>
                        <Eye size={24} />
                        {t('visi_misi.visi_title')}
                    </SectionTitle>
                    <VisiBox>
                        <VisiQuote aria-hidden="true">“</VisiQuote>
                        <VisiText>{t('visi_misi.visi_content')}</VisiText>
                    </VisiBox>
                </Section>

                {/* Misi */}
                <Section style={{ animationDelay: '0.1s' }}>
                    <SectionTitle>
                        <Target size={24} />
                        {t('visi_misi.misi_title')}
                    </SectionTitle>
                    <MisiList>
                        {Array.isArray(misiItems) && misiItems.map((item, i) => (
                            <MisiItem key={i}>
                                <CheckIcon>
                                    <Check size={14} />
                                </CheckIcon>
                                <span>{item}</span>
                            </MisiItem>
                        ))}
                    </MisiList>
                </Section>

                {/* Values */}
                <Section style={{ animationDelay: '0.2s' }}>
                    <SectionTitle>
                        <Heart size={24} />
                        {t('visi_misi.values_title')}
                    </SectionTitle>
                    <ValuesGrid>
                        {Array.isArray(values) && values.map((val, i) => (
                            <ValueCard key={i}>
                                <ValueIcon>{valueIcons[i]}</ValueIcon>
                                <h4 style={{ fontWeight: 700, color: '#1f2937', marginBottom: '8px', fontSize: '0.95rem' }}>{val.title}</h4>
                                <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5 }}>{val.desc}</p>
                            </ValueCard>
                        ))}
                    </ValuesGrid>
                </Section>
            </Content>
        </PageWrap>
    );
}
