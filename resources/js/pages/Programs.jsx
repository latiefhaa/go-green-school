import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { Recycle, Sprout, Zap, BookOpen, ArrowRight, Check } from 'lucide-react';
import axios from 'axios';
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
    '& h1': {
        textShadow: '0 8px 22px rgba(0,0,0,0.28)',
    },
    '& p': {
        textShadow: '0 4px 12px rgba(0,0,0,0.22)',
    },
});

const Content = styled('div', {
    maxWidth: '1100px',
    margin: '-40px auto 0',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10,
    '@sm': { padding: '0 16px' },
});

const ProgramCard = styled('article', {
    background: 'var(--color-surface)',
    borderRadius: '26px',
    overflow: 'hidden',
    boxShadow: '0 24px 55px rgba(var(--rgb-ink),0.08)',
    border: '1px solid rgba(var(--rgb-accent),0.12)',
    marginBottom: '28px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    animation: `${fadeIn} 0.6s ease forwards`,
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 32px 80px rgba(var(--rgb-ink),0.12)',
        '& img': {
            transform: 'scale(1.07)',
            filter: 'saturate(1.1) contrast(1.05)',
        },
    },
    '@lg': { gridTemplateColumns: '320px 1fr' },
});

const CardVisual = styled('div', {
    minHeight: '240px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    padding: '28px',
    background: 'var(--color-surface-soft)',
    '@lg': { minHeight: '100%', padding: '36px' },
});

const CardVisualOverlay = styled('div', {
    position: 'absolute',
    inset: 0,
    opacity: 1,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.34) 100%)',
    zIndex: 1,
    pointerEvents: 'none',
});

const CardImage = styled('img', {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    opacity: 1,
    transform: 'scale(1.02)',
    filter: 'saturate(1.06) contrast(1.02)',
    zIndex: 0,
    transition: 'transform 0.5s ease, filter 0.5s ease',
});

const CardContent = styled('div', {
    padding: '32px',
    '@sm': { padding: '24px 20px' },
    '@lg': { padding: '36px 40px' },
});

const CardHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
});

const CardIconWrap = styled('div', {
    width: '56px',
    height: '56px',
    minWidth: '56px',
    borderRadius: '16px',
    background: 'rgba(var(--rgb-white),0.22)',
    display: 'grid',
    placeItems: 'center',
    color: 'var(--color-surface)',
    position: 'relative',
    zIndex: 2,
    boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
    backdropFilter: 'blur(2px)',
});

const ProgramMeta = styled('span', {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: 'var(--color-accent-deep)',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    background: 'rgba(var(--rgb-accent),0.1)',
    borderRadius: '999px',
    padding: '4px 10px',
    display: 'inline-flex',
});

const ProgramTitle = styled('h2', {
    fontSize: '1.82rem',
    fontWeight: 900,
    color: 'var(--color-text-strong)',
    marginBottom: '12px',
    lineHeight: 1.12,
    letterSpacing: '-0.01em',
    textWrap: 'balance',
    '@sm': {
        fontSize: '1.55rem',
    },
});

const ProgramDesc = styled('p', {
    color: 'var(--color-text-muted)',
    lineHeight: 1.82,
    fontSize: '1.02rem',
    marginBottom: '22px',
});

const FeatureList = styled('ul', {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px',
    display: 'grid',
    gap: '14px',
});

const FeatureItem = styled('li', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '0.95rem',
    color: 'var(--color-text-subtle)',
    lineHeight: 1.75,
    '& svg': { color: 'var(--color-accent-strong)', flexShrink: 0, marginTop: '4px' },
});

const DetailSection = styled('section', {
    background: 'var(--color-surface)',
    border: '1px solid rgba(var(--rgb-accent),0.2)',
    borderRadius: '18px',
    padding: '18px 18px 16px',
    marginTop: '12px',
    boxShadow: '0 8px 24px rgba(var(--rgb-ink),0.05)',
});

const DetailHeading = styled('h3', {
    fontSize: '1.04rem',
    fontWeight: 900,
    color: 'var(--color-accent-deep)',
    marginBottom: '10px',
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(var(--rgb-accent),0.12)',
    border: '1px solid rgba(var(--rgb-accent),0.25)',
    borderRadius: '999px',
    padding: '6px 12px',
    letterSpacing: '0.01em',
});

