import React from 'react';
import { WorkExperienceLogo } from '@/app/(home)/components/work/WorkExperienceLogo';
import { WorkExperienceDuration } from '@/app/(home)/components/work/WorkExperienceDuration';
import { WorkExperienceDescription } from '@/app/(home)/components/work/WorkExperienceDescription';

export function WorkExperienceBlock({
    companyName,
    title,
    duration,
    image,
}: {
    companyName: string;
    title: string;
    duration: string;
    image: React.JSX.Element;
}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                    <WorkExperienceLogo image={image} />
                    <WorkExperienceDescription
                        companyName={companyName}
                        title={title}
                    />
                </div>
                <WorkExperienceDuration duration={duration} />
            </div>
        </div>
    );
}
