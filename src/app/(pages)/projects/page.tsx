import { PageLayout } from '@/app/components/layout/PageLayout';
import { ProjectItem } from '@/app/(pages)/projects/components/ProjectItem';
import { Metadata } from 'next';
import { PROJECTS } from '@/app/(pages)/projects/data';
import { Section } from '@/app/components/ui/Section';

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
