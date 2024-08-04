import { getPostAndMorePosts } from '@/common/api';
import React from 'react';
import { PostThumbnail } from './PostThumbnail';
import { PostHeading } from './PostHeading';
import { PostBody } from './PostBody';
import { PostTags } from './PostTags';
import { PostShare } from './PostShare';
import { notFound } from 'next/navigation';

export async function Post({ slug, preview = false }) {
    const { post } = await getPostAndMorePosts(slug, preview);

    if (!post) {
        notFound();
    }
    return (
        <div className="flex flex-col gap-6">
            <PostThumbnail post={post} />
            <PostHeading post={post} />
            <PostBody post={post} />
            <div className="flex flex-col 2xl:flex-row gap-4 2xl:gap-0 2xl:justify-between">
                <PostTags post={post} />
                <PostShare post={post} />
            </div>
        </div>
    );
}
