import React from 'react';
import { ReactThumbnail } from '@/app/components/thumbnail/ReactThumbnail';
import { JavaScriptThumbnail } from '@/app/components/thumbnail/JavaScriptThumbnail';

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="h-[300px] w-full [&>svg]:scale-[1.43]" />,
    JavaScript: <JavaScriptThumbnail className={'h-[300px] w-full'} />,
};

export function PostThumbnail({ post }: { post: any }) {
    return <>{CATEGORY_TO_THUMBNAIL[post.category.name]}</>;
}
