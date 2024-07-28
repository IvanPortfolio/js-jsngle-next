import { IProject } from '@/app/(pages)/projects/types';

export function ProjectTitle({ project }: { project: IProject }) {
    return (
        <h2 className="text-[28px] leading-[36.4px] text-dark dark:text-white font-bold">
            {project.title}
        </h2>
    );
}
