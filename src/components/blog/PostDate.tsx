import CalendarIcon from '@/assets/icons/20/calendar.svg';

export function PostDate({ date }: { date: string }) {
    return (
        <span className="text-sm text-dark-gray dark:text-white font-medium flex flex-row gap-1 justify-center items-center">
            <CalendarIcon />
            {new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            }).format(new Date(date))}
        </span>
    );
}
