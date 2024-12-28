import { Logo } from "../common/Logo";
import { Wrapper } from "../common/Wrapper";
import { Menu } from "./Menu";

export function Header() {
    return (
        <Wrapper className="fixed z-10 bg-black">
            <div className="flex items-center justify-between h-20">
                <Logo />
                <Menu />
            </div>
        </Wrapper>
    );
}
