export function Icon(props: { icon: any }) {
    return (
        <div className="h-[100px] w-full bg-white dark:bg-dark flex justify-center items-center rounded-lg">
            {props.icon}
        </div>
    );
}
