import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function calculateReadingTime(markdownText: string): number {
    // Remove Markdown syntax to get plain text
    const plainText = markdownText
        .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
        .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
        .replace(/`{1,3}.*?`{1,3}/g, '') // Remove inline code
        .replace(/```.*?```/gs, '') // Remove code blocks
        .replace(/#+\s/g, '') // Remove headers
        .replace(/>+/g, '') // Remove blockquotes
        .replace(/[*_~]/g, '') // Remove formatting characters
        .replace(/\n+/g, ' ') // Replace newlines with spaces
        .trim();

    // Count words
    const words = plainText.split(/\s+/).length;

    // Calculate reading time
    const wordsPerMinute = 200;
    return Math.ceil(words / wordsPerMinute);
}
