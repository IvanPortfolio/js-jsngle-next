export function Tag({ tag }: { tag: string }) {
    return (
        <div className="bg-white dark:bg-dark rounded px-2 py-1 text-sm text-blue font-medium w-fit">
            {tag}
        </div>
    );
}
