export function ProjectSubheadingSection({
    title,
    value,
}: {
    title: string;
    value: string;
}) {
    return (
        <span className="text-sm text-dark-gray dark:text-white/70 font-medium flex gap-1">
            {title}: <span className="text-dark dark:text-white">{value}</span>
        </span>
    );
}
