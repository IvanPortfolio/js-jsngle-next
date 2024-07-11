import { StaticImageData } from 'next/image';
import { SectionContent } from '@/components/ui/SectionContent';

export function ServiceItem({ icon, serviceName, children }) {
    return (
        <SectionContent className="flex flex-col gap-4">
            <div className="h-[100px] w-full bg-white dark:bg-dark flex justify-center items-center rounded-lg">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
                {serviceName}
            </h3>
            <span className="text-base font-medium text-dark-gray dark:text-white/70">
                {children}
            </span>
        </SectionContent>
    );
}
