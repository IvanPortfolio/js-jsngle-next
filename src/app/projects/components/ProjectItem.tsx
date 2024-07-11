import { ProjectLine } from '@/app/projects/components/ProjectLine';
import { ProjectContent } from '@/app/projects/components/ProjectContent';

export function ProjectItem({
    title,
    jobTitle,
    date,
    responsibilities,
    skills,
    image,
    children,
}) {
    return (
        <div className="flex flex-row gap-6 group">
            <ProjectLine />
            <ProjectContent
                title={title}
                jobTitle={jobTitle}
                date={date}
                image={image}
                responsibilities={responsibilities}
                skills={skills}
            >
                {children}
            </ProjectContent>
        </div>
    );
}
