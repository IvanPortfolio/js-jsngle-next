import { IProject } from '../types';

export function ProjectSkills({ project }: { project: IProject }) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-dark dark:text-white/70">
                Related skills
            </h3>
            <div className="flex flex-wrap gap-2">
                {project.skills.map((skill: string, index: number) => (
                    <span
                        key={index}
                        className="bg-light-blue dark:bg-white/10 py-1 px-2 rounded text-sm text-dark dark:text-white/70"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
