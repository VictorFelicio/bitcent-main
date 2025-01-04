import { TransactionEnum } from "../core/finances/enum/TransactionType";

export interface Transaction {
	id?: string;
	description: string;
	value: number;
	date: Date;
	type: TransactionEnum;
}
