import { Section } from '@/app/components/ui/Section';
import { WorkExperienceBlock } from './WorkExperienceBlock';
import Image from 'next/image';
import eleksImage from '@/assets/images/eleks.png';
import LogivationsImage from '@/assets/images/logivations.svg';

export function WorkExperienceSection() {
    return (
        <Section title="Work Experience">
            <WorkExperienceBlock
                companyName="Eleks Inc."
                title="Senior Software Developer"
                duration="2021 - Present"
                image={<Image src={eleksImage} alt="Eleks logo" />}
            />
            <WorkExperienceBlock
                companyName="Eleks Ltd."
                title="Senior Software Developer"
                duration="2017 - 2021"
                image={<Image src={eleksImage} alt="Eleks logo" />}
            />
            <WorkExperienceBlock
                companyName="Logivations"
                title="Software Developer"
                duration="2016 - 2017"
                image={<LogivationsImage />}
            />
        </Section>
    );
}
