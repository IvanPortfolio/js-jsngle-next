import React from 'react';

export function PostMetaSection({ children }) {
    return (
        <span className="text-sm text-dark-gray font-medium flex flex-row gap-1 justify-center items-center">
            {children}
        </span>
    );
}