const DetailText = styled('p', {
    fontSize: '0.98rem',
    lineHeight: 1.82,
    color: 'var(--color-text-subtle)',
});

const DetailSubHeading = styled('h4', {
    fontSize: '0.98rem',
    fontWeight: 900,
    color: 'var(--color-text-strong)',
    marginTop: '12px',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    borderLeft: '4px solid var(--color-accent-strong)',
    paddingLeft: '10px',
});

const DetailList = styled('ul', {
    margin: 0,
    paddingLeft: '18px',
    color: 'var(--color-text-subtle)',
    display: 'grid',
    gap: '6px',
    '& li::marker': {
        color: 'var(--color-accent-strong)',
    },
    '& li': {
        fontSize: '0.95rem',
        lineHeight: 1.74,
        color: 'var(--color-text-subtle)',
    },
});

const StepList = styled('ol', {
    margin: '8px 0 0',
    paddingLeft: '18px',
    color: 'var(--color-text-subtle)',
    display: 'grid',
    gap: '8px',
    '& li::marker': {
        color: 'var(--color-accent-deep)',
        fontWeight: 800,
    },
    '& li': {
        fontSize: '0.96rem',
        lineHeight: 1.78,
        color: 'var(--color-text-subtle)',
    },
});

const IntroSection = styled('div', {
    background: 'var(--color-surface)',
    borderRadius: '28px',
    padding: '28px 30px',
    boxShadow: '0 16px 45px rgba(var(--rgb-ink),0.08)',
    marginBottom: '26px',
    textAlign: 'center',
    '@sm': { padding: '24px 18px' },
});

const IntroMeta = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px',
    color: 'var(--color-accent-strong)',
    fontWeight: 700,
    svg: { display: 'block' },
});

const IntroTitle = styled('h2', {
    fontSize: '2rem',
    fontWeight: 900,
    color: 'var(--color-text-strong)',
    marginBottom: '14px',
});

const IntroText = styled('p', {
    maxWidth: '820px',
    margin: '0 auto',
    color: 'var(--color-text-subtle)',
    lineHeight: 1.8,
    fontSize: '1rem',
});

const InfoRow = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '18px',
    marginTop: '22px',
    '@md': { gridTemplateColumns: '1fr 1fr' },
});

const InfoCard = styled('div', {
    background: 'linear-gradient(180deg, var(--color-surface-muted) 0%, var(--color-link) 100%)',
    borderRadius: '22px',
    padding: '20px',
    border: '1px solid rgba(var(--rgb-accent),0.12)',
});

const InfoCardTitle = styled('h3', {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: 'var(--color-accent-deep)',
    marginBottom: '10px',
});

const InfoCardText = styled('p', {
    color: 'var(--color-text-subtle)',
    lineHeight: 1.75,
    fontSize: '0.95rem',
});

const SectionCard = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '18px',
    flexWrap: 'wrap',
    marginTop: '20px',
});

const SectionButton = styled(Link, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 20px',
    background: 'var(--color-accent-strong)',
    color: 'var(--color-surface)',
    borderRadius: '999px',
    textDecoration: 'none',
    fontWeight: 700,
    transition: 'background 0.2s ease',
    '&:hover': { background: 'var(--color-accent-deep)' },
});

const iconMap = {
    recycle: <Recycle size={40} />,
    leaf: <Sprout size={40} />,
    zap: <Zap size={40} />,
    'book-open': <BookOpen size={40} />,
};

const imageMap = {
    'bank-sampah': '/images/programs/bank-sampah.jpeg',
    'kebun-vertikal': '/images/programs/kebun-vertikal.jpeg',
    'hemat-energi': '/images/programs/hemat-energi.jpeg',
    'edukasi-hijau': '/images/programs/edukasi-hijau.jpeg',
};

const bgMap = {
    'bank-sampah': 'linear-gradient(135deg, var(--color-accent-strong), var(--color-link))',
    'kebun-vertikal': 'linear-gradient(135deg, var(--color-accent-deep), var(--color-accent-strong))',
    'hemat-energi': 'linear-gradient(135deg, var(--color-warning), var(--color-warning-soft))',
    'edukasi-hijau': 'linear-gradient(135deg, var(--color-accent-deep), var(--color-link))',
};

