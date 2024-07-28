import React from 'react';

export function WorkExperienceTitle(props: { title: string }) {
    return (
        <span className="text-sm text-dark-gray dark:text-white/70 font-medium">
            {props.title}
        </span>
    );
}
