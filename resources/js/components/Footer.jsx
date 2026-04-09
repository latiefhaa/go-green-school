import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '../stitches.config';
import { Leaf, Mail, MapPin, Phone, Send, MessageSquare, Facebook, Instagram, Youtube, Twitter, Globe } from 'lucide-react';

const FooterWrap = styled('footer', {
    background: 'linear-gradient(135deg, #166534 0%, #1a6b1a 50%, #228B22 100%)',
    color: '#ffffff',
    paddingTop: '64px',
});

const FooterGrid = styled('div', {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
    '@sm': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '@lg': { gridTemplateColumns: '2fr 1fr 1fr 1.5fr' },
});

const FooterBrand = styled('div', {});

const BrandLogo = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px',
});

const FooterDesc = styled('p', {
    fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 1.7,
    marginBottom: '24px',
    maxWidth: '280px',
});

const SocialRow = styled('div', {
    display: 'flex',
    gap: '10px',
});

const SocialBtn = styled('a', {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'rgba(255,255,255,0.25)',
        transform: 'translateY(-2px)',
    },
});

const FooterCol = styled('div', {});

const ColTitle = styled('h4', {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid rgba(255,255,255,0.2)',
    display: 'inline-block',
});

const FooterLink = styled(Link, {
    display: 'block',
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    marginBottom: '10px',
    transition: 'all 0.2s ease',
    '&:hover': {
        color: '#ffffff',
        paddingLeft: '6px',
    },
});

const ContactItem = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '14px',
    color: 'rgba(255,255,255,0.75)',
    fontSize: '0.875rem',
    '& svg': {
        flexShrink: 0,
        marginTop: '2px',
        color: '#86efac',
    },
});

const NewsletterForm = styled('form', {
    marginTop: '12px',
});

const NewsletterDesc = styled('p', {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '12px',
    lineHeight: 1.5,
});

const InputRow = styled('div', {
    display: 'flex',
    gap: '8px',
});

const EmailInput = styled('input', {
    flex: 1,
    padding: '10px 16px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.3)',
    background: 'rgba(255,255,255,0.1)',
    color: '#ffffff',
    fontSize: '0.875rem',
    fontFamily: "'Poppins', sans-serif",
    outline: 'none',
    '&::placeholder': {
        color: 'rgba(255,255,255,0.5)',
    },
    '&:focus': {
        borderColor: 'rgba(255,255,255,0.6)',
        background: 'rgba(255,255,255,0.15)',
    },
});

const SubscribeBtn = styled('button', {
    padding: '10px 16px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.4)',
    color: '#ffffff',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '&:hover': {
        background: 'rgba(255,255,255,0.3)',
    },
});

const FooterBottom = styled('div', {
    marginTop: '48px',
    borderTop: '1px solid rgba(255,255,255,0.15)',
    padding: '20px 24px',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    '& p': {
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.65)',
    },
});

const GreenTag = styled('span', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: 'rgba(255,255,255,0.1)',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.8)',
});

export default function Footer() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer>
            <FooterWrap>
                <FooterGrid>
                    <FooterBrand>
                        <BrandLogo>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Leaf size={24} color="#ffffff" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>SMK Karya Bangsa</div>
                                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.75)' }}>{t('tagline')}</div>
                            </div>
                        </BrandLogo>
                        <FooterDesc>{t('footer.description')}</FooterDesc>
                        <SocialRow>
                            <SocialBtn href="https://wa.me/6281549395400?text=Halo%20SMK%20Karya%20Bangsa" target="_blank" rel="noreferrer"><MessageSquare size={16} /></SocialBtn>
                            <SocialBtn href="https://karyabangsa.sch.id" target="_blank" rel="noreferrer"><Instagram size={16} /></SocialBtn>
                            <SocialBtn href="https://karyabangsa.sch.id" target="_blank" rel="noreferrer"><Youtube size={16} /></SocialBtn>
                            <SocialBtn href="https://karyabangsa.sch.id" target="_blank" rel="noreferrer"><Twitter size={16} /></SocialBtn>
                        </SocialRow>
                        <p style={{ marginTop: '12px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>
                            Chat langsung via WhatsApp atau kunjungi Instagram kami.
                        </p>
                    </FooterBrand>

                    <FooterCol>
                        <ColTitle>{t('footer.quick_links')}</ColTitle>
                        <FooterLink to="/">{t('nav.home')}</FooterLink>
                        <FooterLink to="/visi-misi">{t('nav.visi_misi')}</FooterLink>
                        <FooterLink to="/program">{t('nav.program')}</FooterLink>
                        <FooterLink to="/kalkulator-bank-sampah">{t('nav.kalkulator')}</FooterLink>
                        <FooterLink to="/galeri">{t('nav.galeri')}</FooterLink>
                        <FooterLink to="/kontak">{t('nav.kontak')}</FooterLink>
                    </FooterCol>

                    <FooterCol>
                        <ColTitle>{t('footer.contact_us')}</ColTitle>
                        <ContactItem>
                            <MapPin size={15} />
                            <span>{t('footer.address')}</span>
                        </ContactItem>
                        <ContactItem>
                            <Mail size={15} />
                            <span>info@karyabangsa.sch.id</span>
                        </ContactItem>
                        <ContactItem>
                            <Phone size={15} />
                            <span>0815-4939-5400</span>
                        </ContactItem>
                        <ContactItem>
                            <Globe size={15} />
                            <span>karyabangsa.sch.id</span>
                        </ContactItem>
                    </FooterCol>

                    <FooterCol>
                        <ColTitle>{t('footer.newsletter')}</ColTitle>
                        <NewsletterDesc>{t('footer.newsletter_desc')}</NewsletterDesc>
                        {subscribed ? (
                            <div style={{
                                background: 'rgba(255,255,255,0.15)',
                                borderRadius: '10px',
                                padding: '12px 16px',
                                fontSize: '0.875rem',
                                color: '#86efac',
                                fontWeight: 600,
                            }}>
                                ✅ Terima kasih! Kamu berhasil terdaftar.
                            </div>
                        ) : (
                            <NewsletterForm onSubmit={handleSubscribe}>
                                <InputRow>
                                    <EmailInput
                                        type="email"
                                        placeholder={t('footer.email_placeholder')}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <SubscribeBtn type="submit">
                                        <Send size={14} />
                                    </SubscribeBtn>
                                </InputRow>
                                <p style={{ marginTop: '8px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                                    {t('footer.subscribe')} →
                                </p>
                            </NewsletterForm>
                        )}
                    </FooterCol>
                </FooterGrid>

                <div style={{ maxWidth: '1280px', margin: '48px auto 0', padding: '0 24px' }}>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px', paddingBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>{t('footer.copyright')}</p>
                        <GreenTag>
                            <Leaf size={12} />
                            Made with 💚 for the Planet
                        </GreenTag>
                    </div>
                </div>
            </FooterWrap>
        </footer>
    );
}
