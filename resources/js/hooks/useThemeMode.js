import { useEffect, useState } from 'react';

export default function useThemeMode() {
    const [mode, setMode] = useState(() => localStorage.getItem('dashboard_theme_mode') || 'light');

    useEffect(() => {
        const syncMode = (nextMode) => {
            const normalized = nextMode === 'dark' ? 'dark' : 'light';
            setMode(normalized);
        };

        const onThemeChange = (event) => {
            const nextMode = event?.detail?.mode || localStorage.getItem('dashboard_theme_mode') || 'light';
            syncMode(nextMode);
        };

        const onStorageChange = (event) => {
            if (event.key === 'dashboard_theme_mode') {
                syncMode(event.newValue || 'light');
            }
        };

        window.addEventListener('ggs-theme-mode-change', onThemeChange);
        window.addEventListener('storage', onStorageChange);

        syncMode(localStorage.getItem('dashboard_theme_mode') || 'light');

        return () => {
            window.removeEventListener('ggs-theme-mode-change', onThemeChange);
            window.removeEventListener('storage', onStorageChange);
        };
    }, []);

    return { mode, isDarkMode: mode === 'dark' };
}
