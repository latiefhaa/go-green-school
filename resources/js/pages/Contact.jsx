import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled, fadeIn } from '../stitches.config';
import { MapPin, Phone, Send, MessageCircle, CheckCircle, Globe, MessageSquare, Music2 } from 'lucide-react';
import useThemeMode from '../hooks/useThemeMode';

const PageWrap = styled('div', {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, var(--color-bg-muted) 0%, var(--color-bg-muted) 55%, var(--color-surface) 100%)',
    paddingBottom: '80px',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 12% 20%, rgba(var(--rgb-accent),0.12) 0%, transparent 28%), radial-gradient(circle at 86% 12%, rgba(var(--rgb-info),0.11) 0%, transparent 22%), radial-gradient(circle at 76% 74%, rgba(var(--rgb-warning),0.1) 0%, transparent 20%)',
        zIndex: 0,
    },
});

const PageHeader = styled('div', {
    background: 'linear-gradient(135deg, var(--color-accent-deep), var(--color-accent-strong))',
    padding: '60px 24px 80px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
});

const Content = styled('div', {
    maxWidth: '900px',
    margin: '-40px auto 0',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    '@lg': { gridTemplateColumns: '1fr 1.4fr' },
});

const SocialActionRow = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '12px',
    marginTop: '20px',
});

const SocialAction = styled('a', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textDecoration: 'none',
    borderRadius: '14px',
    padding: '12px 16px',
    fontWeight: 700,
    fontSize: '0.9rem',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
    },
    variants: {
        variant: {
            whatsapp: {
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))',
                color: 'var(--color-surface)',
                boxShadow: '0 10px 24px rgba(var(--rgb-accent-strong),0.28)',
            },
            tiktok: {
                background: 'linear-gradient(135deg, var(--color-bg-soft), var(--color-bg-elevated))',
                color: 'var(--color-surface)',
                boxShadow: '0 10px 24px rgba(var(--rgb-ink),0.28)',
            },
        },
    },
});

const InfoCard = styled('div', {
    background: 'var(--color-surface)',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 8px 32px rgba(var(--rgb-black),0.06)',
    border: '1px solid rgba(var(--rgb-accent),0.06)',
    animation: `${fadeIn} 0.6s ease forwards`,
});

const FormCard = styled('div', {
    background: 'var(--color-surface)',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 8px 32px rgba(var(--rgb-black),0.06)',
    border: '1px solid rgba(var(--rgb-accent),0.06)',
    animation: `${fadeIn} 0.6s 0.1s ease both`,
});

const InfoItem = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '16px 0',
    borderBottom: '1px solid var(--color-surface-muted)',
    '&:last-child': { borderBottom: 'none' },
});

const InfoIcon = styled('div', {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'rgba(var(--rgb-accent),0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    '& svg': { color: 'var(--color-accent)' },
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
    padding: '11px 14px',
    borderRadius: '10px',
    border: '1.5px solid var(--color-border)',
    fontSize: '0.9rem',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    color: 'var(--color-text)',
    marginBottom: '16px',
    transition: 'border-color 0.2s',
    '&:focus': {
        borderColor: 'var(--color-accent)',
        boxShadow: '0 0 0 3px rgba(var(--rgb-accent),0.1)',
    },
});

const Textarea = styled('textarea', {
    width: '100%',
    padding: '11px 14px',
    borderRadius: '10px',
    border: '1.5px solid var(--color-border)',
    fontSize: '0.9rem',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    color: 'var(--color-text)',
    minHeight: '140px',
    resize: 'vertical',
    marginBottom: '16px',
    transition: 'border-color 0.2s',
    '&:focus': {
        borderColor: 'var(--color-accent)',
        boxShadow: '0 0 0 3px rgba(var(--rgb-accent),0.1)',
    },
});

const SendBtn = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))',
    color: 'var(--color-surface)',
    padding: '12px 28px',
    borderRadius: '50px',
    fontWeight: 700,
    fontSize: '0.95rem',
    cursor: 'pointer',
    border: 'none',
    fontFamily: "'Poppins', sans-serif",
    width: '100%',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(var(--rgb-accent),0.3)',
    '&:hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0 8px 24px rgba(var(--rgb-accent),0.35)',
    },
    '&:disabled': { opacity: 0.6, cursor: 'not-allowed' },
});

