'use client';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from '@/app/components/ui/Sheet';
import { SidebarContext } from '@/app/context/sidebar';
import { useContext } from 'react';
import { Paper } from '@/app/components/ui/Paper';
import { Menu } from '@/app/components/header/Menu';
import { ContactMe } from '@/app/components/header/ContactMe';

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
