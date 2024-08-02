export function Heading({ children }: { children: any }) {
    return (
        <h3 className="text-lg font-semibold text-dark dark:text-white">
            {children}
        </h3>
    );
}
