import { BlogPostContent } from '@/app/components/blog/BlogPostContent';
import { PostReadingTime } from '@/app/components/blog/PostReadingTime';
import { PostDate } from '@/app/components/blog/PostDate';
import { PostLink } from '@/app/components/blog/PostLink';
import { Tag } from '@/app/components/blog/Tag';

export const BlogPost = ({ title, slug, tag, date, thumbnail, body }) => {
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
};
