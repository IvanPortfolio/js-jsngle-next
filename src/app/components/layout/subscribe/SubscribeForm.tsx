import { Button, Input } from '@/components/ui';
import React from 'react';

export function SubscribeForm() {
    return (
        <form className="flex flex-col 2xl:flex-row gap-4">
            <Input placeholder="Your email address" type="email" />
            <Button size="lg" type="submit">
                Subscribe
            </Button>
        </form>
    );
}
