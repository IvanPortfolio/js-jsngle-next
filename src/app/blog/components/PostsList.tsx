import React from 'react';
import { BlogPost } from '@/app/blog/components/BlogPost';
import { ReactThumbnail } from '@/components/ReactThumbnail';
import { JavaScriptThumbnail } from '@/components/JavaScriptThumbnail';
import { draftMode } from 'next/headers';
import { getAllPosts } from '@/common/api';

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="aspect-[2/1]" />,
    JavaScript: <JavaScriptThumbnail className="aspect-[2/1]" />,
};

export async function PostsList() {
    const { isEnabled } = draftMode();
    const posts = await getAllPosts(isEnabled);
    return (
        <div className="grid grid-cols-2 gap-6">
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
        </div>
    );
}
