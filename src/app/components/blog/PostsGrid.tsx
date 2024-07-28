export function PostsGrid({ children }) {
    return (
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">{children}</div>
    );
}
