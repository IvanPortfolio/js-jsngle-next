import * as React from 'react';
import CaretLeftIcon from '@/assets/icons/24/caret-left.svg';
import CaretRightIcon from '@/assets/icons/24/caret-right.svg';

import { cn } from '@/common/utils';
import Link from 'next/link';
import { Button, ButtonProps } from './Button';

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
    return (
        <nav
            role="navigation"
            aria-label="pagination"
            className={cn('mx-auto flex w-full justify-center', className)}
            {...props}
        />
    );
}

Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
    HTMLUListElement,
    React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn('flex flex-row items-center gap-4', className)}
        {...props}
    />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = { isActive: boolean } & ButtonProps &
    React.ComponentProps<typeof Link>;

function PaginationLink({
    href,
    children,
    isActive,
    // eslint-disable-next-line no-unused-vars
    ref,
    ...props
}: PaginationLinkProps) {
    return (
        <Button
            asChild
            size="icon"
            aria-current={isActive ? 'page' : undefined}
            {...props}
        >
            <Link href={href}>{children}</Link>
        </Button>
    );
}

PaginationLink.displayName = 'PaginationLink';

function PaginationPrevious({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) {
    return (
        <PaginationLink
            aria-label="Go to previous page"
            size="icon"
            className={cn('', className)}
            {...props}
        >
            <CaretLeftIcon />
        </PaginationLink>
    );
}

PaginationPrevious.displayName = 'PaginationPrevious';

function PaginationNext({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) {
    return (
        <PaginationLink
            aria-label="Go to next page"
            size="icon"
            className={cn('', className)}
            {...props}
        >
            <CaretRightIcon />
        </PaginationLink>
    );
}

PaginationNext.displayName = 'PaginationNext';

export {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
};
