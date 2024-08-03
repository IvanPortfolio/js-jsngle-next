import React, { Suspense } from 'react';
import { getAllPosts, getPostAndMorePosts } from '@/common/api';
import { PageLayout, SubscribeSection } from '@/components/layout';
import { Section } from '@/components/ui';
import { Metadata } from 'next';
import { Post } from './components/Post';
import { RelatedPosts } from './components/RelatedPosts';

function generateExcerptFromMarkdown(markdown: string): string {
    return `${markdown.replace(/[#`*]/g, '').replace(/\n/g, ' ').slice(0, 90)}...`;
}

export async function generateMetadata({
    params: { slug },
}): Promise<Metadata> {
    const { post } = await getPostAndMorePosts(slug, false);
    return {
        title: post.title,
        description: generateExcerptFromMarkdown(post.body),
        openGraph: {
            title: post.title,
        },
    };
}

export default async function BlogPostPage({ params: { slug } }) {
    return (
        <PageLayout>
            <div className="flex flex-col gap-6">
                <Suspense>
                    <Section>
                        <Post slug={slug} />
                    </Section>
                </Suspense>
                <Suspense>
                    <RelatedPosts slug={slug} />
                </Suspense>
                <SubscribeSection />
            </div>
        </PageLayout>
    );
}
