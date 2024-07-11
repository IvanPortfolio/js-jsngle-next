'use client';
import { MenuItem } from '@/app/components/header/MenuItem';
import HomeIcon from '@/assets/icons/20/home.svg';
import ProjectsIcon from '@/assets/icons/20/projects.svg';
import BlogIcon from '@/assets/icons/20/blog.svg';

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

export function Menu() {
    return (
        <ul className="gap-8 hidden 2xl:flex">
            {HEADER_LIST.map((item, index) => (
                <MenuItem
                    key={index}
                    item={{ title: item.title, link: item.link }}
                    Icon={item.icon}
                />
            ))}
        </ul>
    );
}
