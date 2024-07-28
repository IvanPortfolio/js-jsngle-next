import { BlogPostContent } from '@/app/components/blog/BlogPostContent';
import { PostLink } from '@/app/components/blog/PostLink';
import { Tag } from '@/app/components/blog/Tag';
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
