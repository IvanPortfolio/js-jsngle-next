import { BlogPostContent, PostDate, PostLink, Tag } from '@/components/blog';

export function BlogPost({ title, slug, tag, date, thumbnail }) {
    return (
        <BlogPostContent>
            {thumbnail}
            <PostLink slug={slug} title={title} />
            <div className="flex flex-row justify-between items-center">
                <Tag tag={tag} />
                <PostDate date={date} />
            </div>
        </BlogPostContent>
    );
}
