import React from 'react';

export function CompanyName({ children }: { children: string }) {
    return (
        <h4 className="text-dark dark:text-white text-base font-medium">
            {children}
        </h4>
    );
}
