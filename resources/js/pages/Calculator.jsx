import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Plus, Trash2, Calculator as CalculatorIcon, Leaf, TrendingDown, Award, RefreshCw, ChevronDown } from 'lucide-react';
import useThemeMode from '../hooks/useThemeMode';
const PageWrap = styled('div', {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, var(--color-surface-muted) 0%, var(--color-surface-muted) 100%)',
    paddingBottom: '64px',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'fixed',
        inset: '0',
        backgroundImage: `radial-gradient(circle at 30% 40%, rgba(var(--rgb-accent),0.04) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(var(--rgb-accent),0.03) 0%, transparent 50%)`,
        pointerEvents: 'none',
        zIndex: 0,
    },
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, var(--color-accent-deep) 0%, var(--color-accent-deep) 40%, var(--color-accent-deep) 100%)',
    padding: '60px 24px 80px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 120px rgba(var(--rgb-black),0.08)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-80px',
        right: '-80px',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'rgba(var(--rgb-white),0.04)',
        zIndex: 0,
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-60px',
        left: '-60px',
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        background: 'rgba(var(--rgb-white),0.05)',
        zIndex: 0,
    },
});

const PageTitle = styled('h1', {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: 'var(--color-surface)',
    marginBottom: '12px',
    animation: `${fadeIn} 0.8s ease forwards`,
    '@lg': { fontSize: '2.8rem' },
});

const PageSubtitle = styled('p', {
    color: 'rgba(var(--rgb-white),0.85)',
    fontSize: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
    animation: `${fadeIn} 0.8s ease 0.2s forwards`,
    opacity: 0,
});

const Content = styled('div', {
    maxWidth: '1100px',
    margin: '-40px auto 0',
    padding: '0 24px',
    position: 'relative',
    zIndex: 2,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    '@lg': { gridTemplateColumns: '1.2fr 1fr' },
    '@sm': { padding: '0 16px' },
});

const Card = styled('div', {
    background: 'rgba(var(--rgb-surface),0.95)',
    borderRadius: '22px',
    boxShadow: '0 18px 50px rgba(var(--rgb-ink),0.08)',
    overflow: 'hidden',
    border: '1px solid rgba(var(--rgb-accent),0.12)',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    animation: `${fadeIn} 0.5s ease forwards`,
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 25px 65px rgba(var(--rgb-ink),0.1)',
    },
});

const CardHeader = styled('div', {
    padding: '24px 26px',
    borderBottom: '1px solid rgba(var(--rgb-accent),0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const CardTitle = styled('h3', {
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--color-text)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& svg': { color: 'var(--color-accent)' },
});

const CardBody = styled('div', {
    padding: '24px',
});

const Label = styled('label', {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--color-text-subtle)',
    marginBottom: '6px',
});

const Input = styled('input', {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1.5px solid var(--color-border)',
    fontSize: '0.9rem',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
    color: 'var(--color-text)',
    '&:focus': {
        borderColor: 'var(--color-accent)',
        boxShadow: '0 0 0 3px rgba(var(--rgb-accent),0.1)',
    },
});

const Select = styled('select', {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1.5px solid var(--color-border)',
    fontSize: '0.9rem',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    color: 'var(--color-text)',
    background: 'var(--color-surface)',
    cursor: 'pointer',
    '&:focus': {
        borderColor: 'var(--color-accent)',
        boxShadow: '0 0 0 3px rgba(var(--rgb-accent),0.1)',
    },
});

const WasteRow = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr auto',
    gap: '10px',
    marginBottom: '12px',
    alignItems: 'end',
    animation: `${fadeIn} 0.3s ease forwards`,
});

const RemoveBtn = styled('button', {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    border: '1.5px solid var(--color-danger-soft)',
    background: 'var(--color-surface-soft)',
    color: 'var(--color-danger)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    flexShrink: 0,
    '&:hover': {
        background: 'var(--color-danger-soft)',
        borderColor: 'var(--color-danger)',
    },
});

