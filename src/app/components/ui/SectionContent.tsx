import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/common/utils';

export interface SectionContentProps
    extends React.HtmlHTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}

export const SectionContent = React.forwardRef<
    HTMLDivElement,
    SectionContentProps
>(({ className, asChild, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
        <Comp
            className={cn('bg-gray dark:bg-white/10 rounded-lg p-4', className)}
            ref={ref}
            {...props}
        >
            {children}
        </Comp>
    );
});

SectionContent.displayName = 'SectionContent';