const featuresMap = {
    'bank-sampah': {
        id: ['Pemilahan sampah organik & anorganik', 'Penimbangan dan pencatatan', 'Perhitungan nilai ekonomi', 'Pelaporan data & pelacakan hasil'],
        en: ['Sorting organic and inorganic waste', 'Weighing and recording', 'Calculating economic value', 'Data reporting and tracking results'],
    },
    'kebun-vertikal': {
        id: ['Teknik hidroponik sederhana', 'Tanaman sayur & obat', 'Sistem irigasi tetes', 'Perawatan tanaman berkelanjutan'],
        en: ['Simple hydroponic techniques', 'Vegetable and medicinal plant growing', 'Drip irrigation system', 'Sustainable plant care'],
    },
    'hemat-energi': {
        id: ['Panel surya di atap sekolah', 'Monitoring konsumsi listrik', 'Kampanye hemat energi', 'Pengurangan penggunaan energi'],
        en: ['Solar panels on the school roof', 'Monitoring electricity consumption', 'Energy saving campaigns', 'Reducing energy use'],
    },
    'edukasi-hijau': {
        id: ['Proyek kelas ramah lingkungan', 'Presentasi kampanye hijau', 'Praktik sains terpadu', 'Pengembangan literasi lingkungan'],
        en: ['Eco-friendly class projects', 'Green campaign presentations', 'Hands-on science practice', 'Environmental literacy development'],
    },
};

const procedureMap = {
    'bank-sampah': {
        id: 'Program dimulai dari pemetaan sumber sampah di sekolah, penyediaan titik kumpul terpilah, lalu penjadwalan setor sampah per kelas. Setiap setoran diverifikasi oleh tim siswa dan guru pendamping untuk memastikan kualitas pemilahan sebelum dicatat sebagai tabungan lingkungan.',
        en: 'The program starts with mapping school waste sources, preparing sorted collection points, and setting class-based deposit schedules. Each deposit is verified by student teams and mentor teachers to ensure sorting quality before being recorded as environmental savings.',
    },
    'kebun-vertikal': {
        id: 'Prosedur diawali dengan analisis lokasi tanam, pemilihan media, serta penyusunan jadwal tanam musiman. Siswa bekerja dalam kelompok untuk menyiapkan rak vertikal, melakukan semai, pemindahan bibit, dan pemeliharaan rutin dengan pemantauan pertumbuhan mingguan.',
        en: 'The procedure begins with site analysis, media selection, and seasonal planting schedules. Students work in groups to prepare vertical racks, seed trays, transplanting, and routine maintenance with weekly growth monitoring.',
    },
    'hemat-energi': {
        id: 'Program dijalankan melalui audit energi awal, penetapan target penghematan per zona, dan implementasi kebiasaan hemat energi di kelas, laboratorium, serta area umum. Data penggunaan listrik dikumpulkan berkala untuk evaluasi dampak dan perbaikan strategi.',
        en: 'The program is executed through an initial energy audit, savings targets per zone, and implementation of saving habits in classrooms, labs, and common areas. Electricity data is collected periodically to evaluate impact and refine strategy.',
    },
    'edukasi-hijau': {
        id: 'Prosedur dimulai dengan integrasi topik lingkungan ke rencana pembelajaran, penentuan proyek berbasis masalah, dan pendampingan presentasi kampanye hijau. Setiap proyek ditutup dengan refleksi untuk menilai perubahan perilaku dan pemahaman siswa.',
        en: 'The procedure starts by integrating environmental topics into lesson plans, defining problem-based projects, and mentoring green campaign presentations. Each project closes with reflection to assess behavior change and student understanding.',
    },
};

