import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../stitches.config';
import { ArrowLeft, Leaf, BookOpen, Info, ListChecks, MapPin } from 'lucide-react';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: '#F7FFF5',
    paddingBottom: '80px',
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, #166534, #22c55e)',
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
    return (
        <PageWrap>
            <PageHeader>
                <HeaderContent>
                    <HeaderTag>
                        <Leaf size={16} />
                        Program Blueprint
                    </HeaderTag>
                    <HeaderTitle>Guiding the Go Green School Program</HeaderTitle>
                    <HeaderSubtitle>
                        This page brings together the full program story: purpose, structure, educational value, practical actions, and the steps schools follow to make sustainability part of daily life.
                    </HeaderSubtitle>
                    <PageLink to="/visi-misi">
                        <ArrowLeft size={16} />
                        Back to Vision & Mission
                    </PageLink>
                </HeaderContent>
            </PageHeader>

            <Content>
                <Section className="scroll-reveal">
                    <SectionTitle>Introduction</SectionTitle>
                    <SectionText>
                        Go Green School runs a learning program built around environmental stewardship and meaningful action. It creates a framework where students and teachers collaborate to make waste reduction, energy efficiency, and green living part of daily routines.
                    </SectionText>
                </Section>

                <Section className="scroll-reveal">
                    <SectionTitle>Description</SectionTitle>
                    <SectionText>
                        This program combines hands-on projects, school-wide campaigns, and community involvement. It is designed to be accessible for every school, using simple practices that students can carry home and share with their families.
                    </SectionText>
                </Section>

                <Section className="scroll-reveal">
                    <SectionTitle>Explanation</SectionTitle>
                    <SectionText>
                        The core idea is that schools are powerful places for change. When students practice sustainable habits in class, they learn responsibility, empathy, and systems thinking. The program turns abstract environmental topics into concrete activities that feel relevant and rewarding.
                    </SectionText>
                </Section>

                <Section className="scroll-reveal">
                    <SectionTitle>Information</SectionTitle>
                    <SectionText>
                        Go Green School covers several practical areas that schools can implement step by step. Each element is selected to support learning outcomes and environmental impact together.
                    </SectionText>
                    <SectionList>
                        <SectionListItem>
                            <Bullet>•</Bullet>
                            Waste sorting and recycling programs that teach students the value of materials.
                        </SectionListItem>
                        <SectionListItem>
                            <Bullet>•</Bullet>
                            Energy-saving habits, such as turning off lights, monitoring power use, and using efficient devices.
                        </SectionListItem>
                        <SectionListItem>
                            <Bullet>•</Bullet>
                            School gardens and planting activities that deepen understanding of nature and nutrition.
                        </SectionListItem>
                        <SectionListItem>
                            <Bullet>•</Bullet>
                            Collaboration between students, teachers, and parents to make green habits part of everyday life.
                        </SectionListItem>
                    </SectionList>
                </Section>

                <Section className="scroll-reveal">
                    <SectionTitle>Procedure</SectionTitle>
                    <SectionText>
                        A successful Go Green School program starts with awareness and moves into action. Schools plan clear steps, assign roles, measure progress, and reflect on results so every year’s efforts become stronger.
                    </SectionText>
                    <SectionList>
                        <SectionListItem>
                            <Bullet>•</Bullet>
                            Begin with learning sessions and simple eco-challenges for students.
                        </SectionListItem>
                        <SectionListItem>
                            <Bullet>•</Bullet>
                            Create student teams to manage waste, energy, and gardening activities.
                        </SectionListItem>
                        <SectionListItem>
                            <Bullet>•</Bullet>
                            Monitor results with easy measures, then celebrate progress and share success stories.
                        </SectionListItem>
                        <SectionListItem>
                            <Bullet>•</Bullet>
                            Use school events and community outreach to spread awareness beyond the campus.
                        </SectionListItem>
                    </SectionList>
                </Section>
            </Content>
        </PageWrap>
    );
}
