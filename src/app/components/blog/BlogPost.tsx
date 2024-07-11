import { BlogPostContent } from '@/components/blog/BlogPostContent';
import { PostLink } from '@/components/blog/PostLink';
import { Tag } from '@/components/blog/Tag';
import { PostDate } from '@/app/components/blog/PostDate';

export const BlogPost = ({ title, slug, tag, date, thumbnail }) => (
    <BlogPostContent>
        {thumbnail}
        <PostLink slug={slug} title={title} />
        <div className="flex flex-row justify-between items-center">
            <Tag tag={tag} />
            <PostDate date={date} />
        </div>
    </BlogPostContent>
);
