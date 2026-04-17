import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Plus, Trash2, Calculator as CalculatorIcon, Leaf, TrendingDown, Award, RefreshCw, ChevronDown } from 'lucide-react';
const PageWrap = styled('div', {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #d7efda 0%, #bddfbe 100%)',
    paddingBottom: '64px',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'fixed',
        inset: '0',
        backgroundImage: `radial-gradient(circle at 30% 40%, rgba(34,139,34,0.04) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(34,139,34,0.03) 0%, transparent 50%)`,
        pointerEvents: 'none',
        zIndex: 0,
    },
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, #13400f 0%, #165228 40%, #1f6f1f 100%)',
    padding: '60px 24px 80px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 120px rgba(0,0,0,0.08)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-80px',
        right: '-80px',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)',
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
        background: 'rgba(255,255,255,0.05)',
        zIndex: 0,
    },
});

const PageTitle = styled('h1', {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#ffffff',
    marginBottom: '12px',
    animation: `${fadeIn} 0.8s ease forwards`,
    '@lg': { fontSize: '2.8rem' },
});

const PageSubtitle = styled('p', {
    color: 'rgba(255,255,255,0.85)',
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
});

const Card = styled('div', {
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '22px',
    boxShadow: '0 18px 50px rgba(15,23,42,0.08)',
    overflow: 'hidden',
    border: '1px solid rgba(34,139,34,0.12)',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    animation: `${fadeIn} 0.5s ease forwards`,
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 25px 65px rgba(15,23,42,0.1)',
    },
});

const CardHeader = styled('div', {
    padding: '24px 26px',
    borderBottom: '1px solid rgba(34,139,34,0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const CardTitle = styled('h3', {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1f2937',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& svg': { color: '#228B22' },
});

const CardBody = styled('div', {
    padding: '24px',
});

const Label = styled('label', {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '6px',
});

const Input = styled('input', {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1.5px solid #e5e7eb',
    fontSize: '0.9rem',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
    color: '#1f2937',
    '&:focus': {
        borderColor: '#228B22',
        boxShadow: '0 0 0 3px rgba(34,139,34,0.1)',
    },
});

const Select = styled('select', {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1.5px solid #e5e7eb',
    fontSize: '0.9rem',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    color: '#1f2937',
    background: '#ffffff',
    cursor: 'pointer',
    '&:focus': {
        borderColor: '#228B22',
        boxShadow: '0 0 0 3px rgba(34,139,34,0.1)',
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
    border: '1.5px solid #fecaca',
    background: '#fff5f5',
    color: '#ef4444',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    flexShrink: 0,
    '&:hover': {
        background: '#fee2e2',
        borderColor: '#ef4444',
    },
});

const AddBtn = styled('button', {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(34,139,34,0.06)',
    border: '2px dashed rgba(34,139,34,0.3)',
    borderRadius: '10px',
    color: '#228B22',
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
        background: 'rgba(34,139,34,0.1)',
        borderColor: '#228B22',
    },
});

const CalcBtn = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    background: 'linear-gradient(135deg, #228B22, #16a34a)',
    color: '#ffffff',
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
    boxShadow: '0 4px 16px rgba(34,139,34,0.3)',
    '&:hover': {
        background: 'linear-gradient(135deg, #1a6b1a, #1a8a3a)',
        transform: 'translateY(-1px)',
        boxShadow: '0 8px 24px rgba(34,139,34,0.35)',
    },
    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
        transform: 'none',
    },
});

const ResultCard = styled('div', {
    background: 'linear-gradient(135deg, #effbf0, #d8f0d8)',
    border: '1px solid rgba(34,139,34,0.18)',
    borderRadius: '18px',
    padding: '22px',
    marginBottom: '16px',
    textAlign: 'center',
    animation: `${fadeIn} 0.4s ease forwards`,
});

const BigNumber = styled('div', {
    fontSize: '1.8rem',
    fontWeight: 800,
    color: '#228B22',
    marginBottom: '4px',
});

const ResultLabel = styled('div', {
    fontSize: '0.78rem',
    color: '#6b7280',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
});

const TipCard = styled('div', {
    background: '#fffbeb',
    border: '1px solid #fde68a',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '0.8rem',
    color: '#92400e',
    lineHeight: 1.5,
    display: 'flex',
    gap: '8px',
    marginBottom: '8px',
});

