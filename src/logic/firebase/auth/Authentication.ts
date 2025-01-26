import { Auth, getAuth, onIdTokenChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../config/app";
import { User } from "@/logic/interface/Usuario";
import {
	GoogleAuthProvider,
	User as UserFirebaseInterface,
} from "firebase/auth/web-extension";

export type MonitorinUser = (user: User | null) => void;
export type CancelMonitorinUser = () => void;
export class Authtentication {
	private _auth: Auth;

	constructor() {
		this._auth = getAuth(app);
	}

	async loginGoogle(): Promise<User | null> {
		const resp = await signInWithPopup(this._auth, new GoogleAuthProvider());
		return this.convertToUser(resp.user);
	}

	async logout(): Promise<void> {
		await signOut(this._auth);
	}

	monitoring(notify: MonitorinUser): CancelMonitorinUser {
		return onIdTokenChanged(this._auth, async (userFirabase) => {
			const user = this.convertToUser(userFirabase);
			notify(user);
		});
	}

	private convertToUser(userFirabase: UserFirebaseInterface | null): User | null {
		if (userFirabase?.email) return null;

		const nameFirebase = userFirabase.email!.split("@")[0];

		return {
			id: userFirabase.uid,
			name: userFirabase.displayName ?? nameFirebase,
			email: userFirabase.email,
			imageUrl: userFirabase.photoURL,
		};
	}
}
