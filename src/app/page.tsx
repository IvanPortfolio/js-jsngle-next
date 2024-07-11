import { ProfileSection } from '@/components/ProfileSection';
import { ServicesSection } from '@/app/components/services/ServicesSection';
import { BlogSection } from '@/app/components/blog/BlogSection';
import { WorkExperienceSection } from '@/app/components/work/WorkExperienceSection';
import { SubscribeSection } from '@/app/components/subscribe/SubscribeSection';
import { SkillsSection } from '@/app/components/skills/SkillsSection';
import { AboutMeSection } from '@/app/components/aboutMe/AboutMeSection';
import { ProjectsSection } from '@/app/components/projects/ProjectsSection';
import { ToolsSection } from '@/app/components/tools/ToolsSection';

export default function HomePage() {
    return (
        <div className={'flex flex-col 2xl:flex-row gap-6'}>
            <div className="2xl:w-[432px] flex gap-6 flex-col">
                <ProfileSection />
                <SubscribeSection />
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
