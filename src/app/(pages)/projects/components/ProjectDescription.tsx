import { IProject } from '@/app/(pages)/projects/types';

export function ProjectDescription({ project }: { project: IProject }) {
    return (
        <span className="text-base font-medium text-dark dark:text-white">
            {project.description}
        </span>
    );
}
