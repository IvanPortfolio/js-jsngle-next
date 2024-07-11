export function ProjectSubheading(props: { jobTitle: any; date: any }) {
    return (
        <div className="grid grid-cols-2">
            <span className="text-sm text-dark-gray dark:text-white/70 font-medium flex gap-1">
                Job title:{' '}
                <span className="text-dark dark:text-white">
                    {props.jobTitle}
                </span>
            </span>
            <span className="text-sm text-dark-gray dark:text-white/70 font-medium flex gap-1">
                Date:{' '}
                <span className="text-dark dark:text-white">{props.date}</span>
            </span>
        </div>
    );
}
