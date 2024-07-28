import { draftMode } from 'next/headers';
import { getPostAndMorePosts } from '@/app/common/api';
import { PostThumbnail } from '@/app/(pages)/blog/[slug]/components/PostThumbnail';
import { PostHeading } from '@/app/(pages)/blog/[slug]/components/PostHeading';
import { PostBody } from '@/app/(pages)/blog/[slug]/components/PostBody';
import React from 'react';
import { PostTags } from '@/app/(pages)/blog/[slug]/components/PostTags';
import { PostShare } from '@/app/(pages)/blog/[slug]/components/PostShare';

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
