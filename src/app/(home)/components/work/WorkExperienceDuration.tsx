import React from 'react';

export function WorkExperienceDuration(props: { duration: string }) {
    return (
        <span className="text-sm text-dark dark:text-white font-medium">
            {props.duration}
        </span>
    );
}
