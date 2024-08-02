import { JavaScriptThumbnail, ReactThumbnail } from '@/components/thumbnail';
import React from 'react';
import { getFeaturedPosts } from '@/common/api';
import { draftMode } from 'next/headers';
import { BlogPost } from './BlogPost';

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="h-[161.33px]" />,
    JavaScript: <JavaScriptThumbnail className="h-[161.33px]" />,
};

export async function BlogList() {
    const { isEnabled } = draftMode();

    const posts = await getFeaturedPosts(isEnabled);

    return posts.map((post) => (
        <BlogPost
            key={post.sys.id}
            title={post.title}
            tag={post.category.name}
            date={post.date}
            slug={post.slug}
            thumbnail={CATEGORY_TO_THUMBNAIL[post.category.name]}
        />
    ));
}
