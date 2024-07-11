import { Section } from '@/components/ui/Section';
import { WorkExperienceBlock } from '@/app/components/work/WorkExperienceBlock';

export function WorkExperienceSection() {
    return (
        <Section title="Work Experience">
            <WorkExperienceBlock
                companyName="Eleks Inc."
                title="Senior Software Developer"
                duration="2021 - Present"
            />
            <WorkExperienceBlock
                companyName="Eleks Ltd."
                title="Senior Software Developer"
                duration="2017 - 2021"
            />
            <WorkExperienceBlock
                companyName="Logivations"
                title="Software Developer"
                duration="2016 - 2017"
            />
        </Section>
    );
}
