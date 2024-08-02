import React from 'react';
import { PostDate } from './PostDate';
import { PostReadingTime } from './PostReadingTime';

export function PostMeta({ post }: { post: any }) {
    return (
        <div className="flex flex-row gap-4 items-center">
            <PostDate post={post} />
            <PostReadingTime post={post} />
        </div>
    );
}
