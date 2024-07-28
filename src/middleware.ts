import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/app/common/api';

async function redirectPosts(request: NextRequest) {
    const posts = await getAllPosts(false, { skip: 0, limit: 1000 });
    const postSlugs = posts.map((post) => post.slug);

    if (postSlugs.includes(request.nextUrl.pathname.slice(1))) {
        const url = request.nextUrl.clone();
        url.pathname = `/blog${request.nextUrl.pathname}`;
        return NextResponse.redirect(url, { status: 308 });
    }
}

export async function middleware(request: NextRequest) {
    return redirectPosts(request);
}
