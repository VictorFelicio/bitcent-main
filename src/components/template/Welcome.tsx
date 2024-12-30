import { mockUser } from "@/data/constants/mockUser";

export function Welcome() {
	const user = mockUser;

	return (
		<div className={`text-3xl font-black`}>
			Olá{" "}
			<span className="hidden sm:inline">{user.name.split(" ")[0]}</span>{" "}
			👋
		</div>
	);
}
