import './global.css';
import { spaceGrotesk } from '@/font';
import React from 'react';
import { Header } from '@/app/components/header/Header';
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';
import { SidebarProvider } from '@/app/context/sidebar';
import { Sidebar } from '@/app/components/sidebar/Sidebar';
import { Background } from '@/app/components/layout/Background';

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.className} w-full`}
            suppressHydrationWarning
        >
            <body className="bg-white dark:bg-dark pb-6 pt-4 px-2 relative">
                <ThemeProvider>
                    <SidebarProvider>
                        <div className="container relative z-10">
                            <Header />
                            <div className="pt-6">{children}</div>
                            <Sidebar />
                        </div>
                    </SidebarProvider>
                    <Background />
                </ThemeProvider>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: {
        template: '%s | JsJungle',
        default: 'Home',
    },
    description: 'Get all you need to know about JavaScript',
    openGraph: {
        title: {
            template: '%s | JsJungle',
            default: 'Home',
        },
        type: 'website',
        siteName: 'JsJungle',
        description: 'Get all you need to know about JavaScript',
    },
};
