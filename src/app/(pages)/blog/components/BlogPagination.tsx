import { getPostCount } from '@/common/api';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui';
import { PAGE_SIZE } from '../constants';

export async function BlogPagination({ page, pageSize = PAGE_SIZE }) {
    const postCount = await getPostCount();
    const pageCount = Math.ceil(postCount / pageSize);
    const isFirstPage = page === 1;
    const isLastPage = page === pageCount;
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        isActive={isFirstPage}
                        variant="secondary"
                        href={`/blog/page/${isFirstPage ? 1 : page - 1}`}
                    />
                </PaginationItem>
                <PaginationItem>
                    <span className="text-base text-dark dark:text-white font-medium">
                        Page {page} of {pageCount}
                    </span>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        isActive={isLastPage}
                        variant="secondary"
                        href={`/blog/page/${isLastPage ? pageCount : page + 1}`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
