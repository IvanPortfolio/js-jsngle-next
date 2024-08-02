import { Section } from '@/components/ui';
import Link from 'next/link';
import ArrowRightIcon from '@/assets/icons/24/arrowRight.svg';
import { Suspense } from 'react';
import { BlogList } from './BlogList';

export async function BlogSection() {
    return (
        <Section
            title="Blog"
            link={
                <Link
                    href="/blog"
                    className="flex flex-row gap-2 justify-center items-center text-dark text-base leading-[19.2px] font-bold"
                >
                    View all <ArrowRightIcon />
                </Link>
            }
        >
            <Suspense fallback={<span>Loading...</span>}>
                <BlogList />
            </Suspense>
        </Section>
    );
}