const stepsMap = {
    'bank-sampah': {
        id: [
            'Lakukan sosialisasi standar pemilahan sampah kepada seluruh kelas dan wali kelas.',
            'Tetapkan petugas harian siswa untuk mengumpulkan dan mengantar sampah ke bank sampah sekolah.',
            'Timbang, kategorikan, dan catat sampah dalam buku digital atau lembar rekap mingguan.',
            'Konversi hasil setoran menjadi poin ekonomi lingkungan untuk kelas atau siswa.',
            'Lakukan evaluasi bulanan untuk melihat tren volume sampah dan tingkat partisipasi.',
        ],
        en: [
            'Socialize sorting standards to all classes and homeroom teachers.',
            'Assign student daily officers to collect and deliver waste to the school waste bank.',
            'Weigh, categorize, and record waste in a digital log or weekly recap sheet.',
            'Convert deposits into environmental economic points for classes or students.',
            'Run monthly evaluations to review waste volume trends and participation rates.',
        ],
    },
    'kebun-vertikal': {
        id: [
            'Pilih tanaman yang sesuai iklim lokal serta durasi pembelajaran semester berjalan.',
            'Siapkan instalasi vertikal dan media tanam dengan komposisi yang ramah lingkungan.',
            'Lakukan penyemaian, pemindahan bibit, dan penjadwalan penyiraman berbasis tim.',
            'Pantau pertumbuhan, serangan hama, dan nutrisi tanaman dengan jurnal sederhana.',
            'Panen hasil tanam dan dokumentasikan sebagai bahan praktik sains serta kewirausahaan.',
        ],
        en: [
            'Select crops suitable for local climate and semester learning duration.',
            'Prepare vertical installations and eco-friendly growing media composition.',
            'Carry out seeding, transplanting, and team-based watering schedules.',
            'Monitor growth, pest attacks, and plant nutrition using simple journals.',
            'Harvest and document results for science practice and entrepreneurship activities.',
        ],
    },
    'hemat-energi': {
        id: [
            'Identifikasi perangkat dengan konsumsi listrik tertinggi di area sekolah.',
            'Susun panduan operasional hemat energi untuk lampu, AC, dan peralatan elektronik.',
            'Pasang pengingat visual di ruang kelas untuk kebiasaan mematikan perangkat saat tidak dipakai.',
            'Lakukan pencatatan meter listrik pada interval tetap untuk membandingkan baseline.',
            'Presentasikan hasil penghematan energi pada forum siswa dan rapat sekolah.',
        ],
        en: [
            'Identify devices with the highest electricity usage across school areas.',
            'Create operational saving guidelines for lights, AC units, and electronics.',
            'Install visual reminders in classrooms to switch off idle devices.',
            'Record electricity meters at fixed intervals to compare against baseline.',
            'Present savings outcomes in student forums and school meetings.',
        ],
    },
    'edukasi-hijau': {
        id: [
            'Pilih isu lingkungan lokal yang dekat dengan kehidupan siswa sebagai topik utama.',
            'Rancang aktivitas proyek lintas mata pelajaran dengan indikator hasil yang jelas.',
            'Bimbing siswa melakukan riset mini, observasi lapangan, dan penyusunan solusi.',
            'Dorong presentasi kampanye hijau menggunakan media kreatif digital maupun fisik.',
            'Terapkan refleksi dan umpan balik untuk memperkuat kebiasaan ramah lingkungan.',
        ],
        en: [
            'Choose local environmental issues close to students lives as primary topics.',
            'Design cross-subject project activities with clear outcome indicators.',
            'Guide students through mini research, field observations, and solution building.',
            'Encourage green campaign presentations using creative digital and physical media.',
            'Apply reflection and feedback to strengthen eco-friendly habits.',
        ],
    },
};

