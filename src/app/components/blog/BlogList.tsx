import { BlogPost } from '@/app/components/blog/BlogPost';
import { ReactThumbnail } from '@/components/ReactThumbnail';
import { JavaScriptThumbnail } from '@/components/JavaScriptThumbnail';
import React from 'react';
import { getFeaturedPosts } from '@/common/api';
import { draftMode } from 'next/headers';

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="h-[161.33px]" />,
    JavaScript: <JavaScriptThumbnail className={'h-[161.33px]'} />,
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
