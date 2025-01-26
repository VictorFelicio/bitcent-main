//import { mockUser } from "@/data/constants/mockUser";

import { useAuth } from "@/data/hooks/useAuth";

export function Welcome() {
	const { user } = useAuth();
	return (
		<div className={`text-3xl font-black`}>
			Olá <span className="hidden sm:inline">{user.name.split(" ")[0]}</span> 👋
		</div>
	);
}
