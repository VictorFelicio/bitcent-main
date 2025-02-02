import { Collection } from "@/logic/firebase/database/Collection";
import { Transaction } from "@/logic/interface/Transaction";
import { User } from "@/logic/interface/Usuario";

export class ServicesTransaction {
	private _collection = new Collection();

	async save(transaction: Transaction, user: User) {
		return this._collection.save(`finances/${user.email}/transactions`, transaction);
	}

	async get(user: User) {
		const path = `finances/${user.email}/transactions`;
		return this._collection.consult(path, "date", "asc");
	}
	async delete(transaction: Transaction, user: User) {
		const path = `finances/${user.email}/transactions`;
		return this._collection.delete(path, transaction.id);
	}
}
