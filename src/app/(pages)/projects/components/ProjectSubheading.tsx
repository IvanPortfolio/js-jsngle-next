import { IProject } from '@/app/(pages)/projects/types';
import { ProjectSubheadingSection } from '@/app/(pages)/projects/components/ProjectSubheadingSection';

export function ProjectSubheading({ project }: { project: IProject }) {
    return (
        <div className="grid grid-rows-2 grid-cols-1 gap-2 2xl:gap-0 2xl:grid-cols-2 2xl:grid-rows-1">
            <ProjectSubheadingSection
                title="Job title"
                value={project.jobTitle}
            />
            <ProjectSubheadingSection title="Date" value={project.date} />
        </div>
    );
}
