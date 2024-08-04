import { Metadata } from 'next';
import { BlogPageContent } from './components/BlogPageContent';
import { BlogPageLayout } from './components/BlogPageLayout';

export const runtime = 'nodejs';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Blog',
        description: `Discover expert tips, tutorials, and best practices for mastering JavaScript and React. Stay updated with the latest trends and advancements in web development, and learn how to build dynamic, high-performance applications with ease. Join our community of developers and enhance your coding skills today!`,
        metadataBase: new URL('https://jsjungle.dev'),
        openGraph: {
            title: 'Blog',
        },
    };
}

export default async function BlogPage() {
    return (
        <BlogPageLayout>
            <BlogPageContent currentPage={1} />
        </BlogPageLayout>
    );
}
