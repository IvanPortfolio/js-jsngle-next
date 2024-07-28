import { PostMeta } from '@/app/(pages)/blog/[slug]/components/PostMeta';
import { SectionHeading } from '@/app/components/ui/SectionHeading';
import React from 'react';

export function PostHeading({ post }: { post: any }) {
    return (
        <div className="flex flex-col gap-4">
            <PostMeta post={post} />
            <SectionHeading>{post.title}</SectionHeading>
        </div>
    );
}
