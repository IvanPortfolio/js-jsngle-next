import React from 'react';
import { cn } from '@/common/utils';

export const GradientThumbnail = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
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
));

GradientThumbnail.displayName = 'GradientThumbnail';
