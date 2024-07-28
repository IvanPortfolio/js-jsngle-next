import { PostMetaSection } from '@/app/(pages)/blog/[slug]/components/PostMetaSection';
import ClockIcon from '@/assets/icons/20/clock.svg';
import { calculateReadingTime } from '@/app/common/utils';
import React from 'react';

export function PostReadingTime({ post }) {
    return (
        <PostMetaSection>
            <ClockIcon />
            {`${calculateReadingTime(post.body)} min`}
        </PostMetaSection>
    );
}
