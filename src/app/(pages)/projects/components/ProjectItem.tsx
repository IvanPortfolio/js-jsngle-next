import { ProjectLine } from '@/app/(pages)/projects/components/ProjectLine';
import { ProjectContent } from '@/app/(pages)/projects/components/ProjectContent';
import { IProject } from '@/app/(pages)/projects/types';

export function ProjectItem({ project }: { project: IProject }) {
    return (
        <div className="flex flex-row gap-6 group">
            <ProjectLine />
            <ProjectContent project={project} />
        </div>
    );
}
