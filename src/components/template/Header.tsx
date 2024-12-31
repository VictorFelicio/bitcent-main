import { MenuUser } from "./MenuUser";
import { Welcome } from "./Welcome";

export function Header() {
	return (
		<div>
			<Welcome />
			<MenuUser />
		</div>
	);
}
