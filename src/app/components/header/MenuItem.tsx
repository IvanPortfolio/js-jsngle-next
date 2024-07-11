'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export function MenuItem({ item, Icon }: { item: any; Icon: any }) {
    const currentPath = usePathname();
    let isActive = currentPath === item.link;
    return (
        <li>
            <Link
                href={item.link}
                className={`group flex flex-row items-center gap-2 text-base font-medium ${isActive ? 'text-blue' : 'text-dark-gray dark:text-white/70 hover:text-dark dark:hover:text-white'}`}
            >
                <Icon />
                {item.title}
            </Link>
        </li>
    );
}
