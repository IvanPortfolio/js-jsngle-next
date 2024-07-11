import ReactIcon from '@/assets/icons/react.svg';
import React from 'react';
import { cn } from '@/lib/utils';
import { GradientThumbnail } from '@/components/GradientThumbnail';

const ReactThumbnail = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <GradientThumbnail
            ref={ref}
            className={cn('from-[#696EFF] to-[#F8ACFF]', className)}
            {...props}
        >
            <ReactIcon />
        </GradientThumbnail>
    );
});

ReactThumbnail.displayName = 'ReactThumbnail';

export { ReactThumbnail };
