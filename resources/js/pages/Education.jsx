import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { BookOpen, Filter, User, Tag, ChevronRight } from 'lucide-react';
import axios from 'axios';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: '#F0FFF0',
    paddingBottom: '64px',
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, #1a6b1a, #228B22)',
    padding: '60px 24px 80px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
});

const PageTitle = styled('h1', {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#ffffff',
    marginBottom: '12px',
    '@lg': { fontSize: '2.8rem' },
});

const PageSubtitle = styled('p', {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
});

const Content = styled('div', {
    maxWidth: '1100px',
    margin: '-40px auto 0',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10,
});

const FilterBar = styled('div', {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '16px 20px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
    marginBottom: '28px',
    border: '1px solid rgba(34,139,34,0.08)',
});

const FilterBtn = styled('button', {
    padding: '7px 16px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.2s ease',
    border: '1.5px solid',
    variants: {
        active: {
            true: {
                background: '#228B22',
                borderColor: '#228B22',
                color: '#ffffff',
            },
            false: {
                background: 'transparent',
                borderColor: '#e5e7eb',
                color: '#6b7280',
                '&:hover': {
                    borderColor: '#228B22',
                    color: '#228B22',
                },
            },
        },
    },
});

const PostGrid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '24px',
    '@sm': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '@lg': { gridTemplateColumns: 'repeat(3, 1fr)' },
});

const PostCard = styled('div', {
    background: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    border: '1px solid rgba(34,139,34,0.08)',
    transition: 'all 0.3s ease',
    animation: `${fadeIn} 0.5s ease forwards`,
    '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 16px 32px rgba(34,139,34,0.12)',
    },
});

const CardImageWrap = styled('div', {
    height: '160px',
    background: 'linear-gradient(135deg, #228B22, #4ade80)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
});

const CategoryBadge = styled('span', {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '20px',
    padding: '4px 10px',
    fontSize: '0.7rem',
    fontWeight: 700,
    color: '#228B22',
});

const CardContent = styled('div', {
    padding: '20px',
});

const SubjectRow = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '12px',
});

const SubjectTag = styled('span', {
    background: '#f0fdf4',
    border: '1px solid rgba(34,139,34,0.2)',
    color: '#228B22',
    borderRadius: '20px',
    padding: '3px 10px',
    fontSize: '0.7rem',
    fontWeight: 600,
});

const PostTitle = styled('h3', {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#1f2937',
    marginBottom: '10px',
    lineHeight: 1.4,
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
});

const PostExcerpt = styled('p', {
    fontSize: '0.8rem',
    color: '#6b7280',
    lineHeight: 1.6,
    display: '-webkit-box',
    '-webkit-line-clamp': '3',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    marginBottom: '16px',
});

const PostMeta = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '12px',
    borderTop: '1px solid #f0fdf4',
});

const AuthorTag = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.75rem',
    color: '#6b7280',
});

