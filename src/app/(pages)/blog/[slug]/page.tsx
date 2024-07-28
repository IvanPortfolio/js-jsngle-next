import React, { Suspense } from 'react';
import { getAllPosts, getPostAndMorePosts } from '@/app/common/api';
import { PageLayout } from '@/app/components/layout/PageLayout';
import { Post } from '@/app/(pages)/blog/[slug]/components/Post';
import { SubscribeSection } from '@/app/(home)/components/subscribe/SubscribeSection';
import { Section } from '@/app/components/ui/Section';
import { draftMode } from 'next/headers';
import { PostsGrid } from '@/app/components/blog/PostsGrid';
import { BlogPost } from '@/app/components/blog/BlogPost';
import { ReactThumbnail } from '@/app/components/thumbnail/ReactThumbnail';
import { JavaScriptThumbnail } from '@/app/components/thumbnail/JavaScriptThumbnail';
import { Metadata } from 'next';

export const dynamicParams = false;

export async function generateStaticParams() {
    const allPosts = await getAllPosts(false, { skip: 0, limit: 1000 });

    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

function generateExcerptFromMarkdown(markdown: string): string {
    return (
        markdown.replace(/[#`*]/g, '').replace(/\n/g, ' ').slice(0, 90) + '...'
    );
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

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="aspect-[2/1]" />,
    JavaScript: <JavaScriptThumbnail className="aspect-[2/1]" />,
};

export async function RelatedPosts({ slug }) {
    const { isEnabled } = draftMode();
    const { morePosts } = await getPostAndMorePosts(slug, isEnabled);

    return (
        <Section title="Related Posts">
            <PostsGrid>
                {morePosts.map((post) => (
                    <BlogPost
                        title={post.title}
                        date={post.date}
                        tag={post.category.name}
                        slug={post.slug}
                        key={post.sys.id}
                        body={post.body}
                        thumbnail={CATEGORY_TO_THUMBNAIL[post.category.name]}
                    />
                ))}
            </PostsGrid>
        </Section>
    );
}
