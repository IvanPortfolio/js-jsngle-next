import { SectionHeading } from '@/components/ui';
import React from 'react';
import { PostMeta } from './PostMeta';

export function PostHeading({ post }: { post: any }) {
    return (
        <div className="flex flex-col gap-4">
            <PostMeta post={post} />
            <SectionHeading>{post.title}</SectionHeading>
        </div>
    );
}
