import { ProjectTitle } from '@/app/projects/components/ProjectTitle';
import { ProjectSubheading } from '@/app/projects/components/ProjectSubheading';
import { ProjectResponsibilities } from '@/app/projects/components/ProjectResponsibilities';
import { ProjectSkills } from '@/app/projects/components/ProjectSkills';

export function ProjectContent({
    children,
    date,
    image,
    jobTitle,
    responsibilities,
    skills,
    title,
}: {
    title: any;
    jobTitle: any;
    date: any;
    children: any;
    image: any;
    responsibilities: any;
    skills: any;
}) {
    return (
        <div className="flex-grow pb-14">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <ProjectTitle title={title} />
                    <ProjectSubheading jobTitle={jobTitle} date={date} />
                    <span className="text-base font-medium text-dark dark:text-white">
                        {children}
                    </span>
                </div>
                {image}
                <ProjectResponsibilities responsibilities={responsibilities} />
                <ProjectSkills skills={skills} />
            </div>
        </div>
    );
}
