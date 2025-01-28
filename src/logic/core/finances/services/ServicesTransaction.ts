import { Collection } from "@/logic/firebase/database/Collection";
import { Transaction } from "@/logic/interface/Transaction";
import { User } from "@/logic/interface/Usuario";

export class ServicesTransaction {
	private _collection = new Collection();

	async save(transaction: Transaction, user: User) {
		return this._collection.save(`finaces/${user.email}/transaction`, transaction);
	}
}
