import ClockIcon from '@/assets/icons/20/clock.svg';
import { calculateReadingTime } from '@/common/utils';
import React from 'react';
import { PostMetaSection } from './PostMetaSection';

export function PostReadingTime({ post }) {
    return (
        <PostMetaSection>
            <ClockIcon />
            {`${calculateReadingTime(post.body)} min`}
        </PostMetaSection>
    );
}
