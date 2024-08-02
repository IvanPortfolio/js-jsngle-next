import { MetadataRoute } from 'next';
import { getAllPosts } from '@/common/api';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPosts(false, { skip: 0, limit: 1000 });

    const headersList = headers();
    const protocol = headersList.get('x-forwarded-proto');
    const host = headersList.get('host');
    const baseUrl = `${protocol}://${host}`;
    const postsPages = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.sys.publishedAt,
        priority: 1,
    }));
    return [
        {
            url: `${baseUrl}`,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blog`,
            priority: 1.0,
            changeFrequency: 'weekly',
        },
        {
            url: `${baseUrl}/projects`,
            priority: 0.8,
        },
        ...postsPages,
    ];
}
