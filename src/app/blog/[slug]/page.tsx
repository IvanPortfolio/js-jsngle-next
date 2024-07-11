import React, { Suspense } from 'react';
import { getAllPosts, getPostAndMorePosts } from '@/common/api';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { visit } from 'unist-util-visit';
import { remark } from 'remark';
import { toc } from 'mdast-util-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { PageLayout } from '@/components/PageLayout';
import CalendarIcon from '@/assets/icons/20/calendar.svg';
import ClockIcon from '@/assets/icons/20/clock.svg';
import { calculateReadingTime } from '@/lib/utils';
import { ReactThumbnail } from '@/components/ReactThumbnail';
import { JavaScriptThumbnail } from '@/components/JavaScriptThumbnail';
import { draftMode } from 'next/headers';

export const dynamicParams = false;

function getToc() {
    return (tree) => {
        const table = toc(tree, { heading: '#2', maxDepth: 2 });

        // @ts-ignore
    };
}

export async function generateStaticParams() {
    const allPosts = await getAllPosts(false);

    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

function addHrBeforeH2() {
    return (tree) => {
        let isFirstH2 = true;
        const inserts = [];

        visit(tree, 'element', (node, index, parent) => {
            if (node.tagName === 'h2') {
                if (!isFirstH2) {
                    // Prepare to insert an <hr> element before this <h2>
                    const hr = {
                        type: 'element',
                        tagName: 'hr',
                        properties: {},
                        children: [],
                    };

                    // Record the insert action to be performed later
                    inserts.push({ parent, index, element: hr });
                } else {
                    isFirstH2 = false; // Mark the first <h2> and do nothing
                }
            }
        });

        // Perform all recorded insert actions
        for (let insert of inserts.reverse()) {
            insert.parent.children.splice(insert.index, 0, insert.element);
        }
    };
}

const CATEGORY_TO_THUMBNAIL = {
    React: <ReactThumbnail className="h-[300px] w-full" />,
    JavaScript: <JavaScriptThumbnail className={'h-[300px] w-full'} />,
};

async function Post({ slug }) {
    /*    const { post, morePosts } = await fetch(
            `${process.env.API_URL}/api/blog/post/${slug}`,
        ).then((res) => res.json());*/

    const { isEnabled } = draftMode();
    const { post } = await getPostAndMorePosts(slug, isEnabled);

    const file = await remark().use(getToc).process(post.body);
    return (
        <div className="flex flex-col gap-6">
            {CATEGORY_TO_THUMBNAIL[post.category.name]}
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 items-center">
                    <span className="text-sm text-dark-gray font-medium flex flex-row gap-1 justify-center items-center">
                        <CalendarIcon />
                        {new Intl.DateTimeFormat('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                        }).format(new Date(post.date))}
                    </span>
                    <span className="text-sm text-dark-gray font-medium flex flex-row gap-1 justify-center items-center">
                        <ClockIcon />
                        {`${calculateReadingTime(post.body)} min`}
                    </span>
                </div>
                <h1 className="text-cardTitle">{post.title}</h1>
            </div>

            <article className="prose prose-lg max-w-none">
                <MDXRemote
                    source={post.body}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [
                                addHrBeforeH2,
                                rehypeSlug,
                                [
                                    rehypeAutolinkHeadings,
                                    { behavior: 'wrap', test: ['h2', 'h3'] },
                                ],
                            ],
                        },
                    }}
                />
            </article>
        </div>
    );
}

export default async function BlogPostPage({ params: { slug } }) {
    return (
        <PageLayout>
            <Suspense fallback={<span>Loading...</span>}>
                <Post slug={slug} />
            </Suspense>
        </PageLayout>
    );
}
