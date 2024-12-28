import Image from 'next/image';

interface ResponsiveImageProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any;
    className?: string;
}

export function ResponsiveImage(props: ResponsiveImageProps) {
    return (
        <Image
            src={props.image}
            alt="Picture of the author"
            className={`
                w-[100%] h-[120px]
                sm:w-[200px] sm:h-[330px]
                md:w-[350px] md:h-[365px]
                lg:w-[550px] lg:h-[365px]
                rounded-xl object-cover
                ${props.className ?? ''}
                `}
        />
    );
}
