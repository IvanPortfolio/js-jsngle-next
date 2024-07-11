import { MetadataRoute } from 'next';
import { getAllPosts } from '@/common/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPosts(false);

    const postsPages = posts.map((post) => ({
        url: `/blog/${post.slug}`,
        lastModified: post.sys.publishedAt,
        priority: 1,
    }));
    return [
        {
            url: '/',
            priority: 1.0,
        },
        {
            url: '/blog',
            priority: 1.0,
        },
        {
            url: '/contact',
            priority: 0.8,
        },
        {
            url: '/projects',
            priority: 0.8,
        },
        ...postsPages,
    ];
}