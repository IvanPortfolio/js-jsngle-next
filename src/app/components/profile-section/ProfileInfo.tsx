import Image from 'next/image';
import avatar from '../../../assets/avatar.png';
import { SectionHeading } from '@/app/components/ui/SectionHeading';

export function ProfileInfo() {
    return (
        <div className="flex flex-col gap-4">
            <Image
                src={avatar}
                alt={'Avatar image'}
                height={261}
                width={384}
                className="2xl:w-[384px] 2xl:h-[261px]"
            />
            <section className="flex flex-col gap-2 *:transition-colors *:ease-out *:duration-300">
                <SectionHeading>Ivan Kaminskyi</SectionHeading>
                <h3 className="text-dark-gray dark:text-white/70 font-semibold text-lg">
                    As a{' '}
                    <span className="text-dark dark:text-white">
                        Senior Software Developer
                    </span>{' '}
                    with over 8 years of experience, I&apos;ve dedicated my
                    career to crafting dynamic and user-centric web
                    applications, specializing in JavaScript, React, HTML, and
                    CSS.
                </h3>
            </section>
        </div>
    );
}
