import Link from 'next/link';

interface MenuItemProps {
    children: React.ReactNode;
    url?: string;
    onClick?: () => void;
    className?: string;
}
export function MenuItem(props: MenuItemProps) {
    function renderButton() {
        return (
            <div
                className={`
        flex justify-center items-center cursor-pointer
        text-zinc-300 m-2 p-4 rounded-md h-9
        ${props.className}
        `}
                onClick={props.onClick}
            >
                {props.children}
            </div>
        );
    }

    return props.url ? (
        <Link href={props.url ?? ''}>{renderButton()}</Link>
    ) : (
        renderButton()
    );
}
