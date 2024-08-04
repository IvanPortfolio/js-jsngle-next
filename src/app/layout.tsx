import './global.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';
import { SidebarProvider } from '@/context';
import { Background, Header, Sidebar } from '@/components/layout';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { spaceGrotesk } from '../font';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.className} w-full h-full`}
            suppressHydrationWarning
        >
            <body className="bg-white dark:bg-dark pb-6 pt-4 px-2 relative h-full">
                <ThemeProvider>
                    <SidebarProvider>
                        <div className="flex flex-col container relative z-10 min-h-full">
                            <Header />
                            <div className="pt-6 flex-grow">{children}</div>
                            <SpeedInsights />
                            <Analytics />
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
    metadataBase: new URL('https://jsjungle.dev'),
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
