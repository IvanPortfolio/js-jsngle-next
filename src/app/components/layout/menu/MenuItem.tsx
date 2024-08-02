'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function isActive(currentPath: string, item) {
    const isActive = currentPath === item.link;
    const isHome = item.link === '/';
    const isActiveChild = currentPath.startsWith(item.link);
    return isHome ? isActive : isActiveChild;
}

export function MenuItem({ item, Icon }: { item: any; Icon: any }) {
    const currentPath = usePathname();
    const isActiveItem = isActive(currentPath, item);
    return (
        <li>
            <Link
                href={item.link}
                className={`group flex flex-row items-center gap-2 text-base font-medium ${isActiveItem ? 'text-blue' : 'text-dark-gray dark:text-white/70 hover:text-dark dark:hover:text-white'}`}
            >
                <Icon />
                {item.title}
            </Link>
        </li>
    );
}