const implementationMap = {
    'bank-sampah': {
        id: 'Penerapan di sekolah dilakukan melalui kolaborasi OSIS, tim kebersihan, wali kelas, dan orang tua. Hasil tabungan sampah dapat dimanfaatkan untuk kegiatan kelas hijau, pengadaan bibit tanaman, atau dukungan kegiatan sosial lingkungan sehingga siswa merasakan dampak langsung dari pengelolaan sampah yang konsisten.',
        en: 'Implementation at school is built through collaboration between student council, cleaning teams, homeroom teachers, and parents. Waste savings can support green class activities, seed procurement, or social-environmental projects so students feel direct impact from consistent waste management.',
    },
    'kebun-vertikal': {
        id: 'Penerapan dilakukan di area koridor, halaman sempit, dan sudut kelas sebagai laboratorium hidup. Selain sebagai media belajar, hasil panen dapat digunakan untuk praktik gizi sehat, bazar sekolah, atau program kantin hijau agar program memiliki nilai edukasi sekaligus nilai ekonomi sederhana.',
        en: 'Implementation is carried out in corridors, narrow yards, and classroom corners as living laboratories. Beyond learning media, harvests can be used for healthy nutrition practice, school bazaars, or green canteen initiatives to provide both educational and simple economic value.',
    },
    'hemat-energi': {
        id: 'Penerapan program dijaga lewat sistem piket energi, dashboard pemantauan bulanan, dan tantangan antar kelas. Kebiasaan kecil seperti mematikan lampu saat cahaya cukup, mengatur suhu ruang, serta memaksimalkan ventilasi alami terbukti menurunkan konsumsi listrik sekaligus membangun budaya disiplin energi.',
        en: 'Program implementation is maintained through energy duty rosters, monthly monitoring dashboards, and inter-class challenges. Small habits such as turning off lights in adequate daylight, optimizing room temperature, and maximizing natural ventilation reduce consumption while building an energy-discipline culture.',
    },
    'edukasi-hijau': {
        id: 'Penerapan dilaksanakan melalui proyek tematik per semester, pameran karya lingkungan, dan aksi nyata di sekitar sekolah. Siswa tidak hanya memahami teori, tetapi juga mempraktikkan perilaku berkelanjutan dalam keputusan sehari-hari, mulai dari penggunaan ulang bahan hingga kampanye pengurangan sampah plastik.',
        en: 'Implementation is delivered through semester thematic projects, environmental exhibitions, and real actions around campus. Students do not only understand theory but also practice sustainable behavior in daily decisions, from material reuse to plastic reduction campaigns.',
    },
};

const toolMaterialMap = {
    'bank-sampah': {
        id: {
            tools: ['Timbangan digital/analog', 'Karung atau kontainer terpilah', 'Buku rekap atau spreadsheet', 'Label kategori sampah'],
            materials: ['Sampah anorganik bersih (plastik, kertas, logam)', 'Sampah organik terpilah', 'Stiker kode warna', 'Form setoran siswa'],
        },
        en: {
            tools: ['Digital/analog scale', 'Sorted sacks or containers', 'Logbook or spreadsheet', 'Waste category labels'],
            materials: ['Clean inorganic waste (plastic, paper, metal)', 'Sorted organic waste', 'Color-code stickers', 'Student deposit forms'],
        },
    },
    'kebun-vertikal': {
        id: {
            tools: ['Rak vertikal atau pipa tanam', 'Sprayer/alat siram', 'Gunting kebun', 'Alat ukur pH sederhana'],
            materials: ['Bibit sayur/tanaman obat', 'Media tanam (kompos, sekam, cocopeat)', 'Larutan nutrisi', 'Mulsa atau penahan kelembapan'],
        },
        en: {
            tools: ['Vertical rack or planting pipes', 'Sprayer/watering tools', 'Garden scissors', 'Simple pH meter'],
            materials: ['Vegetable/herbal seeds', 'Growing media (compost, husk, cocopeat)', 'Nutrient solution', 'Mulch or moisture retainers'],
        },
    },
    'hemat-energi': {
        id: {
            tools: ['KWh meter portabel', 'Lembar audit energi', 'Poster pengingat hemat energi', 'Timer atau smart plug'],
            materials: ['Data baseline pemakaian listrik', 'Daftar area prioritas hemat energi', 'Template laporan bulanan', 'Bahan kampanye siswa'],
        },
        en: {
            tools: ['Portable kWh meter', 'Energy audit sheets', 'Energy-saving reminder posters', 'Timers or smart plugs'],
            materials: ['Electricity baseline data', 'Priority-area saving checklist', 'Monthly report templates', 'Student campaign materials'],
        },
    },
    'edukasi-hijau': {
        id: {
            tools: ['Lembar kerja proyek', 'Alat presentasi (proyektor/papan)', 'Perangkat dokumentasi', 'Rubrik penilaian proyek'],
            materials: ['Studi kasus lingkungan lokal', 'Bahan daur ulang untuk karya', 'Poster/infografik edukasi', 'Jurnal refleksi siswa'],
        },
        en: {
            tools: ['Project worksheets', 'Presentation tools (projector/board)', 'Documentation devices', 'Project assessment rubrics'],
            materials: ['Local environmental case studies', 'Recycled materials for projects', 'Educational posters/infographics', 'Student reflection journals'],
        },
    },
};

