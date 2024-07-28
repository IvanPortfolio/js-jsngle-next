import * as React from 'react';
import CaretLeftIcon from '@/assets/icons/24/caret-left.svg';
import CaretRightIcon from '@/assets/icons/24/caret-right.svg';

import { Button, ButtonProps } from './Button';
import { cn } from '@/app/common/utils';
import Link from 'next/link';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn('mx-auto flex w-full justify-center', className)}
        {...props}
    />
);
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

const PaginationLink = ({
    href,
    children,
    isActive,
    ref,
    ...props
}: PaginationLinkProps) => (
    <Button
        asChild
        size="icon"
        aria-current={isActive ? 'page' : undefined}
        {...props}
    >
        <Link href={href}>{children}</Link>
    </Button>
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to previous page"
        size="icon"
        className={cn('', className)}
        {...props}
    >
        <CaretLeftIcon />
    </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to next page"
        size="icon"
        className={cn('', className)}
        {...props}
    >
        <CaretRightIcon />
    </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

export {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
};
