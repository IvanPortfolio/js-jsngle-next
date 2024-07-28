import { ProjectTitle } from '@/app/(pages)/projects/components/ProjectTitle';
import { ProjectSubheading } from '@/app/(pages)/projects/components/ProjectSubheading';
import { ProjectResponsibilities } from '@/app/(pages)/projects/components/ProjectResponsibilities';
import { ProjectSkills } from '@/app/(pages)/projects/components/ProjectSkills';
import { IProject } from '@/app/(pages)/projects/types';
import { ProjectDescription } from '@/app/(pages)/projects/components/ProjectDescription';

export function ProjectContent({ project }: { project: IProject }) {
    return (
        <div className="flex-grow pb-14">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <ProjectTitle project={project} />
                    <ProjectSubheading project={project} />
                    <ProjectDescription project={project} />
                </div>
                {project.image}
                <ProjectResponsibilities project={project} />
                <ProjectSkills project={project} />
            </div>
        </div>
    );
}