const fallbackPrograms = [
    { id: 1, title: 'Bank Sampah', title_en: 'Waste Bank', description: 'Program pengelolaan sampah terpadu yang mengajarkan siswa tentang nilai ekonomi dari sampah daur ulang. Siswa belajar memilah, menimbang, dan menghitung nilai jual sampah.', description_en: 'An integrated waste management program that teaches students about the economic value of recyclable waste.', icon: 'recycle', slug: 'bank-sampah', image: imageMap['bank-sampah'] },
    { id: 2, title: 'Kebun Vertikal', title_en: 'Vertical Garden', description: 'Memanfaatkan lahan terbatas dengan teknik pertanian vertikal. Siswa menanam sayuran dan tanaman obat sambil belajar biologi dan kewirausahaan.', description_en: 'Utilizing limited space with vertical farming techniques. Students grow vegetables and medicinal plants.', icon: 'leaf', slug: 'kebun-vertikal', image: imageMap['kebun-vertikal'] },
    { id: 3, title: 'Hemat Energi', title_en: 'Energy Saving', description: 'Kampanye dan implementasi hemat energi di lingkungan sekolah. Mulai dari panel surya mini hingga pemantauan penggunaan listrik harian.', description_en: 'Energy saving campaigns and implementation in the school environment.', icon: 'zap', slug: 'hemat-energi', image: imageMap['hemat-energi'] },
    { id: 4, title: 'Edukasi Hijau', title_en: 'Green Education', description: 'Program pembelajaran lingkungan yang menghadirkan aktivitas kelas, demonstrasi, dan proyek kreatif untuk meningkatkan kesadaran hijau.', description_en: 'Environmental learning program with classroom activities, demonstrations, and creative projects to raise green awareness.', icon: 'book-open', slug: 'edukasi-hijau', image: imageMap['edukasi-hijau'] },
];

