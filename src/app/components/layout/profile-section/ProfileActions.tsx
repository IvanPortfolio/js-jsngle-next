import React from 'react';
import { DownloadCV } from './DownloadCV';
import { ContactMe } from './ContactMe';

export function ProfileActions() {
    return (
        <div className="flex flex-col 2xl:flex-row gap-4">
            <ContactMe />
            <DownloadCV />
        </div>
    );
}
