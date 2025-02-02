import {
	Authentication,
	CancelMonitorinUser,
	MonitorinUser,
} from "@/logic/firebase/auth/Authentication";
import { Collection } from "@/logic/firebase/database/Collection";
import { User } from "@/logic/interface/Usuario";

export class ServicesUser {
	private _authentication = new Authentication();
	private _collection = new Collection();

	monitoringAuth(observer: MonitorinUser): CancelMonitorinUser {
		return this._authentication.monitoring(async (user) => {
			observer(user ? { ...user, ...(await this.consult(user.email)) } : null);
		});
	}

	async loginGoogle(): Promise<User | null> {
		const user = await this._authentication.loginGoogle();
		if (!user) return null;

		let userFirebase = await this.consult(user.email);
		if (!userFirebase) userFirebase = await this.save(user);
		return { ...user, ...userFirebase };
	}

	async save(user: User) {
		return await this._collection.save("users", user, user.email);
	}

	async consult(email: string) {
		return await this._collection.consultById("users", email);
	}
	async logout(): Promise<void> {
		await this._authentication.logout();
	}
}
