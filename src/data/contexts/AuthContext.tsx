import { Authtentication } from "@/logic/firebase/auth/Authentication";
import { User } from "@/logic/interface/Usuario";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextProps {
	isLoading: boolean;
	user: User | null;
	loginGoogle: () => Promise<User | null>;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
	isLoading: true,
	user: null,
	loginGoogle: async () => null,
	logout: () => {},
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [user, setUser] = useState<User | null>(null);
	const authentication = new Authtentication();

	useEffect(() => {
		const cancel = authentication.monitoring((user) => {
			setUser(user);
			setIsLoading(false);
		});

		return () => cancel();
	}, []);

	async function loginGoogle() {
		const user = await authentication.loginGoogle();
		setUser(user);
		return user;
	}

	async function logout() {
		await authentication.logout();
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{
				isLoading,
				user,
				loginGoogle,
				logout,
			}}>
			{children}
		</AuthContext.Provider>
	);
}
