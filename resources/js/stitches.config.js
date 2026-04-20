import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            greenPrimary: 'var(--color-accent)',
            greenDark: 'var(--color-accent-deep)',
            greenLight: 'var(--color-accent-strong)',
            greenBg: 'var(--color-bg-muted)',
            green50: 'var(--color-surface-muted)',
            green100: 'var(--color-surface-muted)',
            green200: 'var(--color-surface-muted)',
            green300: 'var(--color-link)',
            green400: 'var(--color-accent-strong)',
            green500: 'var(--color-accent-strong)',
            green600: 'var(--color-accent-strong)',
            green700: 'var(--color-accent-deep)',
            green800: 'var(--color-accent-deep)',
            green900: 'var(--color-accent-deep)',
            white: 'var(--color-surface)',
            gray50: 'var(--color-surface-soft)',
            gray100: 'var(--color-surface-soft)',
            gray200: 'var(--color-border)',
            gray300: 'var(--color-border)',
            gray400: 'var(--color-text-muted)',
            gray500: 'var(--color-text-muted)',
            gray600: 'var(--color-text-subtle)',
            gray700: 'var(--color-text-subtle)',
            gray800: 'var(--color-text)',
            gray900: 'var(--color-text-strong)',
            text: 'var(--color-text)',
            textLight: 'var(--color-text-muted)',
        },
        space: {
            1: '4px',
            2: '8px',
            3: '12px',
            4: '16px',
            5: '20px',
            6: '24px',
            8: '32px',
            10: '40px',
            12: '48px',
            16: '64px',
            20: '80px',
        },
        fontSizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
        },
        fonts: {
            sans: "'Nunito', sans-serif",
            display: "'Fredoka', 'Nunito', sans-serif",
        },
        fontWeights: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },
        radii: {
            sm: '4px',
            md: '8px',
            lg: '12px',
            xl: '16px',
            '2xl': '24px',
            full: '9999px',
        },
        shadows: {
            sm: '0 1px 2px 0 rgba(var(--rgb-black), 0.05)',
            md: '0 4px 6px -1px rgba(var(--rgb-black), 0.1), 0 2px 4px -2px rgba(var(--rgb-black), 0.1)',
            lg: '0 10px 15px -3px rgba(var(--rgb-black), 0.1), 0 4px 6px -4px rgba(var(--rgb-black), 0.1)',
            xl: '0 20px 25px -5px rgba(var(--rgb-black), 0.1), 0 8px 10px -6px rgba(var(--rgb-black), 0.1)',
        },
        transitions: {
            fast: 'all 0.15s ease',
            normal: 'all 0.3s ease',
            slow: 'all 0.5s ease',
        },
    },
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1280px)',
    },
    utils: {
        mx: (value) => ({ marginLeft: value, marginRight: value }),
        my: (value) => ({ marginTop: value, marginBottom: value }),
        px: (value) => ({ paddingLeft: value, paddingRight: value }),
        py: (value) => ({ paddingTop: value, paddingBottom: value }),
        size: (value) => ({ width: value, height: value }),
    },
});

export const fadeIn = keyframes({
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const fadeInLeft = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-30px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const fadeInRight = keyframes({
    '0%': { opacity: 0, transform: 'translateX(30px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const pulse = keyframes({
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
});

export const float = keyframes({
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
});
