import { ProjectLine } from './ProjectLine';
import { ProjectContent } from './ProjectContent';
import { IProject } from '../types';

export function ProjectItem({ project }: { project: IProject }) {
    return (
        <div className="flex flex-row gap-6 group">
            <ProjectLine />
            <ProjectContent project={project} />
        </div>
    );
}