// Category icon colors
const catColors = {
    'math-rpl': { bg: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', label: 'Math + RPL' },
    'bind-digimar': { bg: 'linear-gradient(135deg, #ec4899, #f97316)', label: 'B.Ind + Digimar' },
    'bing-kik': { bg: 'linear-gradient(135deg, #22c55e, #06b6d4)', label: 'B.Ing + KIK' },
};

// Fallback posts
const fallbackPosts = [
    {
        id: 1,
        title: 'Simulator Bank Sampah: Belajar Matematika sambil Menjaga Lingkungan',
        title_en: 'Waste Bank Simulator: Learning Math while Protecting the Environment',
        content: 'Proyek kolaborasi antara mata pelajaran Matematika dan RPL. Siswa membangun simulator bank sampah menggunakan JavaScript yang menghitung nilai ekonomi dan dampak lingkungan dari daur ulang sampah.',
        content_en: 'A collaborative project between Mathematics and Software Engineering. Students build a waste bank simulator using JavaScript.',
        category: 'math-rpl',
        author: 'Tim Siswa RPL & Matematika',
        subjects: ['Matematika', 'RPL'],
    },
    {
        id: 2,
        title: 'Kampanye Digital Go Green: Strategi Marketing untuk Lingkungan',
        title_en: 'Go Green Digital Campaign: Marketing Strategy for the Environment',
        content: 'Siswa Digital Marketing membuat kampanye media sosial untuk mempromosikan program bank sampah sekolah.',
        content_en: 'Digital Marketing students create social media campaigns to promote the school waste bank program.',
        category: 'bind-digimar',
        author: 'Tim Siswa Digimar & B. Indonesia',
        subjects: ['B. Indonesia', 'Digital Marketing'],
    },
    {
        id: 3,
        title: 'Green Innovation Showcase: Youth Entrepreneurship for Sustainability',
        title_en: 'Green Innovation Showcase: Youth Entrepreneurship for Sustainability',
        content: 'Pameran inovasi hijau yang menampilkan proyek-proyek kewirausahaan siswa dalam bahasa Inggris.',
        content_en: 'A green innovation showcase featuring student entrepreneurship projects presented in English.',
        category: 'bing-kik',
        author: 'Tim Siswa KIK & B. Inggris',
        subjects: ['B. Inggris', 'KIK'],
    },
    {
        id: 4,
        title: 'Analisis Data Pengurangan Sampah Sekolah 2024',
        title_en: 'School Waste Reduction Data Analysis 2024',
        content: 'Siswa Matematika menganalisis tren pengurangan sampah selama satu tahun dan divisualisasikan oleh siswa RPL.',
        content_en: 'Mathematics students analyze waste reduction trends with visualizations by Software Engineering students.',
        category: 'math-rpl',
        author: 'Tim Siswa RPL & Matematika',
        subjects: ['Matematika', 'RPL'],
    },
    {
        id: 5,
        title: 'Panduan Kompos untuk Kebun Sekolah',
        title_en: 'Composting Guide for School Garden',
        content: 'Artikel bilingual yang menjelaskan cara membuat kompos dari sampah organik sekolah beserta perhitungan matematika.',
        content_en: 'A bilingual article on making compost from school organic waste with mathematical calculations.',
        category: 'bind-digimar',
        author: 'Tim Siswa Multidisiplin',
        subjects: ['B. Indonesia', 'B. Inggris', 'Matematika'],
    },
    {
        id: 6,
        title: 'Entrepreneurship in Green Economy: Business Plan Competition',
        title_en: 'Entrepreneurship in Green Economy: Business Plan Competition',
        content: 'Kompetisi business plan berbahasa Inggris bertema ekonomi hijau. Siswa KIK mempresentasikan ide bisnis ramah lingkungan.',
        content_en: 'An English-language business plan competition centered on green economy. KIK students present eco-friendly business ideas.',
        category: 'bing-kik',
        author: 'Tim Siswa KIK & B. Inggris',
        subjects: ['B. Inggris', 'KIK'],
    },
];

// Decorative: pattern icon based on category
const catIconBg = (cat) => {
    switch (cat) {
        case 'math-rpl': return '🔢💻';
        case 'bind-digimar': return '📝📱';
        case 'bing-kik': return '🌍💡';
        default: return '🌿';
    }
};

export default function Education() {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language === 'en';
    const [posts, setPosts] = useState(fallbackPosts);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        axios.get('/api/v1/posts')
            .then(res => {
                if (res.data.data?.data?.length > 0) {
                    setPosts(res.data.data.data);
                }
            })
            .catch(() => {});
    }, []);

    const filters = [
        { key: 'all', label: t('education.filter_all') },
        { key: 'math-rpl', label: t('education.filter_math_rpl') },
        { key: 'bind-digimar', label: t('education.filter_bind_digimar') },
        { key: 'bing-kik', label: t('education.filter_bing_kik') },
    ];

    const filtered = activeFilter === 'all' ? posts : posts.filter(p => p.category === activeFilter);

    return (
        <PageWrap>
            <PageHeader>
                <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '16px' }}>
                        <BookOpen size={14} /> {t('education.title')}
                    </span>
                    <PageTitle>{t('education.title')}</PageTitle>
                    <PageSubtitle>{t('education.subtitle')}</PageSubtitle>
                </div>
            </PageHeader>

            <Content>
                <FilterBar>
                    <Filter size={16} color="#6b7280" style={{ flexShrink: 0 }} />
                    {filters.map(f => (
                        <FilterBtn
                            key={f.key}
                            active={activeFilter === f.key ? 'true' : 'false'}
                            onClick={() => setActiveFilter(f.key)}
                        >
                            {f.label}
                        </FilterBtn>
                    ))}
                    <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#6b7280' }}>
                        {filtered.length} artikel
                    </span>
                </FilterBar>

                <PostGrid>
                    {filtered.map((post, index) => {
                        const catInfo = catColors[post.category] || { bg: 'linear-gradient(135deg, #228B22, #4ade80)', label: post.category };
                        return (
                            <PostCard key={post.id} style={{ animationDelay: `${index * 0.08}s` }}>
                                <CardImageWrap style={{ background: catInfo.bg }}>
                                    <div style={{ fontSize: '3rem', opacity: 0.5 }}>{catIconBg(post.category)}</div>
                                    <CategoryBadge>{catInfo.label}</CategoryBadge>
                                </CardImageWrap>
                                <CardContent>
                                    {post.subjects && (
                                        <SubjectRow>
                                            {(Array.isArray(post.subjects) ? post.subjects : JSON.parse(post.subjects || '[]')).map((subj, si) => (
                                                <SubjectTag key={si}>{subj}</SubjectTag>
                                            ))}
                                        </SubjectRow>
                                    )}
                                    <PostTitle>
                                        {isEn ? (post.title_en || post.title) : post.title}
                                    </PostTitle>
                                    <PostExcerpt>
                                        {isEn ? (post.content_en || post.content) : post.content}
                                    </PostExcerpt>
                                    <PostMeta>
                                        <AuthorTag>
                                            <User size={12} />
                                            <span>{post.author || 'Tim Siswa'}</span>
                                        </AuthorTag>
                                        <a
                                            href="#"
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '4px',
                                                fontSize: '0.78rem', fontWeight: 600, color: '#228B22',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            Baca <ChevronRight size={12} />
                                        </a>
                                    </PostMeta>
                                </CardContent>
                            </PostCard>
                        );
                    })}
                </PostGrid>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 24px', color: '#6b7280' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
                        <p style={{ fontWeight: 600 }}>Belum ada artikel untuk kategori ini.</p>
                    </div>
                )}
            </Content>
        </PageWrap>
    );
}
