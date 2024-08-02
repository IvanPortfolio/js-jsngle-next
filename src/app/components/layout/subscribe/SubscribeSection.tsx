import { Paper, SectionHeading } from '@/components/ui';
import React from 'react';
import { SubscribeForm } from './SubscribeForm';
import { Banner } from './Banner';

export function SubscribeSection() {
    return (
        <Paper className="h-full">
            <div className="p-6 flex flex-col justify-between h-full gap-6">
                <SectionHeading>
                    Get The Latest Insights straight To Your Inbox For Free!
                </SectionHeading>
                <Banner />
                <SubscribeForm />
            </div>
        </Paper>
    );
}
