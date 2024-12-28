import { Wrapper } from '../common/Wrapper';
import Slogan from './Slogan';
import principal3 from '../../../../public/principal-3.jpg';
import { ResponsiveImage } from '../common/ResponsiveImage';

export function Highlight() {
    return (
        <Wrapper
            id="home"
            className="pt-20"
        >
            <div
                className={` 
                flex items-center justify-around
                h-[500px]
                `}
            >
                <Slogan />
                <ResponsiveImage
                    image={principal3}
                    className="rotate-3 hidden md:inline"
                />
            </div>
        </Wrapper>
    );
}
