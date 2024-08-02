import React from 'react';
import { ProfileSection } from './profile-section';

export function PageLayout({
    sideBar,
    children,
}: {
    sideBar?: React.JSX.Element;
    children: any;
}) {
    return (
        <div className="flex flex-col 2xl:flex-row gap-6">
            <div className="hidden 2xl:flex 2xl:w-[432px] flex-none 2xl:sticky 2xl:top-[104px] 2xl:h-[651px]">
                <ProfileSection />
                {sideBar}
            </div>
            <div className="flex-1 overflow-auto">{children}</div>
        </div>
    );
}
