import { PageLayout } from '../../../../components/layout';
import { Section } from '../../../../components/ui';
import { Post } from '../../[slug]/components/Post';
import React from 'react';

export default async function BlogPostPreviewPage({ params: { slug } }) {
    return (
        <PageLayout>
            <Section>
                <Post slug={slug} preview />
            </Section>
        </PageLayout>
    );
}
