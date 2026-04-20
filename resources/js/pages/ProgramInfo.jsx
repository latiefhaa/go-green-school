import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '../stitches.config';
import { ArrowLeft, Leaf, BookOpen, Info, ListChecks, MapPin } from 'lucide-react';
import useThemeMode from '../hooks/useThemeMode';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #eaf8ec 0%, #effaf1 52%, #f5fcf6 100%)',
    paddingBottom: '80px',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 10% 22%, rgba(76,175,80,0.1) 0%, transparent 30%), radial-gradient(circle at 84% 18%, rgba(115,201,94,0.08) 0%, transparent 24%), radial-gradient(circle at 72% 76%, rgba(167,219,116,0.08) 0%, transparent 20%)',
        zIndex: 0,
    },
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, #228b45, #2dbb62)',
    padding: '70px 24px 90px',
    color: '#ffffff',
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
    background: 'rgba(255,255,255,0.18)',
    border: '1px solid rgba(255,255,255,0.35)',
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
    color: 'rgba(255,255,255,0.92)',
    fontSize: '1.05rem',
    lineHeight: 1.8,
});

const PageLink = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '30px',
    background: 'rgba(255,255,255,0.18)',
    color: '#ffffff',
    padding: '14px 22px',
    borderRadius: '999px',
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'rgba(255,255,255,0.28)',
    },
});

const Content = styled('div', {
    maxWidth: '1040px',
    margin: '-40px auto 0',
    padding: '0 24px',
});

const Section = styled('section', {
    background: '#ffffff',
    borderRadius: '32px',
    padding: '48px',
    boxShadow: '0 24px 70px rgba(15,23,42,0.06)',
    marginBottom: '32px',
    overflow: 'hidden',
});

const SectionTitle = styled('h2', {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#0f172a',
    marginBottom: '24px',
});

const SectionText = styled('div', {
    fontSize: '1.05rem',
    lineHeight: 1.95,
    color: '#475569',
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
    color: '#334155',
    fontSize: '1rem',
    lineHeight: 1.8,
});

const Bullet = styled('span', {
    flexShrink: 0,
    marginTop: '4px',
    color: '#16a34a',
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
                        <SectionTitle>{section.title}</SectionTitle>
                        <SectionText>{section.text}</SectionText>
                        {Array.isArray(section.items) && section.items.length > 0 && (
                            <SectionList>
                                {section.items.map((item, itemIndex) => (
                                    <SectionListItem key={`${section.title}-${itemIndex}`}>
                                        <Bullet>•</Bullet>
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
