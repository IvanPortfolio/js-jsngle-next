import { PostMetaSection } from '@/app/(pages)/blog/[slug]/components/PostMetaSection';
import CalendarIcon from '@/assets/icons/20/calendar.svg';
import React from 'react';

export function PostDate(props: { post: any }) {
    return (
        <PostMetaSection>
            <CalendarIcon />
            {new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            }).format(new Date(props.post.date))}
        </PostMetaSection>
    );
}
