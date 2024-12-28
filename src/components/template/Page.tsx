interface PageProps {
    external?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function Page(props: PageProps) {
    return (
        <div
            className={`
        flex flex-col min-h-screen
        bg-gradient-to-r from-zinc-900 via-black to-zinc-900
        ${props.className ?? ''}
        `}
        >
            {props.children}
        </div>
    );
}
