import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/common/utils';

export interface SectionHeadingProps
    extends React.HtmlHTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}

export const SectionHeading = ({
    children,
    className,
    asChild = false,
    ...props
}: SectionHeadingProps) => {
    const Comp = asChild ? Slot : 'h3';
    return (
        <Comp
            className={cn(
                'text-[32px] leading-10 text-dark dark:text-white font-bold',
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    );
};
