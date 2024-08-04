import { ProfileSection, SubscribeSection } from '@/components/layout';
import { ServicesSection } from './components/services/ServicesSection';
import { BlogSection } from './components/blog/BlogSection';
import { WorkExperienceSection } from './components/work/WorkExperienceSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { AboutMeSection } from './components/aboutMe/AboutMeSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ToolsSection } from './components/tools/ToolsSection';

export const runtime = 'nodejs';

export default function HomePage() {
    return (
        <div className="flex flex-col 2xl:flex-row gap-6">
            <div className="2xl:w-[432px] flex gap-6 flex-col">
                <ProfileSection />
                <div className="h-[350px]">
                    <SubscribeSection />
                </div>
                <BlogSection />
            </div>
            <div className="flex-grow flex flex-col gap-6">
                <AboutMeSection />
                <SkillsSection />
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
                    <WorkExperienceSection />
                    <ToolsSection />
                </div>
                <ServicesSection />
                <ProjectsSection />
            </div>
        </div>
    );
}
