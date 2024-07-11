import JavaScriptIcon from '@/assets/icons/javaScript.svg';
import React from 'react';
import { GradientThumbnail } from '@/components/GradientThumbnail';
import { cn } from '@/lib/utils';

const JavaScriptThumbnail = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <GradientThumbnail
            ref={ref}
            className={cn('from-[#FD4C9C] to-[#F89B29]', className)}
            {...props}
        >
            <JavaScriptIcon />
        </GradientThumbnail>
    );
});

JavaScriptThumbnail.displayName = 'JavaScriptThumbnail';

export { JavaScriptThumbnail };
