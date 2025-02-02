import { Collection } from "@/logic/firebase/database/Collection";
import { Transaction } from "@/logic/interface/Transaction";
import { User } from "@/logic/interface/Usuario";
import { DataFormat } from "@/logic/utils/DataFormat";

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

	async getByMonth(user: User, date: Date) {
		const path = `finances/${user.email}/transactions`;
		return await this._collection.consultWithFilter(path, [
			{ attrb: "date", operation: ">=", value: DataFormat.getFirstDay(date) },
			{ attrb: "date", operation: "<=", value: DataFormat.getLastDay(date) },
		]);
	}
}
