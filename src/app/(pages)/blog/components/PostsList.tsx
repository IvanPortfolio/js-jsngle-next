import React from 'react';
import { BlogPost, PostsGrid } from '@/components/blog';
import { JavaScriptThumbnail, ReactThumbnail } from '@/components/thumbnail';
import { getAllPosts } from '@/common/api';
import { PAGE_SIZE } from '../constants';

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="aspect-[2/1]" />,
    JavaScript: <JavaScriptThumbnail className="aspect-[2/1]" />,
};

export async function PostsList({ page }) {
    const posts = await getAllPosts(false, {
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
