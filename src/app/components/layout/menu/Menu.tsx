'use client';

import HomeIcon from '@/assets/icons/20/home.svg';
import ProjectsIcon from '@/assets/icons/20/projects.svg';
import BlogIcon from '@/assets/icons/20/blog.svg';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { MenuItem } from './MenuItem';

const HEADER_LIST = [
    {
        title: 'Home',
        link: '/',
        icon: HomeIcon,
    },
    {
        title: 'Projects',
        link: '/projects',
        icon: ProjectsIcon,
    },
    {
        title: 'Blog',
        link: '/blog',
        icon: BlogIcon,
    },
];

export interface MenuProps
    extends React.ButtonHTMLAttributes<HTMLUListElement>,
        React.RefAttributes<HTMLUListElement> {
    asChild?: boolean;
}

export function Menu({ asChild, ...props }: MenuProps) {
    const Comp = asChild ? Slot : 'ul';
    return (
        <Comp {...props}>
            {HEADER_LIST.map((item, index) => (
                <MenuItem
                    key={index}
                    item={{ title: item.title, link: item.link }}
                    Icon={item.icon}
                />
            ))}
        </Comp>
    );
}
