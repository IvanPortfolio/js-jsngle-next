import DoubleRightIcon from '@/assets/icons/20/doubleRight.svg';
import { IProject } from '@/app/(pages)/projects/types';

export function ProjectResponsibilities({ project }: { project: IProject }) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-dark dark:text-white">
                Responsibilities
            </h3>
            <ul className="flex flex-col gap-2">
                {project.responsibilities.map(
                    (responsibility: string, index: number) => (
                        <li
                            key={index}
                            className="text-base text-dark-gray dark:text-white/70 flex flex-row gap-2 items-center font-medium"
                        >
                            <DoubleRightIcon />
                            {responsibility}
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
}
