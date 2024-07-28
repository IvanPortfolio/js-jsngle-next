'use client';
import { Button } from '@/app/components/ui/Button';
import React from 'react';
import LinkedInIcon from '@/assets/icons/24/linkedin.svg';
import FacebookIcon from '@/assets/icons/24/facebook.svg';
import XIcon from '@/assets/icons/24/x.svg';
import LinkIcon from '@/assets/icons/24/link.svg';
import EmailIcon from '@/assets/icons/24/email.svg';

const shareHandlers = {
    linkedIn: () => {
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
        );
    },
    x: () => {
        window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`,
            '_blank',
        );
    },
    facebook: () => {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
            '_blank',
        );
    },
    email: (post) => {
        window.open(
            `mailto:?subject=${post.title}&body=${window.location.href}`,
            '_blank',
        );
    },
    link: () => {
        navigator.clipboard.writeText(window.location.href);
    },
};

function ShareButton({ onClick, Icon, ...props }) {
    return (
        <Button size="icon" variant="secondary" onClick={onClick} {...props}>
            <Icon />
        </Button>
    );
}

export function PostShare({ post }) {
    return (
        <div className="flex flex-col 2xl:flex-row gap-2 2xl:gap-4 2xl:items-center">
            <span className="text-lg text-dark dark:text-white">Share:</span>
            <div className="flex flex-row gap-4">
                <ShareButton
                    onClick={shareHandlers.linkedIn}
                    Icon={LinkedInIcon}
                    aria-label="Share on LinkedIn"
                />
                <ShareButton
                    onClick={shareHandlers.x}
                    Icon={XIcon}
                    aria-label={'Share on X'}
                />
                <ShareButton
                    onClick={shareHandlers.facebook}
                    Icon={FacebookIcon}
                    aria-label={'Share on Facebook'}
                />
                <ShareButton
                    onClick={() => shareHandlers.email(post)}
                    Icon={EmailIcon}
                    aria-label={'Share via Email'}
                />
                <ShareButton
                    onClick={shareHandlers.link}
                    Icon={LinkIcon}
                    aria-label={'Copy link'}
                />
            </div>
        </div>
    );
}
