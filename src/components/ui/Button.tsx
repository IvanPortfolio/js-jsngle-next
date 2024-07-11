import React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-bold disabled:pointer-events-none transition ease-out duration-300',
    {
        variants: {
            variant: {
                default: 'bg-blue text-white hover:bg-blue-hover',
                secondary:
                    'bg-light-blue dark:bg-white/10 text-dark dark:text-white hover:bg-light-blue-hover dark:hover:bg-white/15',
                link: 'text-dark hover:text-blue dark:text-white text-base leading-[19.2px] font-bold',
            },
            size: {
                default: 'h-12 px-6 py-2.5',
                lg: 'h-14 px-6',
                link: '',
                icon: 'h-12 w-12 hover:text-blue',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
