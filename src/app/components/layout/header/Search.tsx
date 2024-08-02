import { Button } from '@/components/ui';
import SearchIcon from '@/assets/icons/24/search.svg';

// eslint-disable-next-line no-unused-vars
function Search() {
    return (
        <Button size="icon" className="bg-transparent hover:bg-transparent">
            <SearchIcon className="text-dark dark:text-white" />
        </Button>
    );
}
