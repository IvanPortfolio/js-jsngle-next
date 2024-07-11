import Link from 'next/link';

export function PostLink({ slug, title }: { slug: string; title: string }) {
    return (
        <Link
            className="text-dark dark:text-white hover:underline text-lg font-semibold line-clamp-2"
            href={`/blog/${slug}`}
        >
            {title}
        </Link>
    );
}