export default function Contact() {
    const { t } = useTranslation();
    const { mode } = useThemeMode();
    const [form, setForm] = useState({ name: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSent(true);
            setForm({ name: '', message: '' });
        }, 1500);
    };

    return (
        <PageWrap className="themed-page contact-page" data-theme-mode={mode}>
            <PageHeader className="theme-hero">
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(var(--rgb-white),0.05)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(var(--rgb-white),0.15)', border: '1px solid rgba(var(--rgb-white),0.3)', borderRadius: '20px', padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-surface)', marginBottom: '16px' }}>
                        <MessageCircle size={14} /> {t('contact.title')}
                    </span>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-surface)', marginBottom: '12px' }}>{t('contact.title')}</h1>
                    <p style={{ color: 'rgba(var(--rgb-white),0.85)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>{t('contact.subtitle')}</p>
                </div>
            </PageHeader>

            <Content className="scroll-reveal">
                <InfoCard>
                    <h3 style={{ fontWeight: 700, color: 'var(--color-text)', marginBottom: '20px', fontSize: '1.1rem' }}>
                        {t('contact.info_title')}
                    </h3>
                    <InfoItem>
                        <InfoIcon><MapPin size={20} /></InfoIcon>
                        <div>
                            <div style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '2px' }}>{t('contact.info_address')}</div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{t('footer.address')}</div>
                        </div>
                    </InfoItem>
                    <InfoItem>
                        <InfoIcon><Phone size={20} /></InfoIcon>
                        <div>
                            <div style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '2px' }}>{t('contact.info_phone')}</div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>0815-4939-5400</div>
                        </div>
                    </InfoItem>
                    <InfoItem>
                        <InfoIcon><Globe size={20} /></InfoIcon>
                        <div>
                            <div style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '2px' }}>{t('contact.info_web')}</div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>https://karyabangsa.sch.id</div>
                        </div>
                    </InfoItem>

                    <SocialActionRow>
                        <SocialAction variant="whatsapp" href="https://wa.me/6281549395400?text=Halo%20Go%20Green%20School" target="_blank" rel="noreferrer">
                            <MessageSquare size={18} />
                            {t('contact.whatsapp_cta')}
                        </SocialAction>
                        <SocialAction variant="tiktok" href="https://www.tiktok.com/@ecolegacy.id_" target="_blank" rel="noreferrer">
                            <Music2 size={18} />
                            {t('contact.tiktok_cta')}
                        </SocialAction>
                    </SocialActionRow>

                    {/* Map placeholder */}
                    <div style={{
                        marginTop: '20px',
                        height: '160px',
                        background: 'linear-gradient(135deg, var(--color-surface-muted), var(--color-surface-muted))',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: '1px solid rgba(var(--rgb-accent),0.15)',
                        flexDirection: 'column',
                        gap: '8px',
                    }}>
                        <MapPin size={28} />
                        {t('contact.map_label')}
                    </div>
                </InfoCard>

                <FormCard className="scroll-reveal">
                    <h3 style={{ fontWeight: 700, color: 'var(--color-text)', marginBottom: '24px', fontSize: '1.1rem' }}>
                        {t('contact.form_title')}
                    </h3>

                    {sent ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '40px 24px',
                            background: 'var(--color-surface-muted)',
                            borderRadius: '16px',
                            border: '1px solid rgba(var(--rgb-accent),0.2)',
                        }}>
                            <CheckCircle size={48} color="var(--color-accent)" style={{ margin: '0 auto 16px', display: 'block' }} />
                            <h4 style={{ fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>{t('contact.success_title')}</h4>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{t('contact.success_text')}</p>
                            <button
                                onClick={() => setSent(false)}
                                style={{ marginTop: '16px', background: 'var(--color-accent)', color: 'white', border: 'none', borderRadius: '20px', padding: '8px 20px', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.85rem' }}
                            >
                                {t('contact.send_another')}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <Label>{t('contact.name')}</Label>
                            <Input
                                type="text"
                                placeholder={t('contact.name_placeholder')}
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                required
                            />
                            <Label>{t('contact.message')}</Label>
                            <Textarea
                                placeholder={t('contact.message_placeholder')}
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                required
                            />
                            <SendBtn type="submit" disabled={sending}>
                                <Send size={16} />
                                {sending ? t('contact.sending') : t('contact.send')}
                            </SendBtn>
                        </form>
                    )}
                </FormCard>
            </Content>
        </PageWrap>
    );
}
