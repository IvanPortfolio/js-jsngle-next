import { Paper } from '@/app/components/ui/Paper';
import React from 'react';
import { SectionHeading } from '@/app/components/ui/SectionHeading';
import { SubscribeForm } from '@/app/(home)/components/subscribe/SubscribeForm';
import { SubscribeBanner } from '@/app/(home)/components/subscribe/SubscribeBanner';

export function SubscribeSection() {
    return (
        <Paper className="h-full">
            <div className="p-6 flex flex-col justify-between h-full gap-6">
                <SectionHeading>
                    Get The Latest Insights straight To Your Inbox For Free!
                </SectionHeading>
                <SubscribeBanner />
                <SubscribeForm />
            </div>
        </Paper>
    );
}
