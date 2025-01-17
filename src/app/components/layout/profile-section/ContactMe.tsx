import { Button } from '@/components/ui';
import ChatIcon from '@/assets/icons/24/chat.svg';
import React from 'react';

export function ContactMe() {
    return (
        <Button size="lg">
            <span className="mr-2">
                <ChatIcon />
            </span>
            Contact me
        </Button>
    );
}
