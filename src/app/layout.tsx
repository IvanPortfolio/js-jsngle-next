import './global.css';
import { spaceGrotesk } from '@/font';
import React from 'react';
import { Header } from '@/app/components/header/Header';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.className} w-full`}
            suppressHydrationWarning
        >
            <body className="bg-gray pb-6 pt-4 px-2 relative">
                <ThemeProvider>
                    <div className="container relative z-10">
                        <Header />
                        <div className="pt-6">{children}</div>
                    </div>
                    <div className="fixed bg-[#94FFF9] bg-opacity-30 blur-[500px] w-[1500px] h-[1500px] top-[271px] left-[-30px]" />
                    <div className="fixed bg-[#F047FF] bg-opacity-25 blur-[500px] w-[1500px] h-[1500px] top-[807px] left-[-283px]" />
                    <div className="fixed bg-[#FF7D34] bg-opacity-40 blur-[500px] w-[1500px] h-[1500px] top-[-190px] left-[687px]" />
                    <div className="fixed bg-[#3E68FB] bg-opacity-30 blur-[500px] w-[1500px] h-[1500px] top-[1479px] left-[603px]" />
                    <div className="fixed bg-[#3E68FB] bg-opacity-30 blur-[500px] w-[1500px] h-[1500px] top-[-345px] left-[-473px]" />
                </ThemeProvider>
            </body>
        </html>
    );
}
