import { Button } from '@/components/ui/Button';
import ChatIcon from '@/assets/icons/24/chat.svg';
import DownloadIcon from '@/assets/icons/24/download.svg';
import React from 'react';

export function ProfileActions() {
    return (
        <div className="flex flex-col 2xl:flex-row gap-4">
            <Button size="lg">
                <span className="mr-2">
                    <ChatIcon />
                </span>
                Contact me
            </Button>
            <Button size="lg" variant="secondary">
                <span className="mr-2">
                    <DownloadIcon />
                </span>
                Download CV
            </Button>
        </div>
    );
}
