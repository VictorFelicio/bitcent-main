import { service } from "@/logic/core";
import { User } from "@/logic/interface/Usuario";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextProps {
	isLoading: boolean;
	user: User | null;
	loginGoogle: () => Promise<User | null>;
	logout: () => Promise<void>;
	updateUser: (user: User) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
	isLoading: true,
	user: null,
	loginGoogle: async () => null,
	logout: async () => {},
	updateUser: async () => {},
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const cancel = service.user.monitoringAuth((user) => {
			setUser(user);
			setIsLoading(false);
		});

		return () => cancel();
	}, []);

	async function loginGoogle() {
		const user = await service.user.loginGoogle();
		setUser(user);
		return user;
	}

	async function logout() {
		await service.user.logout();
		setUser(null);
	}

	async function updateUser(newUser: User) {
		if (user && user.email !== newUser.email) return logout();
		if (user && newUser && user.email === newUser.email) {
			await service.user.save(newUser);
			setUser(newUser);
		}
	}
	return (
		<AuthContext.Provider
			value={{
				isLoading,
				user,
				loginGoogle,
				logout,
				updateUser,
			}}>
			{children}
		</AuthContext.Provider>
	);
}
