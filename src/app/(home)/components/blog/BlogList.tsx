import { JavaScriptThumbnail, ReactThumbnail } from '@/components/thumbnail';
import React from 'react';
import { getFeaturedPosts } from '@/common/api';
import { BlogPost } from './BlogPost';

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="h-[161.33px]" />,
    JavaScript: <JavaScriptThumbnail className="h-[161.33px]" />,
};

export async function BlogList() {
    const posts = await getFeaturedPosts(false);

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
