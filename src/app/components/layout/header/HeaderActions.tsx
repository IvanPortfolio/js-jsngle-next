import { ThemeSwitcher } from './ThemeSwitcher';
import { MenuButton } from './MenuButton';
import { ContactMe } from '../contact-me';

export function HeaderActions() {
    return (
        <div className="flex flex-row gap-2 2xl:gap-4">
            {/* <Search /> */}
            <ThemeSwitcher />
            <div className="hidden 2xl:inline-flex">
                <ContactMe />
            </div>
            <MenuButton />
        </div>
    );
}
