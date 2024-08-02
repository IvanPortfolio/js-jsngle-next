import { Metadata } from 'next';
import { PageLayout } from '@/components/layout';
import { Suspense } from 'react';
import { Section } from '@/components/ui';
import { BlogPagination } from './components/BlogPagination';
import { PostsList } from './components/PostsList';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Blog',
        description: `Discover expert tips, tutorials, and best practices for mastering JavaScript and React. Stay updated with the latest trends and advancements in web development, and learn how to build dynamic, high-performance applications with ease. Join our community of developers and enhance your coding skills today!`,
        openGraph: {
            title: 'Blog',
        },
    };
}

export default async function BlogPage({ searchParams }) {
    const currentPage = Number(searchParams?.page) || 1;
    return (
        <PageLayout>
            <Section title="Blog">
                <div className="flex flex-col gap-12">
                    <Suspense>
                        <PostsList page={currentPage} />
                    </Suspense>
                    <Suspense>
                        <BlogPagination page={currentPage} />
                    </Suspense>
                </div>
            </Section>
        </PageLayout>
    );
}
