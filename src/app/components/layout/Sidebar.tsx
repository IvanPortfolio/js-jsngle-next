'use client';

import { SidebarContext } from '@/context';
import { useContext } from 'react';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from '../ui';
import { Menu } from './menu';
import { ContactMe } from './contact-me';

export function Sidebar() {
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent>
                <div className="flex flex-col gap-4 h-full">
                    <SheetHeader>
                        <SheetTitle>Ivan Kaminskyi</SheetTitle>
                    </SheetHeader>
                    <div className="flex-grow px-4">
                        <Menu className="flex flex-col gap-8" />
                    </div>
                    <SheetFooter>
                        <ContactMe />
                    </SheetFooter>
                </div>
            </SheetContent>
        </Sheet>
    );
}
