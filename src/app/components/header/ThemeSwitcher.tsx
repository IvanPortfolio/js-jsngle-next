'use client';
import { Button } from '@/components/ui/Button';
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
            <Button size="icon" className="bg-transparent" key="placeholder" />
        );
    }
    const handleChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <Button
            size="icon"
            className="bg-transparent hover:bg-transparent"
            onClick={handleChangeTheme}
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
}
