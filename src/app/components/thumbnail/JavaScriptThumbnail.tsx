import JavaScriptIcon from '@/assets/icons/javaScript.svg';
import React from 'react';
import { GradientThumbnail } from '@/app/components/thumbnail/GradientThumbnail';
import { cn } from '@/app/common/utils';

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
