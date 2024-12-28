interface WrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Wrapper(props: WrapperProps) {
    return (
        <div
            id={props.id ?? ''}
            className={`
                flex justify-center w-full
                 ${props.className ?? ''}                
                `}
        >
            <div
                className={`
                px-7 xl:px-0
                w-full xl:w-[1200px]               
                `}
            >
                {props.children}
            </div>
        </div>
    );
}
