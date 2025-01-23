import { Auth, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../config/app";
import { User } from "@/logic/interface/Usuario";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
export class Authtentication {
	private _auth: Auth;

	constructor() {
		this._auth = getAuth(app);
	}

	async loginGoogle(): Promise<User | null> {
		const resp = signInWithPopup(this._auth, new GoogleAuthProvider());
		await resp.user;
	}

	async logout(): Promise<void> {
		await signOut(this._auth);
	}
}
