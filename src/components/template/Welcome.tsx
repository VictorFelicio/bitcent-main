export function Welcome() {
	const user = {
		name: "João Felício",
	};

	return (
		<div className={`text-3xl font-black`}>
			Olá{" "}
			<span className="hidden sm:inline">{user.name.split(" ")[0]}</span>{" "}
			👋
		</div>
	);
}
