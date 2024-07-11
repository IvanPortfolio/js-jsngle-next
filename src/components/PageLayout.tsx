import { ProfileSection } from '@/components/ProfileSection';
import { Section } from '@/components/ui/Section';
import React from 'react';

export function PageLayout({
    title,
    sideBar,
    children,
}: {
    title?: string;
    sideBar?: React.JSX.Element;
    children: any;
}) {
    return (
        <div className="flex flex-row gap-6">
            <div className="w-[432px] flex-none">
                <ProfileSection />
                {sideBar}
            </div>
            <div className="flex-1">
                <Section title={title}>{children}</Section>
            </div>
        </div>
    );
}
