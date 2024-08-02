import { Section } from '@/components/ui';
import eslint from '@/assets/icons/48/eslint.png';
import git from '@/assets/icons/48/git.png';
import jest from '@/assets/icons/48/jest.png';
import nextJs from '@/assets/icons/48/nextjs.png';
import nodeJs from '@/assets/icons/48/nodejs.png';
import react from '@/assets/icons/48/react.png';
import typescript from '@/assets/icons/48/typescript.png';
import tailwindCss from '@/assets/icons/48/tailwind-css.png';
import Image from 'next/image';

export function ToolsSection() {
    return (
        <Section title="Tools">
            <div className="grid grid-cols-4 gap-6 mb-[4px]">
                <div className="size-[75px] rounded-lg bg-gray flex justify-center items-center">
                    <Image src={typescript} alt="Typescript" />
                </div>
                <div className="size-[75px] rounded-lg bg-gray flex justify-center items-center">
                    <Image src={react} alt="React" />
                </div>
                <div className="size-[75px] rounded-lg bg-gray flex justify-center items-center">
                    <Image src={nextJs} alt="Next.js" />
                </div>
                <div className="size-[75px] rounded-lg bg-gray flex justify-center items-center">
                    <Image src={nodeJs} alt="Node.js" />
                </div>
                <div className="size-[75px] rounded-lg bg-gray flex justify-center items-center">
                    <Image src={tailwindCss} alt="Tailwind CSS" />
                </div>
                <div className="size-[75px] rounded-lg bg-gray flex justify-center items-center">
                    <Image src={git} alt="Git" />
                </div>
                <div className="size-[75px] rounded-lg bg-gray flex justify-center items-center">
                    <Image src={jest} alt="Jest" />
                </div>
                <div className="size-[75px] rounded-lg bg-gray flex justify-center items-center">
                    <Image src={eslint} alt="ESLint" />
                </div>
            </div>
        </Section>
    );
}
