import React from 'react';
import { cn } from '@/lib/utils';

export const GradientThumbnail = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'bg-gradient-to-r rounded-lg flex justify-center items-center',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
});

GradientThumbnail.displayName = 'GradientThumbnail';
