import { Paper } from '@/components/ui/Paper';
import { Button } from '@/components/ui/Button';
import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function SubscribeSection() {
    return (
        <Paper>
            <div className="p-6 flex flex-col justify-between h-[350px]">
                <SectionHeading>
                    Get The Latest Insights straight To Your Inbox For Free!
                </SectionHeading>
                <div className="h-[56px] bg-secondary -mx-6 overflow-x-hidden relative bg-light-blue">
                    <div className="flex flex-row relative w-[734px] gap-6 p-4 animate-scroll-from-right-to-left text-blue text-base font-medium">
                        <span className="w-fit">
                            Subscribe To The Newsletter
                        </span>
                        <span className="w-fit">
                            Subscribe To The Newsletter
                        </span>
                        <span className="w-fit">
                            Subscribe To The Newsletter
                        </span>
                    </div>
                </div>
                <div className="flex flex-col 2xl:flex-row gap-4">
                    <input
                        className="flex-grow border rounded px-6"
                        placeholder="Your email address"
                        type="email"
                    />
                    <Button size="lg">Subscribe</Button>
                </div>
            </div>
        </Paper>
    );
}
