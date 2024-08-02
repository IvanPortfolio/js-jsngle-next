import { PageLayout } from '@/components/layout';
import { Metadata } from 'next';
import { Section } from '@/components/ui';
import { ProjectItem } from './components/ProjectItem';
import { PROJECTS } from './data';

export default function Projects() {
    return (
        <PageLayout>
            <Section title="My Projects">
                <div className="flex flex-col">
                    {PROJECTS.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </div>
            </Section>
        </PageLayout>
    );
}

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A collection of projects I have worked on.',
    openGraph: {
        title: 'Projects',
    },
};
