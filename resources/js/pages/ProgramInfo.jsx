import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '../stitches.config';
import { ArrowLeft, Leaf } from 'lucide-react';
import useThemeMode from '../hooks/useThemeMode';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, var(--color-bg-muted) 0%, var(--color-bg-muted) 52%, var(--color-bg-muted) 100%)',
    paddingBottom: '80px',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 10% 22%, rgba(var(--rgb-accent),0.1) 0%, transparent 30%), radial-gradient(circle at 84% 18%, rgba(var(--rgb-accent-strong),0.08) 0%, transparent 24%), radial-gradient(circle at 72% 76%, rgba(var(--rgb-accent-strong),0.08) 0%, transparent 20%)',
        zIndex: 0,
    },
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))',
    padding: '70px 24px 90px',
    color: 'var(--color-surface)',
    position: 'relative',
    overflow: 'hidden',
});

const HeaderContent = styled('div', {
    maxWidth: '1080px',
    margin: '0 auto',
});

const HeaderTag = styled('span', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'rgba(var(--rgb-white),0.18)',
    border: '1px solid rgba(var(--rgb-white),0.35)',
    borderRadius: '999px',
    padding: '12px 20px',
    fontSize: '0.95rem',
    fontWeight: 700,
});

const HeaderTitle = styled('h1', {
    fontSize: '3rem',
    lineHeight: 1.05,
    fontWeight: 900,
    marginTop: '24px',
    maxWidth: '760px',
});

const HeaderSubtitle = styled('p', {
    marginTop: '20px',
    maxWidth: '720px',
    color: 'rgba(var(--rgb-white),0.92)',
    fontSize: '1.05rem',
    lineHeight: 1.8,
});

const PageLink = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '30px',
    background: 'rgba(var(--rgb-white),0.18)',
    color: 'var(--color-surface)',
    padding: '14px 22px',
    borderRadius: '999px',
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'rgba(var(--rgb-white),0.28)',
    },
});

const Content = styled('div', {
    maxWidth: '1040px',
    margin: '-40px auto 0',
    padding: '0 24px',
});

const Section = styled('section', {
    background: 'var(--color-surface)',
    borderRadius: '32px',
    padding: '48px',
    boxShadow: '0 24px 70px rgba(var(--rgb-ink),0.06)',
    marginBottom: '32px',
    overflow: 'hidden',
});

const SectionHead = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '22px',
});

const SectionNumber = styled('span', {
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    background: 'var(--color-accent-strong)',
    color: 'var(--color-surface)',
    display: 'inline-grid',
    placeItems: 'center',
    fontSize: '0.9rem',
    fontWeight: 800,
    letterSpacing: '0.04em',
    boxShadow: '0 10px 24px rgba(var(--rgb-ink),0.16)',
});

const SectionTitle = styled('h2', {
    fontSize: '2.1rem',
    fontWeight: 900,
    color: 'var(--color-accent-deep)',
    marginBottom: 0,
    letterSpacing: '-0.01em',
    lineHeight: 1.1,
    textShadow: '0 2px 0 rgba(var(--rgb-white),0.25)',
    '@sm': {
        fontSize: '1.75rem',
    },
});

const SectionText = styled('div', {
    fontSize: '1.08rem',
    lineHeight: 1.92,
    color: 'rgba(var(--rgb-ink),0.84)',
    maxWidth: '920px',
});

const SectionList = styled('ul', {
    margin: '24px 0 0',
    padding: '0',
    listStyle: 'none',
    display: 'grid',
    gap: '14px',
});

const SectionListItem = styled('li', {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    color: 'rgba(var(--rgb-ink),0.84)',
    fontSize: '1rem',
    lineHeight: 1.8,
    background: 'var(--color-surface-soft)',
    border: '1px solid rgba(var(--rgb-accent),0.12)',
    borderRadius: '14px',
    padding: '12px 14px',
});

const Bullet = styled('span', {
    flexShrink: 0,
    marginTop: '4px',
    color: 'var(--color-accent-strong)',
});

export default function ProgramInfo() {
    const { t } = useTranslation();
    const { mode } = useThemeMode();
    const sections = t('program_info.sections', { returnObjects: true });

    return (
        <PageWrap className="themed-page programinfo-page" data-theme-mode={mode}>
            <PageHeader className="theme-hero">
                <HeaderContent>
                    <HeaderTag>
                        <Leaf size={16} />
                        {t('program_info.tag')}
                    </HeaderTag>
                    <HeaderTitle>{t('program_info.title')}</HeaderTitle>
                    <HeaderSubtitle>
                        {t('program_info.subtitle')}
                    </HeaderSubtitle>
                    <PageLink to="/visi-misi">
                        <ArrowLeft size={16} />
                        {t('program_info.back_to_vision')}
                    </PageLink>
                </HeaderContent>
            </PageHeader>

            <Content>
                {Array.isArray(sections) && sections.map((section, sectionIndex) => (
                    <Section className="scroll-reveal is-visible" key={section.title}>
                        <SectionHead>
                            <SectionNumber>{String(sectionIndex + 1).padStart(2, '0')}</SectionNumber>
                            <SectionTitle>{section.title}</SectionTitle>
                        </SectionHead>
                        <SectionText>{section.text}</SectionText>
                        {Array.isArray(section.items) && section.items.length > 0 && (
                            <SectionList>
                                {section.items.map((item, itemIndex) => (
                                    <SectionListItem key={`${section.title}-${itemIndex}`}>
                                        <Bullet>-</Bullet>
                                        {item}
                                    </SectionListItem>
                                ))}
                            </SectionList>
                        )}
                    </Section>
                ))}
            </Content>
        </PageWrap>
    );
}
