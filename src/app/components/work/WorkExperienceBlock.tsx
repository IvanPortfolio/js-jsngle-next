export function WorkExperienceBlock({
    companyName,
    title,
    duration,
}: {
    companyName: string;
    title: string;
    duration: string;
}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                    <div className="size-12 bg-lightGray rounded-lg"></div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-dark dark:text-white text-base font-medium">
                            {companyName}
                        </h4>
                        <span className="text-sm text-dark-gray dark:text-white/70 font-medium">
                            {title}
                        </span>
                    </div>
                </div>
                <span className="text-sm text-dark dark:text-white font-medium">
                    {duration}
                </span>
            </div>
        </div>
    );
}
