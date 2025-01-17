import { Section } from '@/components/ui';
import PaletteIcon from '@/assets/icons/32/palette.svg';
import UniteIcon from '@/assets/icons/32/unite.svg';
import LaptopIcon from '@/assets/icons/32/laptop.svg';
import { SkillItem } from './SkillItem';

export function SkillsSection() {
    return (
        <Section title="Skills">
            <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 mb-[2px]">
                <SkillItem
                    title="General Solution Design Experience"
                    icon={<PaletteIcon />}
                    list={[
                        'Mobile Web Development',
                        'Single-Page Applications',
                        'Modular Architecture Design',
                        'Independent Deployment',
                        'Cross-Browser Development',
                    ]}
                />
                <SkillItem
                    title="Software Development Methodologies"
                    icon={<UniteIcon />}
                    list={[
                        'Agile & Scrum',
                        'Kanban',
                        'Pair Programming',
                        'Extreme Programming',
                        'Coding Standards & Collective Code Ownership',
                    ]}
                />
                <SkillItem
                    title="Platforms, Technologies, and Programming Skills"
                    icon={<LaptopIcon />}
                    list={[
                        'Runtime Environments',
                        'Web Standards',
                        'Front-End Frameworks',
                        'CSS Pre-processors',
                        'Maps Integration',
                    ]}
                />
            </div>
        </Section>
    );
}
