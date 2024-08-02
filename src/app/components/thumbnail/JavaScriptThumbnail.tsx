import JavaScriptIcon from '@/assets/icons/javaScript.svg';
import React from 'react';
import { cn } from '@/common/utils';
import { GradientThumbnail } from './GradientThumbnail';

const JavaScriptThumbnail = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <GradientThumbnail
        ref={ref}
        className={cn('from-[#FD4C9C] to-[#F89B29]', className)}
        {...props}
    >
        <JavaScriptIcon />
    </GradientThumbnail>
));

JavaScriptThumbnail.displayName = 'JavaScriptThumbnail';

export { JavaScriptThumbnail };