const COLORS = ['#228B22', '#4ade80', '#86efac', '#bbf7d0', '#16a34a', '#15803d'];

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
            co2_reduction_formatted: `${totalCO2.toFixed(2)} kg CO₂`,
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
        <PageWrap>
            <PageHeader className="scroll-reveal">
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: '#ffffff', marginBottom: '16px' }}>
                        <CalculatorIcon size={14} /> Bank Sampah
                    </span>
                    <PageTitle>{t('calculator.title')}</PageTitle>
                    <PageSubtitle>{t('calculator.subtitle')}</PageSubtitle>
                </div>
            </PageHeader>

            {/* How It Works Banner */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, marginTop: '-40px' }}>
                <div style={{
                    background: 'rgba(255,255,255,0.94)',
                    border: '1px solid rgba(34,139,34,0.14)',
                    borderRadius: '24px',
                    padding: '26px 30px',
                    marginBottom: '16px',
                    boxShadow: '0 18px 40px rgba(15,23,42,0.06)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#228B22', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Leaf size={18} color="#fff" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#166534' }}>
                                {isEn ? 'How does the Waste Bank work?' : 'Bagaimana cara kerja Bank Sampah?'}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                {isEn ? 'Earn points, protect the environment' : 'Kumpulkan poin, jaga lingkungan'}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                        {[
                            { icon: '🏫', title: isEn ? 'Collect at School' : 'Pungut di Sekolah', desc: isEn ? 'Pick up and sort recyclable waste found in the school environment' : 'Pungut & pilah sampah yang ada di lingkungan sekolah' },
                            { icon: '⚖️', title: isEn ? 'Deposit & Weigh' : 'Setor & Timbang', desc: isEn ? 'Bring the collected waste to the Waste Bank officer for weighing' : 'Bawa sampah pungutanmu ke petugas Bank Sampah untuk ditimbang' },
                            { icon: '🏆', title: isEn ? 'Earn Points' : 'Dapat Poin', desc: isEn ? 'Points are credited to your student account based on type & weight' : 'Poin masuk ke rekening siswa sesuai jenis & berat sampah' },
                            { icon: '🌱', title: isEn ? 'Real Impact' : 'Dampak Nyata', desc: isEn ? 'Your effort keeps the school clean and reduces CO₂ emissions' : 'Usahamu menjaga kebersihan sekolah & mengurangi emisi CO₂' },
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '1.4rem', flexShrink: 0 }}>{s.icon}</div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#166534', marginBottom: '2px' }}>{s.title}</div>
                                    <div style={{ fontSize: '0.72rem', color: '#6b7280', lineHeight: 1.45 }}>{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '14px', padding: '10px 14px', background: 'rgba(34,139,34,0.08)', borderRadius: '10px', fontSize: '0.78rem', color: '#374151' }}>
                        💡 <strong>{isEn ? 'Simulator only:' : 'Ini adalah simulator:'}</strong> {isEn ? 'Use this to estimate your points before depositing. The more waste you collect from school, the bigger your contribution!' : 'Gunakan ini untuk memperkirakan poinmu sebelum menyetor. Semakin banyak sampah yang kamu pungut di sekolah, semakin besar kontribusimu!'}
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
                                    background: 'none', border: 'none', color: '#6b7280',
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

                            <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '0.85rem', color: '#374151', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Daftar Sampah</span>
                                <span style={{ color: '#228B22', fontSize: '0.75rem' }}>
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
                                <div style={{ marginTop: '12px', padding: '10px 14px', background: '#fff5f5', border: '1px solid #fecaca', borderRadius: '8px', fontSize: '0.85rem', color: '#ef4444' }}>
                                    ⚠️ {error}
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
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                                {wasteTypes.map(type => (
                                    <div key={type} style={{
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        padding: '8px 12px', background: '#f9fafb', borderRadius: '8px',
                                        fontSize: '0.8rem',
                                    }}>
                                        <span style={{ fontWeight: 600, color: '#374151' }}>
                                            {t(`calculator.types.${type}`)}
                                        </span>
                                        <span style={{ color: '#228B22', fontWeight: 700 }}>
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
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                <CalculatorIcon size={36} color="#228B22" />
                            </div>
                        <h3 style={{ color: '#1f2937', fontWeight: 700, marginBottom: '8px' }}>
                            {isEn ? 'Ready to Simulate!' : 'Siap Simulasi!'}
                        </h3>
                        <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6 }}>
                            {isEn
                                ? 'Enter the type and weight of waste you collected from the school environment, then click "Calculate Now" to see your estimated points and how much CO₂ you helped reduce.'
                                : 'Masukkan jenis dan berat sampah yang kamu pungut di lingkungan sekolah, lalu klik "Hitung Sekarang" untuk melihat estimasi poin dan seberapa besar CO₂ yang berhasil kamu kurangi.'}
                        </p>
                        </Card>
                    ) : (
                        <>
                            {/* Summary Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                                <ResultCard>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                                        <Award size={24} color="#228B22" />
                                    </div>
                                    <BigNumber>{result.total_value_formatted}</BigNumber>
                                    <ResultLabel>{t('calculator.total_value')}</ResultLabel>
                                </ResultCard>
                                <ResultCard style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', borderColor: 'rgba(14,165,233,0.2)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                                        <TrendingDown size={24} color="#0ea5e9" />
                                    </div>
                                    <BigNumber style={{ color: '#0ea5e9' }}>{result.co2_reduction_formatted}</BigNumber>
                                    <ResultLabel>{t('calculator.co2_reduction')}</ResultLabel>
                                </ResultCard>
                            </div>

                            {/* Charts */}
                            <Card style={{ marginBottom: '16px' }}>
                                <CardHeader>
                                    <CardTitle>📊 Visualisasi Data</CardTitle>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {['pie', 'bar'].map(tab => (
                                            <button key={tab} onClick={() => setActiveTab(tab)} style={{
                                                padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem',
                                                fontWeight: 600, cursor: 'pointer', fontFamily: "'Poppins', sans-serif",
                                                border: activeTab === tab ? '1.5px solid #228B22' : '1.5px solid #e5e7eb',
                                                background: activeTab === tab ? '#228B22' : 'transparent',
                                                color: activeTab === tab ? '#ffffff' : '#6b7280',
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
                                                <CartesianGrid strokeDasharray="3 3" stroke="#f0fdf4" />
                                                <XAxis dataKey="name" fontSize={11} tick={{ fill: '#6b7280' }} />
                                                <YAxis fontSize={11} tick={{ fill: '#6b7280' }} />
                                                <Tooltip
                                                    formatter={(val, name) => [
                                                        name === 'co2' ? `${val.toFixed(2)} kg CO₂` : formatPoints(val * 1000),
                                                        name === 'co2' ? 'Reduksi CO₂' : 'Poin',
                                                    ]}
                                                />
                                                <Bar dataKey="poin" fill="#228B22" radius={[4, 4, 0, 0]} name="poin" />
                                                <Bar dataKey="co2" fill="#0ea5e9" radius={[4, 4, 0, 0]} name="co2" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    )}
                                </CardBody>
                            </Card>

                            {/* Breakdown */}
                            <Card style={{ marginBottom: '16px' }}>
                                <CardHeader>
                                    <CardTitle>📋 {t('calculator.breakdown')}</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                                        <thead>
                                            <tr style={{ background: '#f9fafb' }}>
                                                <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#374151', borderRadius: '8px 0 0 8px' }}>Jenis</th>
                                                <th style={{ padding: '8px 12px', textAlign: 'right', fontWeight: 600, color: '#374151' }}>Berat</th>
                                                <th style={{ padding: '8px 12px', textAlign: 'right', fontWeight: 600, color: '#374151' }}>Poin</th>
                                                <th style={{ padding: '8px 12px', textAlign: 'right', fontWeight: 600, color: '#374151', borderRadius: '0 8px 8px 0' }}>CO₂</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.breakdown.map((item, i) => (
                                                <tr key={i} style={{ borderBottom: '1px solid #f0fdf4' }}>
                                                    <td style={{ padding: '10px 12px', fontWeight: 600, color: '#1f2937', textTransform: 'capitalize' }}>
                                                        {t(`calculator.types.${item.type}`)}
                                                    </td>
                                                    <td style={{ padding: '10px 12px', textAlign: 'right', color: '#6b7280' }}>{item.weight} kg</td>
                                                    <td style={{ padding: '10px 12px', textAlign: 'right', color: '#228B22', fontWeight: 700 }}>
                                                        {Number(item.value).toLocaleString('id-ID')} Poin
                                                    </td>
                                                    <td style={{ padding: '10px 12px', textAlign: 'right', color: '#0ea5e9', fontWeight: 600 }}>
                                                        {Number(item.co2_reduction).toFixed(2)} kg
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
                                                <span style={{ fontSize: '1rem' }}>💡</span>
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
