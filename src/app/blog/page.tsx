import { ProfileSection } from '@/components/ProfileSection';
import { Section } from '@/components/ui/Section';
import { PostsList } from '@/app/blog/components/PostsList';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Blog',
        description: `Discover expert tips, tutorials, and best practices for mastering JavaScript and React. Stay updated with the latest trends and advancements in web development, and learn how to build dynamic, high-performance applications with ease. Join our community of developers and enhance your coding skills today!`,
        twitter: {
            title: 'Blog',
            images: [],
        },
    };
}

export default async function BlogPage() {
    return (
        <div className="flex flex-row gap-6">
            <div className="w-[432px] flex-none">
                <ProfileSection />
            </div>
            <div className="flex-1">
                <Section title="Blog">
                    <PostsList />
                </Section>
            </div>
        </div>
    );
}
