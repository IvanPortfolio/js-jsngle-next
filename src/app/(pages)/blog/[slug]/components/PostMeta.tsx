import { PostDate } from '@/app/(pages)/blog/[slug]/components/PostDate';
import { PostReadingTime } from '@/app/(pages)/blog/[slug]/components/PostReadingTime';
import React from 'react';

export function PostMeta({ post }: { post: any }) {
    return (
        <div className="flex flex-row gap-4 items-center">
            <PostDate post={post} />
            <PostReadingTime post={post} />
        </div>
    );
}
