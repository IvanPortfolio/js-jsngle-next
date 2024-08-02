import { ProjectTitle } from './ProjectTitle';
import { ProjectSubheading } from './ProjectSubheading';
import { ProjectResponsibilities } from './ProjectResponsibilities';
import { ProjectSkills } from './ProjectSkills';
import { IProject } from '../types';
import { ProjectDescription } from './ProjectDescription';

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
