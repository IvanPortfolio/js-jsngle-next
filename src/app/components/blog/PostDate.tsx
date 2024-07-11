export function PostDate({ date }: { date: any }) {
    return (
        <span className="text-sm text-dark-gray dark:text-dark-gray font-medium">
            {new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            }).format(new Date(date))}
        </span>
    );
}
