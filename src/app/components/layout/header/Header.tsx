import { Paper } from '@/components/ui';
import { Menu } from '../menu';
import { Heading } from './Heading';
import { HeaderActions } from './HeaderActions';

export function Header() {
    return (
        <header className="sticky w-full top-0 z-10">
            <Paper>
                <div className="p-4 flex flex-row justify-between items-center">
                    <div className="px-4 w-[266px]">
                        <Heading />
                    </div>
                    <Menu className="gap-8 hidden 2xl:flex" />
                    <HeaderActions />
                </div>
            </Paper>
        </header>
    );
}
