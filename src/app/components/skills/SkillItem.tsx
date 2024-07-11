import { Button } from '@/components/ui/Button';
import DoubleRightIcon from '@/assets/icons/20/doubleRight.svg';
import { SectionContent } from '@/components/ui/SectionContent';

export function SkillItem({ icon, title, list }) {
    return (
        <SectionContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Button
                    size="icon"
                    asChild
                    className="bg-white hover:bg-white text-blue dark:bg-dark dark:hover:bg-dark"
                >
                    <div>{icon}</div>
                </Button>
                <h3 className="text-lg text-dark dark:text-white font-semibold">
                    {title}
                </h3>
            </div>
            <ul className={`flex flex-col gap-2`}>
                {list.map((item: string, index: number) => (
                    <li
                        key={index}
                        className="text-base text-dark-gray dark:text-white/70 flex flex-row gap-2 items-center font-medium"
                    >
                        <DoubleRightIcon />
                        {item}
                    </li>
                ))}
            </ul>
        </SectionContent>
    );
}
