export function BlogPostContent({ children }) {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg bg-gray dark:bg-white/10 hover:bg-light-blue-hover dark:hover:bg-white/15">
            {children}
        </div>
    );
}
