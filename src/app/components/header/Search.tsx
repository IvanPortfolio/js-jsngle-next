import { Button } from '@/app/components/ui/Button';
import SearchIcon from '@/assets/icons/24/search.svg';

function Search() {
    return (
        <Button size="icon" className="bg-transparent hover:bg-transparent">
            <SearchIcon className="text-dark dark:text-white" />
        </Button>
    );
}
