'use client';

import { Button } from '@/components/ui';
import MenuIcon from '@/assets/icons/24/menu.svg';
import { useContext } from 'react';
import { SidebarContext } from '@/context';

export function MenuButton() {
    const { open } = useContext(SidebarContext);
    return (
        <Button
            size="icon"
            className="2xl:hidden bg-transparent hover:bg-transparent w-8 h-8 2xl:w-12 2xl:h-12"
            onClick={open}
            aria-label="Menu"
        >
            <MenuIcon className="text-dark dark:text-white" />
        </Button>
    );
}
