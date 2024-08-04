import React from 'react';
import { getAllPosts, getPostAndMorePosts } from '@/common/api';
import { PageLayout, SubscribeSection } from '@/components/layout';
import { Section } from '@/components/ui';
import { Metadata } from 'next';
import { Post } from './components/Post';
import { RelatedPosts } from './components/RelatedPosts';
import { notFound } from 'next/navigation';

function generateExcerptFromMarkdown(markdown: string): string {
    return `${markdown.replace(/[#`*]/g, '').replace(/\n/g, ' ').slice(0, 90)}...`;
}

export const dynamicParams = false;

export async function generateMetadata({
    params: { slug },
}): Promise<Metadata> {
    const { post } = await getPostAndMorePosts(slug, false);
    if (!post) {
        notFound();
    }
    return {
        title: post.title,
        description: generateExcerptFromMarkdown(post.body),
        metadataBase: new URL('https://jsjungle.dev'),
        openGraph: {
            title: post.title,
        },
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts(false, { skip: 0, limit: 100 });
    return posts.map((post) => ({
        params: { slug: post.slug },
    }));
}

export default async function BlogPostPage({ params: { slug } }) {
    return (
        <PageLayout>
            <div className="flex flex-col gap-6">
                <Section>
                    <Post slug={slug} />
                </Section>
                <RelatedPosts slug={slug} />
                <SubscribeSection />
            </div>
        </PageLayout>
    );
}
