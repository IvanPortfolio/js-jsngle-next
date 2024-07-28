import React from 'react';
import { DownloadCV } from '@/app/components/profile-section/DownloadCV';
import { ContactMe } from '@/app/components/profile-section/ContactMe';

export function ProfileActions() {
    return (
        <div className="flex flex-col 2xl:flex-row gap-4">
            <ContactMe />
            <DownloadCV />
        </div>
    );
}
