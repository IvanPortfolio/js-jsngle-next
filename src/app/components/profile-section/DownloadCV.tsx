import { Button } from '@/app/components/ui/Button';
import DownloadIcon from '@/assets/icons/24/download.svg';
import React from 'react';

export function DownloadCV() {
    return (
        <Button size="lg" variant="secondary">
            <span className="mr-2">
                <DownloadIcon />
            </span>
            Download CV
        </Button>
    );
}
