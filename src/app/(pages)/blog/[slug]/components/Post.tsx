import { draftMode } from 'next/headers';
import { getPostAndMorePosts } from '@/common/api';
import React from 'react';
import { PostThumbnail } from './PostThumbnail';
import { PostHeading } from './PostHeading';
import { PostBody } from './PostBody';
import { PostTags } from './PostTags';
import { PostShare } from './PostShare';

export async function Post({ slug }) {
    const { isEnabled } = draftMode();
    const { post } = await getPostAndMorePosts(slug, isEnabled);
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
