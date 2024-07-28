import React from 'react';
import { BlogPost } from '@/app/components/blog/BlogPost';
import { ReactThumbnail } from '@/app/components/thumbnail/ReactThumbnail';
import { JavaScriptThumbnail } from '@/app/components/thumbnail/JavaScriptThumbnail';
import { draftMode } from 'next/headers';
import { getAllPosts } from '@/app/common/api';
import { PAGE_SIZE } from '@/app/(pages)/blog/constants';
import { PostsGrid } from '@/app/components/blog/PostsGrid';

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="aspect-[2/1]" />,
    JavaScript: <JavaScriptThumbnail className="aspect-[2/1]" />,
};

export async function PostsList({ page }) {
    const { isEnabled } = draftMode();
    const posts = await getAllPosts(isEnabled, {
        limit: PAGE_SIZE,
        skip: (page - 1) * PAGE_SIZE,
    });
    return (
        <PostsGrid>
            {posts.map((post) => (
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
    );
}
