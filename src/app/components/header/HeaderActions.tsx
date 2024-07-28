import { ThemeSwitcher } from '@/app/components/header/ThemeSwitcher';
import { MenuButton } from '@/app/components/header/MenuButton';
import { ContactMe } from '@/app/components/header/ContactMe';

export function HeaderActions() {
    return (
        <div className="flex flex-row gap-2 2xl:gap-4">
            {/*<Search />*/}
            <ThemeSwitcher />
            <div className="hidden 2xl:inline-flex">
                <ContactMe />
            </div>
            <MenuButton />
        </div>
    );
}
