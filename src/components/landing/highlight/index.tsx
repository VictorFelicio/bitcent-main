import { Wrapper } from '../common/Wrapper';
import Slogan from './Slogan';

export function Highlight() {
    return (
        <Wrapper
            id="home"
            className="pt-20"
        >
            <div
                className={` 
                flex items-center
                h-[500px]
                `}
            >
                <Slogan />
            </div>
        </Wrapper>
    );
}
