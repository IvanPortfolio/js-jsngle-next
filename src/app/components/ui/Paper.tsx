import React from 'react';
import { cn } from '@/common/utils';
import { Slot } from '@radix-ui/react-slot';

export interface PaperProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}

export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
    ({ className, asChild, children, ...props }, ref) => {
        const Comp = asChild ? Slot : 'div';
        return (
            <Comp
                className={cn('bg-white rounded-2xl dark:bg-dark', className)}
                ref={ref}
                {...props}
            >
                {children}
            </Comp>
        );
    },
);

Paper.displayName = 'Paper';
