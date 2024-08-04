import { getAllPosts } from '@/common/api';
import { permanentRedirect } from 'next/navigation';

export const dynamicParams = false;
export const runtime = 'nodejs';

export async function generateStaticParams() {
    const posts = await getAllPosts(false, { skip: 0, limit: 100 });
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function ObsoleteRoute({ params: { slug } }) {
    permanentRedirect(`/blog/${slug}`);
}
