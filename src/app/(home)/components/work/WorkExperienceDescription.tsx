import { WorkExperienceCompanyName } from '@/app/(home)/components/work/WorkExperienceCompanyName';
import { WorkExperienceTitle } from '@/app/(home)/components/work/WorkExperienceTitle';
import React from 'react';

export function WorkExperienceDescription(props: {
    companyName: string;
    title: string;
}) {
    return (
        <div className="flex flex-col gap-1">
            <WorkExperienceCompanyName companyName={props.companyName} />
            <WorkExperienceTitle title={props.title} />
        </div>
    );
}
