import { BlogPageLayout } from '../../components/BlogPageLayout';
import { BlogPageContent } from '../../components/BlogPageContent';
import { Metadata } from 'next';
import { getPostCount } from '@/common/api';
import { PAGE_SIZE } from '../../constants';

export const runtime = 'nodejs';
export const dynamicParams = false;

export async function generateStaticParams() {
    const postCount = await getPostCount();
    const pageCount = Math.ceil(postCount / PAGE_SIZE);

    return Array.from({ length: pageCount }, (_, index) => ({
        index: `${index + 1}`,
    }));
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Blog',
        description: `Discover expert tips, tutorials, and best practices for mastering JavaScript and React. Stay updated with the latest trends and advancements in web development, and learn how to build dynamic, high-performance applications with ease. Join our community of developers and enhance your coding skills today!`,
        metadataBase: new URL('https://jsjungle.dev'),
        robots: 'noindex, nofollow',
        openGraph: {
            title: 'Blog',
        },
    };
}

export default async function BlogPage({ params: { index } }) {
    return (
        <BlogPageLayout>
            <BlogPageContent currentPage={+index} />
        </BlogPageLayout>
    );
}
