import { TransactionType } from "./TransactionType";

export interface Transaction {
	id?: string;
	description: string;
	value: number;
	date: Date;
	type: TransactionType;
}
