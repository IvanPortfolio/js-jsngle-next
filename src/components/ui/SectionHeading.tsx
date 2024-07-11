import React from 'react';

export function SectionHeading({ children }) {
    return (
        <h3 className="text-[32px] leading-10 text-dark dark:text-white font-bold">
            {children}
        </h3>
    );
}
