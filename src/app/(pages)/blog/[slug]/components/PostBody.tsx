import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import React from 'react';
import { visit } from 'unist-util-visit';

export function PostBody(props: { post: any }) {
    return (
        <article className="prose 2xl:prose-lg dark:prose-invert max-w-none">
            <MDXRemote
                source={props.post.body}
                options={{
                    mdxOptions: {
                        rehypePlugins: [
                            addHrBeforeH2,
                            rehypeSlug,
                            /*[
                                rehypeAutolinkHeadings,
                                { behavior: 'wrap', test: ['h2', 'h3'] },
                            ],*/
                        ],
                    },
                }}
            />
        </article>
    );
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
