import { PostsList } from './PostsList';
import { BlogPagination } from './BlogPagination';

export async function BlogPageContent({ currentPage }) {
    return (
        <div className="flex flex-col gap-12">
            <PostsList page={currentPage} />
            <BlogPagination page={currentPage} />
        </div>
    );
}
