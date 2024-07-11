import { Paper, PaperProps } from '@/components/ui/Paper';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface SectionProps extends PaperProps {
    title?: string;
    link?: React.ReactNode;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ title, link = null, children, asChild, ...props }, ref) => {
        const Comp = asChild ? Slot : Paper;
        return (
            <Comp {...props} ref={ref}>
                <div className="p-6 flex flex-col flex-grow gap-6">
                    {title || link ? (
                        <div className="flex flex-row justify-between">
                            {title && <SectionHeading>{title}</SectionHeading>}
                            {link}
                        </div>
                    ) : null}

                    <div className={`flex flex-col gap-4`}>{children}</div>
                </div>
            </Comp>
        );
    },
);

Section.displayName = 'Section';
