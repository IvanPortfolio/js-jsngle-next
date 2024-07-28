import React from 'react';

export function WorkExperienceCompanyName(props: { companyName: string }) {
    return (
        <h4 className="text-dark dark:text-white text-base font-medium">
            {props.companyName}
        </h4>
    );
}
