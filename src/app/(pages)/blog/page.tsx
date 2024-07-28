import { PostsList } from '@/app/(pages)/blog/components/PostsList';
import { Metadata } from 'next';
import { PageLayout } from '@/app/components/layout/PageLayout';
import { Suspense } from 'react';
import { BlogPagination } from '@/app/(pages)/blog/components/BlogPagination';
import { Section } from '@/app/components/ui/Section';

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
