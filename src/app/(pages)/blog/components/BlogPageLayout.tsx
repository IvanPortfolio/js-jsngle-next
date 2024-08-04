import { Section } from '../../../components/ui';
import { PageLayout } from '../../../components/layout';

export async function BlogPageLayout({ children }) {
    return (
        <PageLayout>
            <Section title="Blog">{children}</Section>
        </PageLayout>
    );
}
