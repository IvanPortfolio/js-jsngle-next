import React from 'react';

export function PostTags({ post }) {
    return (
        <div className="flex flex-col 2xl:flex-row gap-2 2xl:gap-4 2xl:items-center">
            <span className="text-lg text-dark dark:text-white">Tags:</span>
            <div className="flex gap-2">
                <div className="bg-light-blue text-blue text-sm px-2 py-1 rounded">
                    {post.category.name}
                </div>
            </div>
        </div>
    );
}
