import { Paper } from '@/components/ui/Paper';
import { Button } from '@/components/ui/Button';
import { Menu } from '@/app/components/header/Menu';
import SearchIcon from '@/assets/icons/24/search.svg';
import { ThemeSwitcher } from '@/app/components/header/ThemeSwitcher';

function Heading() {
    return (
        <h2 className="text-base text-dark dark:text-white font-bold">
            Ivan Kaminskyi
        </h2>
    );
}

function Search() {
    return (
        <Button size="icon" className="bg-transparent hover:bg-transparent">
            <SearchIcon className="text-dark dark:text-white" />
        </Button>
    );
}

function HeaderActions() {
    return (
        <>
            {/*<Search />*/}
            <ThemeSwitcher />
            <Button className={'hidden 2xl:inline-flex'}>Contact Me</Button>
        </>
    );
}

export function Header() {
    return (
        <header className="sticky w-full top-0">
            <Paper>
                <div className="p-4 flex flex-row justify-between items-center">
                    <div className="px-4 w-[266px]">
                        <Heading />
                    </div>
                    <Menu />
                    <div className="flex flex-row gap-4">
                        <HeaderActions />
                    </div>
                </div>
            </Paper>
        </header>
    );
}
