import { Section } from '@/components/ui';
import Image from 'next/image';
import eleksImage from '@/assets/images/eleks.png';
import LogivationsImage from '@/assets/images/logivations.svg';
import { WorkExperienceItem } from './item';

export function WorkExperienceSection() {
    return (
        <Section title="Work Experience">
            <WorkExperienceItem
                companyName="Eleks Inc."
                title="Senior Software Developer"
                duration="2021 - Present"
                image={<Image src={eleksImage} alt="Eleks logo" />}
            />
            <WorkExperienceItem
                companyName="Eleks Ltd."
                title="Senior Software Developer"
                duration="2017 - 2021"
                image={<Image src={eleksImage} alt="Eleks logo" />}
            />
            <WorkExperienceItem
                companyName="Logivations"
                title="Software Developer"
                duration="2016 - 2017"
                image={<LogivationsImage />}
            />
        </Section>
    );
}
