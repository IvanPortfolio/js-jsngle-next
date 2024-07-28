import ClockIcon from '@/assets/icons/20/clock.svg';
import { calculateReadingTime } from '@/app/common/utils';

export function PostReadingTime(props: { markdownText: any }) {
    return (
        <span className="text-sm text-dark-gray dark:text-white font-medium flex flex-row gap-1 justify-center items-center">
            <ClockIcon />
            {`${calculateReadingTime(props.markdownText)} min`}
        </span>
    );
}
