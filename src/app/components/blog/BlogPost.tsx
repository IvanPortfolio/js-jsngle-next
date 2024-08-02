import { BlogPostContent } from './BlogPostContent';
import { PostReadingTime } from './PostReadingTime';
import { PostDate } from './PostDate';
import { PostLink } from './PostLink';
import { Tag } from './Tag';

export function BlogPost({ title, slug, tag, date, thumbnail, body }) {
    return (
        <BlogPostContent>
            {thumbnail}
            <Tag tag={tag} />
            <PostLink slug={slug} title={title} />
            <div className="flex flex-row gap-4 items-center">
                <PostDate date={date} />
                <PostReadingTime markdownText={body} />
            </div>
        </BlogPostContent>
    );
}
