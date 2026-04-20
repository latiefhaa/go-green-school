import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '../stitches.config';
import { Leaf, Mail, MapPin, Phone, MessageSquare, Instagram, Youtube, Music2, Globe } from 'lucide-react';
import useThemeMode from '../hooks/useThemeMode';

const FooterWrap = styled('footer', {
    background: 'linear-gradient(135deg, var(--color-accent-deep) 0%, var(--color-accent-deep) 50%, var(--color-accent) 100%)',
    color: 'var(--color-surface)',
    paddingTop: '64px',
    variants: {
        mode: {
            dark: {
                background: 'linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-soft) 50%, var(--color-bg-elevated) 100%)',
                borderTop: '1px solid rgba(var(--rgb-slate),0.22)',
            },
        },
    },
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
    color: 'rgba(var(--rgb-white),0.75)',
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
    background: 'rgba(var(--rgb-white),0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-surface)',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'rgba(var(--rgb-white),0.25)',
        transform: 'translateY(-2px)',
    },
});

const FooterCol = styled('div', {});

const ColTitle = styled('h4', {
    fontSize: '1rem',
    fontWeight: 700,
    color: 'var(--color-surface)',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid rgba(var(--rgb-white),0.2)',
    display: 'inline-block',
});

const FooterLink = styled(Link, {
    display: 'block',
    color: 'rgba(var(--rgb-white),0.75)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    marginBottom: '10px',
    transition: 'all 0.2s ease',
    '&:hover': {
        color: 'var(--color-surface)',
        paddingLeft: '6px',
    },
});

const ContactItem = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '14px',
    color: 'rgba(var(--rgb-white),0.75)',
    fontSize: '0.875rem',
    '& svg': {
        flexShrink: 0,
        marginTop: '2px',
        color: 'var(--color-link)',
    },
});

const ContactCtaText = styled('p', {
    fontSize: '0.84rem',
    color: 'rgba(var(--rgb-white),0.74)',
    marginBottom: '14px',
    lineHeight: 1.6,
});

const ContactCtaRow = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
});

const FooterBottom = styled('div', {
    marginTop: '48px',
    borderTop: '1px solid rgba(var(--rgb-white),0.15)',
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
        color: 'rgba(var(--rgb-white),0.65)',
    },
});

const GreenTag = styled('span', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: 'rgba(var(--rgb-white),0.1)',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    color: 'rgba(var(--rgb-white),0.8)',
});

export default function Footer() {
    const { t } = useTranslation();
    const { mode } = useThemeMode();

    return (
        <footer className="themed-footer" data-theme-mode={mode}>
            <FooterWrap mode={mode === 'dark' ? 'dark' : undefined}>
                <FooterGrid>
                    <FooterBrand>
                        <BrandLogo>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '12px',
                                background: 'rgba(var(--rgb-white),0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Leaf size={24} color="var(--color-surface)" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-surface)' }}>Go Green School</div>
                                <div style={{ fontSize: '0.72rem', color: 'rgba(var(--rgb-white),0.75)' }}>{t('tagline')}</div>
                            </div>
                        </BrandLogo>
                        <FooterDesc>{t('footer.description')}</FooterDesc>
                        <SocialRow>
                            <SocialBtn href="https://wa.me/6281549395400?text=Halo%20Go%20Green%20School" target="_blank" rel="noreferrer"><MessageSquare size={16} /></SocialBtn>
                            <SocialBtn href="https://karyabangsa.sch.id" target="_blank" rel="noreferrer"><Instagram size={16} /></SocialBtn>
                            <SocialBtn href="https://karyabangsa.sch.id" target="_blank" rel="noreferrer"><Youtube size={16} /></SocialBtn>
                            <SocialBtn href="https://www.tiktok.com/@ecolegacy.id_" target="_blank" rel="noreferrer" title="TikTok @ecolegacy.id_"><Music2 size={16} /></SocialBtn>
                        </SocialRow>
                        <p style={{ marginTop: '12px', fontSize: '0.8rem', color: 'rgba(var(--rgb-white),0.75)' }}>
                            {t('footer.social_note')}
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
                        <ContactItem>
                            <Music2 size={15} />
                            <a href="https://www.tiktok.com/@ecolegacy.id_" target="_blank" rel="noreferrer" style={{ color: 'rgba(var(--rgb-white),0.82)', textDecoration: 'none' }}>
                                @ecolegacy.id_
                            </a>
                        </ContactItem>
                    </FooterCol>

                    <FooterCol>
                        <ColTitle>{t('footer.contact_us')}</ColTitle>
                        <ContactCtaText>{t('footer.social_note')}</ContactCtaText>
                        <ContactCtaRow>
                            <SocialBtn href="https://wa.me/6281549395400?text=Halo%20Go%20Green%20School" target="_blank" rel="noreferrer" title="WhatsApp">
                                <MessageSquare size={16} />
                            </SocialBtn>
                            <SocialBtn href="https://www.tiktok.com/@ecolegacy.id_" target="_blank" rel="noreferrer" title="TikTok @ecolegacy.id_">
                                <Music2 size={16} />
                            </SocialBtn>
                        </ContactCtaRow>
                    </FooterCol>
                </FooterGrid>

                <div style={{ maxWidth: '1280px', margin: '48px auto 0', padding: '0 24px' }}>
                    <div style={{ borderTop: '1px solid rgba(var(--rgb-white),0.15)', paddingTop: '20px', paddingBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(var(--rgb-white),0.65)' }}>{t('footer.copyright')}</p>
                        <GreenTag>
                            <Leaf size={12} />
                            Made with love for the Planet
                        </GreenTag>
                    </div>
                </div>
            </FooterWrap>
        </footer>
    );
}