const AddBtn = styled('button', {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(var(--rgb-accent),0.06)',
    border: '2px dashed rgba(var(--rgb-accent),0.3)',
    borderRadius: '10px',
    color: 'var(--color-accent)',
    padding: '10px 16px',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 600,
    width: '100%',
    justifyContent: 'center',
    marginTop: '4px',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'rgba(var(--rgb-accent),0.1)',
        borderColor: 'var(--color-accent)',
    },
});

const CalcBtn = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))',
    color: 'var(--color-surface)',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    fontFamily: "'Poppins', sans-serif",
    width: '100%',
    marginTop: '16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(var(--rgb-accent),0.3)',
    '&:hover': {
        background: 'linear-gradient(135deg, var(--color-accent-deep), var(--color-accent-deep))',
        transform: 'translateY(-1px)',
        boxShadow: '0 8px 24px rgba(var(--rgb-accent),0.35)',
    },
    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
        transform: 'none',
    },
});

const ResultCard = styled('div', {
    background: 'linear-gradient(135deg, var(--color-bg-muted), var(--color-surface-muted))',
    border: '1px solid rgba(var(--rgb-accent),0.18)',
    borderRadius: '18px',
    padding: '22px',
    marginBottom: '16px',
    textAlign: 'center',
    animation: `${fadeIn} 0.4s ease forwards`,
});

const BigNumber = styled('div', {
    fontSize: '1.8rem',
    fontWeight: 800,
    color: 'var(--color-accent)',
    marginBottom: '4px',
});

const ResultLabel = styled('div', {
    fontSize: '0.78rem',
    color: 'var(--color-text-muted)',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
});

const TipCard = styled('div', {
    background: 'var(--color-surface-soft)',
    border: '1px solid var(--color-warning-soft)',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '0.8rem',
    color: 'var(--color-warning)',
    lineHeight: 1.5,
    display: 'flex',
    gap: '8px',
    marginBottom: '8px',
});

const COLORS = ['var(--color-accent)', 'var(--color-accent-strong)', 'var(--color-link)', 'var(--color-surface-muted)', 'var(--color-accent-strong)', 'var(--color-accent-deep)'];

const wasteTypes = ['plastik', 'kertas', 'logam', 'kaca', 'organik', 'elektronik'];

const pointMap = {
    plastik: 50,
    kertas: 30,
    logam: 80,
    kaca: 20,
    organik: 10,
    elektronik: 150,
};

const priceMap = pointMap;

const emissionMap = {
    plastik: 2.5,
    kertas: 1.8,
    logam: 4.0,
    kaca: 0.8,
    organik: 0.5,
    elektronik: 6.0,
};