export default function Programs() {
    const { t, i18n } = useTranslation();
    const { mode } = useThemeMode();
    const isEn = i18n.language === 'en';
    const [programs, setPrograms] = useState(fallbackPrograms);

    useEffect(() => {
        axios.get('/api/v1/programs')
            .then(res => {
                if (res.data.data?.length > 0) setPrograms(res.data.data);
            })
            .catch(() => {});
    }, []);

    const programList = programs.map(program => ({
        ...program,
        image: program.image || imageMap[program.slug],
    }));

    return (
        <PageWrap className="themed-page programs-page" data-theme-mode={mode}>
            <PageHeader className="theme-hero">
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(var(--rgb-white),0.05)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(var(--rgb-white),0.15)', border: '1px solid rgba(var(--rgb-white),0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-surface)', marginBottom: '16px' }}>
                        {t('programs.title')}
                    </span>
                    <h1 style={{ fontSize: '2.7rem', fontWeight: 900, color: 'var(--color-surface)', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                        {t('programs.title')}
                    </h1>
                    <p style={{ color: 'rgba(var(--rgb-white),0.85)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        {t('programs.subtitle')}
                    </p>
                </div>
            </PageHeader>

            <Content>
                <IntroSection className="scroll-reveal">
                    <IntroMeta>
                        <Sprout size={18} />
                        {t('programs.intro.meta')}
                    </IntroMeta>
                    <IntroTitle>{t('programs.intro.title')}</IntroTitle>
                    <IntroText>
                        {t('programs.intro.description')}
                    </IntroText>
                    <InfoRow>
                        <InfoCard>
                            <InfoCardTitle>{t('programs.intro.cards.why.title')}</InfoCardTitle>
                            <InfoCardText>
                                {t('programs.intro.cards.why.text')}
                            </InfoCardText>
                        </InfoCard>
                        <InfoCard>
                            <InfoCardTitle>{t('programs.intro.cards.what.title')}</InfoCardTitle>
                            <InfoCardText>
                                {t('programs.intro.cards.what.text')}
                            </InfoCardText>
                        </InfoCard>
                        <InfoCard>
                            <InfoCardTitle>{t('programs.intro.cards.next.title')}</InfoCardTitle>
                            <InfoCardText>
                                {t('programs.intro.cards.next.text')}
                            </InfoCardText>
                        </InfoCard>
                    </InfoRow>
                    <SectionCard>
                        <SectionButton to="/program-info">
                            {t('programs.intro.cta')}
                            <ArrowRight size={18} />
                        </SectionButton>
                    </SectionCard>
                </IntroSection>

                {programList.map((program, index) => (
                    <ProgramCard key={program.id} id={program.slug} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardVisual style={{ background: bgMap[program.slug] || 'linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))' }}>
                            {program.image && (
                                <CardImage src={program.image} alt={isEn ? (program.title_en || program.title) : program.title} />
                            )}
                            <CardVisualOverlay />
                            <CardIconWrap>
                                {iconMap[program.icon] || <Sprout size={28} />}
                            </CardIconWrap>
                        </CardVisual>
                        <CardContent>
                            <CardHeader>
                                <div>
                                    <ProgramTitle>{isEn ? (program.title_en || program.title) : program.title}</ProgramTitle>
                                    <ProgramMeta>{t('programs.featured_label')}</ProgramMeta>
                                </div>
                            </CardHeader>
                            <ProgramDesc>{isEn ? (program.description_en || program.description) : program.description}</ProgramDesc>
                            <FeatureList>
                                {((featuresMap[program.slug] || {})[isEn ? 'en' : 'id'] || []).map((feat, fi) => (
                                    <FeatureItem key={fi}>
                                        <Check size={16} />
                                        {feat}
                                    </FeatureItem>
                                ))}
                            </FeatureList>

                            <DetailSection>
                                <DetailHeading>{isEn ? 'Procedure' : 'Prosedur'}</DetailHeading>
                                <DetailText>
                                    {((procedureMap[program.slug] || {})[isEn ? 'en' : 'id']) || (isEn ? 'Procedure details will be updated soon.' : 'Detail prosedur akan diperbarui segera.')}
                                </DetailText>
                            </DetailSection>

                            <DetailSection>
                                <DetailHeading>{isEn ? 'Step-by-Step' : 'Langkah-langkah'}</DetailHeading>
                                <StepList>
                                    {((stepsMap[program.slug] || {})[isEn ? 'en' : 'id'] || []).map((step, si) => (
                                        <li key={si}>{step}</li>
                                    ))}
                                </StepList>
                            </DetailSection>

                            <DetailSection>
                                <DetailHeading>{isEn ? 'Implementation' : 'Penerapan'}</DetailHeading>
                                <DetailText>
                                    {((implementationMap[program.slug] || {})[isEn ? 'en' : 'id']) || (isEn ? 'Implementation details will be updated soon.' : 'Detail penerapan akan diperbarui segera.')}
                                </DetailText>
                            </DetailSection>

                            <DetailSection>
                                <DetailHeading>{isEn ? 'Tools and Materials' : 'Alat dan Bahan'}</DetailHeading>
                                <DetailSubHeading>{isEn ? 'Tools' : 'Alat'}</DetailSubHeading>
                                <DetailList>
                                    {((((toolMaterialMap[program.slug] || {})[isEn ? 'en' : 'id']) || {}).tools || []).map((tool, ti) => (
                                        <li key={`${program.slug}-tool-${ti}`}>{tool}</li>
                                    ))}
                                </DetailList>
                                <DetailSubHeading>{isEn ? 'Materials' : 'Bahan'}</DetailSubHeading>
                                <DetailList>
                                    {((((toolMaterialMap[program.slug] || {})[isEn ? 'en' : 'id']) || {}).materials || []).map((material, mi) => (
                                        <li key={`${program.slug}-material-${mi}`}>{material}</li>
                                    ))}
                                </DetailList>
                            </DetailSection>
                        </CardContent>
                    </ProgramCard>
                ))}
            </Content>
        </PageWrap>
    );
}
