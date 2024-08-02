import { JavaScriptThumbnail, ReactThumbnail } from '@/components/thumbnail';
import React from 'react';
import { draftMode } from 'next/headers';
import { getPostAndMorePosts } from '@/common/api';
import { Section } from '@/components/ui';
import { BlogPost, PostsGrid } from '@/components/blog';

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="aspect-[2/1]" />,
    JavaScript: <JavaScriptThumbnail className="aspect-[2/1]" />,
};

export async function RelatedPosts({ slug }) {
    const { isEnabled } = draftMode();
    const { morePosts } = await getPostAndMorePosts(slug, isEnabled);

    return (
        <Section title="Related Posts">
            <PostsGrid>
                {morePosts.map((post) => (
                    <BlogPost
                        title={post.title}
                        date={post.date}
                        tag={post.category.name}
                        slug={post.slug}
                        key={post.sys.id}
                        body={post.body}
                        thumbnail={CATEGORY_TO_THUMBNAIL[post.category.name]}
                    />
                ))}
            </PostsGrid>
        </Section>
    );
}
