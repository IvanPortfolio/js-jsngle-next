import React from 'react';
import { Logo } from './Logo';
import { Duration } from './Duration';
import { Description } from './Description';

export function WorkExperienceItem({
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
                    <Logo image={image} />
                    <Description companyName={companyName} title={title} />
                </div>
                <Duration duration={duration} />
            </div>
        </div>
    );
}
