import DoubleRightIcon from '@/assets/icons/20/doubleRight.svg';

export function ProjectResponsibilities({ responsibilities }) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-dark dark:text-white">
                Responsibilities
            </h3>
            <ul className="flex flex-col gap-2">
                {responsibilities.map(
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
