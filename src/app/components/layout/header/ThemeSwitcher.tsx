'use client';

import { Button } from '@/components/ui';
import MoonIcon from '@/assets/icons/24/moon.svg';
import SunIcon from '@/assets/icons/24/sun.svg';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [setIsMounted]);

    if (!isMounted) {
        return (
            <Button
                size="icon"
                aria-label="Theme switcher"
                className="bg-transparent w-8 h-8 2xl:w-12 2xl:h-12"
                key="placeholder"
            />
        );
    }
    const handleChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <Button
            size="icon"
            aria-label="Theme switcher"
            className="bg-transparent hover:bg-transparent w-8 h-8 2xl:w-12 2xl:h-12"
            onClick={handleChangeTheme}
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
}
