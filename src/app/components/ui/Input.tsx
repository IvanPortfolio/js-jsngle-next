import * as React from 'react';
import { cn } from '@/app/common/utils';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'flex h-14 w-full',
                    'bg-white dark:bg-white/10 rounded-lg border border-lightGray dark:border-white/15',
                    'px-6 py-4',
                    'text-base text-dark dark:text-white',
                    'placeholder:text-mid-gray dark:placeholder:text-white/70 focus-visible:border-blue focus-visible:outline-none hover:border-blue dark:focus-visible:border-blue dark:hover:border-blue-hover disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Input.displayName = 'Input';

export { Input };