export default function Calculator() {
    const { t, i18n } = useTranslation();
    const { mode } = useThemeMode();
    const isEn = i18n.language === 'en';

    const [studentName, setStudentName] = useState('');
    const [items, setItems] = useState([{ type: 'plastik', weight: '' }]);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('pie');

    const addItem = () => {
        setItems([...items, { type: 'plastik', weight: '' }]);
    };

    const removeItem = (index) => {
        if (items.length === 1) return;
        setItems(items.filter((_, i) => i !== index));
    };

    const updateItem = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    const formatPoints = (num) => {
        return Number(num).toLocaleString('id-ID') + ' Poin';
    };
    const formatRupiah = formatPoints;

    const handleCalculate = () => {
        setError(null);
        setLoading(true);
        setResult(null);

        const validItems = items.filter(item => item.weight && parseFloat(item.weight) > 0);
        if (validItems.length === 0) {
            setError(isEn ? 'Enter at least 1 waste type with weight.' : 'Masukkan berat sampah minimal 1 jenis.');
            setLoading(false);
            return;
        }

        let totalPoints = 0;
        let totalCO2 = 0;
        const breakdown = [];

        for (const item of validItems) {
            const weight = parseFloat(item.weight);
            const pts = weight * (pointMap[item.type] || 0);
            const co2 = weight * (emissionMap[item.type] || 0);
            totalPoints += pts;
            totalCO2 += co2;
            breakdown.push({
                type: item.type,
                weight,
                    price_per_kg: pointMap[item.type] || 0,
                value: pts,
                co2_reduction: co2,
            });
        }

        setResult({
            breakdown,
            total_value: totalPoints,
            total_value_formatted: formatPoints(totalPoints),
            co2_reduction: totalCO2.toFixed(4),
            co2_reduction_formatted: `${totalCO2.toFixed(2)} kg CO2`,
            tips: generateLocalTips(validItems),
        });
        setLoading(false);
    };

    const generateLocalTips = (items) => {
        const tipMap = {
            plastik: {
                id: 'Kurangi plastik sekali pakai! Gunakan botol dan tas belanja yang bisa dipakai ulang.',
                en: 'Reduce single-use plastics! Use reusable bottles and shopping bags.',
            },
            kertas: {
                id: 'Gunakan kertas bolak-balik dan manfaatkan teknologi digital untuk mengurangi penggunaan kertas.',
                en: 'Use paper on both sides and leverage digital technology to reduce paper usage.',
            },
            organik: {
                id: 'Sampah organik bisa diolah menjadi kompos untuk kebun sekolah kita!',
                en: 'Organic waste can be composted for our school garden!',
            },
            logam: { id: 'Logam bisa didaur ulang berkali-kali!', en: 'Metals can be recycled repeatedly!' },
            kaca: { id: 'Kaca 100% dapat didaur ulang.', en: 'Glass is 100% recyclable.' },
            elektronik: { id: 'Sampah elektronik mengandung bahan berbahaya. Buang di tempat e-waste!', en: 'Electronic waste is hazardous. Always use e-waste collection points!' },
        };
        return [...new Set(items.map(i => i.type))].map(type => tipMap[type]).filter(Boolean);
    };

    const resetAll = () => {
        setItems([{ type: 'plastik', weight: '' }]);
        setResult(null);
        setStudentName('');
        setError(null);
    };

    const pieData = result?.breakdown?.map(b => ({
        name: t(`calculator.types.${b.type}`),
        value: b.value,
    })) || [];

    const barData = result?.breakdown?.map(b => ({
        name: t(`calculator.types.${b.type}`),
        co2: b.co2_reduction,
        poin: b.value / 1000,
    })) || [];

    return (
        <PageWrap className="themed-page calculator-page" data-theme-mode={mode}>
            <PageHeader className="scroll-reveal theme-hero">
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(var(--rgb-white),0.15)', border: '1px solid rgba(var(--rgb-white),0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-surface)', marginBottom: '16px' }}>
                        <CalculatorIcon size={14} /> Bank Sampah
                    </span>
                    <PageTitle>{t('calculator.title')}</PageTitle>
                    <PageSubtitle>{t('calculator.subtitle')}</PageSubtitle>
                </div>
            </PageHeader>

            {/* How It Works Banner */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, marginTop: '-40px' }}>
                <div style={{
                    background: 'rgba(var(--rgb-surface),0.94)',
                    border: '1px solid rgba(var(--rgb-accent),0.14)',
                    borderRadius: '24px',
                    padding: '26px 30px',
                    marginBottom: '16px',
                    boxShadow: '0 18px 40px rgba(var(--rgb-ink),0.06)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Leaf size={18} color="var(--color-surface)" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-accent-deep)' }}>
                                {isEn ? 'How does the Waste Bank work?' : 'Bagaimana cara kerja Bank Sampah?'}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                                {isEn ? 'Earn points, protect the environment' : 'Kumpulkan poin, jaga lingkungan'}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                        {[
                            { icon: '1.', title: isEn ? 'Collect at School' : 'Pungut di Sekolah', desc: isEn ? 'Pick up and sort recyclable waste found in the school environment' : 'Pungut & pilah sampah yang ada di lingkungan sekolah' },
                            { icon: '2.', title: isEn ? 'Deposit & Weigh' : 'Setor & Timbang', desc: isEn ? 'Bring the collected waste to the Waste Bank officer for weighing' : 'Bawa sampah pungutanmu ke petugas Bank Sampah untuk ditimbang' },
                            { icon: '3.', title: isEn ? 'Earn Points' : 'Dapat Poin', desc: isEn ? 'Points are credited to your student account based on type & weight' : 'Poin masuk ke rekening siswa sesuai jenis & berat sampah' },
                            { icon: '4.', title: isEn ? 'Real Impact' : 'Dampak Nyata', desc: isEn ? 'Your effort keeps the school clean and reduces CO2 emissions' : 'Usahamu menjaga kebersihan sekolah & mengurangi emisi CO2' },
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '1.4rem', flexShrink: 0 }}>{s.icon}</div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--color-accent-deep)', marginBottom: '2px' }}>{s.title}</div>
                                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '14px', padding: '10px 14px', background: 'rgba(var(--rgb-accent),0.08)', borderRadius: '10px', fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>
                        Note: <strong>{isEn ? 'Simulator only:' : 'Ini adalah simulator:'}</strong> {isEn ? 'Use this to estimate your points before depositing. The more waste you collect from school, the bigger your contribution!' : 'Gunakan ini untuk memperkirakan poinmu sebelum menyetor. Semakin banyak sampah yang kamu pungut di sekolah, semakin besar kontribusimu!'}
                    </div>
                </div>
            </div>

            <Content className="scroll-reveal" style={{ marginTop: '0' }}>
                <div>
                    <Card style={{ marginBottom: '16px' }}>
                        <CardHeader>
                            <CardTitle><CalculatorIcon size={18} />{t('calculator.title')}</CardTitle>
                            {result && (
                                <button onClick={resetAll} style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    background: 'none', border: 'none', color: 'var(--color-text-muted)',
                                    fontSize: '0.8rem', cursor: 'pointer', fontFamily: "'Poppins', sans-serif",
                                }}>
                                    <RefreshCw size={14} /> {t('calculator.reset')}
                                </button>
                            )}
                        </CardHeader>
                        <CardBody>
                            <div style={{ marginBottom: '16px' }}>
                                <Label>{t('calculator.student_name')}</Label>
                                <Input
                                    type="text"
                                    placeholder="Nama kamu..."
                                    value={studentName}
                                    onChange={e => setStudentName(e.target.value)}
                                />
                            </div>

                            <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-subtle)', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Daftar Sampah</span>
                                <span style={{ color: 'var(--color-accent)', fontSize: '0.75rem' }}>
                                    {items.length} item
                                </span>
                            </div>

                            {items.map((item, index) => (
                                <WasteRow key={index}>
                                    <div>
                                        {index === 0 && <Label>{t('calculator.waste_type')}</Label>}
                                        <Select
                                            value={item.type}
                                            onChange={e => updateItem(index, 'type', e.target.value)}
                                        >
                                            {wasteTypes.map(type => (
                                                <option key={type} value={type}>
                                                    {t(`calculator.types.${type}`)} ({pointMap[type]} poin/kg)
                                                </option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div>
                                        {index === 0 && <Label>{t('calculator.weight')}</Label>}
                                        <Input
                                            type="number"
                                            placeholder="0"
                                            min="0.1"
                                            step="0.1"
                                            value={item.weight}
                                            onChange={e => updateItem(index, 'weight', e.target.value)}
                                        />
                                    </div>
                                    <RemoveBtn
                                        onClick={() => removeItem(index)}
                                        disabled={items.length === 1}
                                        style={{ marginTop: index === 0 ? '22px' : 0, opacity: items.length === 1 ? 0.4 : 1 }}
                                    >
                                        <Trash2 size={15} />
                                    </RemoveBtn>
                                </WasteRow>
                            ))}

                            <AddBtn onClick={addItem}>
                                <Plus size={16} />
                                {t('calculator.add_item')}
                            </AddBtn>

                            {error && (
                                <div style={{ marginTop: '12px', padding: '10px 14px', background: 'var(--color-surface-soft)', border: '1px solid var(--color-danger-soft)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--color-danger)' }}>
                                    Warning: {error}
                                </div>
                            )}

                            <CalcBtn onClick={handleCalculate} disabled={loading}>
                                {loading ? (
                                    <><RefreshCw size={18} className="animate-spin" /> Menghitung...</>
                                ) : (
                                    <><CalculatorIcon size={18} /> {t('calculator.calculate')}</>
                                )}
                            </CalcBtn>
                        </CardBody>
                    </Card>

                    {/* Price Reference */}
                    <Card>
                        <CardHeader>
                            <CardTitle><Leaf size={18} />Referensi Poin Sampah</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                                {wasteTypes.map(type => (
                                    <div key={type} style={{
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        padding: '8px 12px', background: 'var(--color-surface-soft)', borderRadius: '8px',
                                        fontSize: '0.8rem',
                                    }}>
                                        <span style={{ fontWeight: 600, color: 'var(--color-text-subtle)' }}>
                                            {t(`calculator.types.${type}`)}
                                        </span>
                                        <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>
                                            {pointMap[type]} poin/kg
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* Results Panel */}
                <div>
                    {!result ? (
                        <Card style={{ textAlign: 'center', padding: '64px 24px' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-surface-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                <CalculatorIcon size={36} color="var(--color-accent)" />
                            </div>
                        <h3 style={{ color: 'var(--color-text)', fontWeight: 700, marginBottom: '8px' }}>
                            {isEn ? 'Ready to Simulate!' : 'Siap Simulasi!'}
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                            {isEn
                                ? 'Enter the type and weight of waste you collected from the school environment, then click "Calculate Now" to see your estimated points and how much CO2 you helped reduce.'
                                : 'Masukkan jenis dan berat sampah yang kamu pungut di lingkungan sekolah, lalu klik "Hitung Sekarang" untuk melihat estimasi poin dan seberapa besar CO2 yang berhasil kamu kurangi.'}
                        </p>
                        </Card>
                    ) : (
                        <>
                            {/* Summary Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                                <ResultCard>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                                        <Award size={24} color="var(--color-accent)" />
                                    </div>
                                    <BigNumber>{result.total_value_formatted}</BigNumber>
                                    <ResultLabel>{t('calculator.total_value')}</ResultLabel>
                                </ResultCard>
                                <ResultCard style={{ background: 'linear-gradient(135deg, var(--color-surface-soft), var(--color-surface-soft))', borderColor: 'rgba(var(--rgb-info),0.2)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                                        <TrendingDown size={24} color="var(--color-info)" />
                                    </div>
                                    <BigNumber style={{ color: 'var(--color-info)' }}>{result.co2_reduction_formatted}</BigNumber>
                                    <ResultLabel>{t('calculator.co2_reduction')}</ResultLabel>
                                </ResultCard>
                            </div>

                            {/* Charts */}
                            <Card style={{ marginBottom: '16px' }}>
                                <CardHeader>
                                    <CardTitle>Visualisasi Data</CardTitle>
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                                        {['pie', 'bar'].map(tab => (
                                            <button key={tab} onClick={() => setActiveTab(tab)} style={{
                                                padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem',
                                                fontWeight: 600, cursor: 'pointer', fontFamily: "'Poppins', sans-serif",
                                                border: activeTab === tab ? '1.5px solid var(--color-accent)' : '1.5px solid var(--color-border)',
                                                background: activeTab === tab ? 'var(--color-accent)' : 'transparent',
                                                color: activeTab === tab ? 'var(--color-surface)' : 'var(--color-text-muted)',
                                                transition: 'all 0.2s',
                                            }}>
                                                {tab === 'pie' ? 'Pie' : 'Bar'}
                                            </button>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardBody style={{ paddingTop: '16px' }}>
                                    {activeTab === 'pie' ? (
                                        <ResponsiveContainer width="100%" height={220}>
                                            <PieChart>
                                                <Pie
                                                    data={pieData}
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={80}
                                                    dataKey="value"
                                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                    labelLine={false}
                                                    fontSize={11}
                                                >
                                                    {pieData.map((_, index) => (
                                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip formatter={(val) => [formatPoints(val), 'Poin']} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    ) : (
                                        <ResponsiveContainer width="100%" height={220}>
                                            <BarChart data={barData}>
                                                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-surface-muted)" />
                                                <XAxis dataKey="name" fontSize={11} tick={{ fill: 'var(--color-text-muted)' }} />
                                                <YAxis fontSize={11} tick={{ fill: 'var(--color-text-muted)' }} />
                                                <Tooltip
                                                    formatter={(val, name) => [
                                                        name === 'co2' ? `${val.toFixed(2)} kg CO2` : formatPoints(val * 1000),
                                                        name === 'co2' ? 'Reduksi CO2' : 'Poin',
                                                    ]}
                                                />
                                                <Bar dataKey="poin" fill="var(--color-accent)" radius={[4, 4, 0, 0]} name="poin" />
                                                <Bar dataKey="co2" fill="var(--color-info)" radius={[4, 4, 0, 0]} name="co2" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    )}
                                </CardBody>
                            </Card>

                            {/* Breakdown */}
                            <Card style={{ marginBottom: '16px' }}>
                                <CardHeader>
                                    <CardTitle>Detail: {t('calculator.breakdown')}</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                                        <table style={{ width: '100%', minWidth: '520px', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                                        <thead>
                                            <tr style={{ background: 'var(--color-surface-soft)' }}>
                                                <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: 'var(--color-text-subtle)', borderRadius: '8px 0 0 8px' }}>Jenis</th>
                                                <th style={{ padding: '8px 12px', textAlign: 'right', fontWeight: 600, color: 'var(--color-text-subtle)' }}>Berat</th>
                                                <th style={{ padding: '8px 12px', textAlign: 'right', fontWeight: 600, color: 'var(--color-text-subtle)' }}>Poin</th>
                                                <th style={{ padding: '8px 12px', textAlign: 'right', fontWeight: 600, color: 'var(--color-text-subtle)', borderRadius: '0 8px 8px 0' }}>CO2</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.breakdown.map((item, i) => (
                                                <tr key={i} style={{ borderBottom: '1px solid var(--color-surface-muted)' }}>
                                                    <td style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--color-text)', textTransform: 'capitalize' }}>
                                                        {t(`calculator.types.${item.type}`)}
                                                    </td>
                                                    <td style={{ padding: '10px 12px', textAlign: 'right', color: 'var(--color-text-muted)' }}>{item.weight} kg</td>
                                                    <td style={{ padding: '10px 12px', textAlign: 'right', color: 'var(--color-accent)', fontWeight: 700 }}>
                                                        {Number(item.value).toLocaleString('id-ID')} Poin
                                                    </td>
                                                    <td style={{ padding: '10px 12px', textAlign: 'right', color: 'var(--color-info)', fontWeight: 600 }}>
                                                        {Number(item.co2_reduction).toFixed(2)} kg
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        </table>
                                    </div>
                                </CardBody>
                            </Card>

                            {/* Tips */}
                            {result.tips?.length > 0 && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle><Leaf size={18} />{t('calculator.tips')}</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        {result.tips.map((tip, i) => (
                                            <TipCard key={i}>
                                                <span style={{ fontSize: '1rem' }}>Tip:</span>
                                                <span>{isEn ? (tip.en || tip.id) : tip.id}</span>
                                            </TipCard>
                                        ))}
                                    </CardBody>
                                </Card>
                            )}
                        </>
                    )}
                </div>
            </Content>
        </PageWrap>
    );
}
