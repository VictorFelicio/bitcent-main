import { TransactionEnum } from "../core/finances/enum/TransactionEnum";

export interface Transaction {
	id?: string;
	description: string;
	value: number;
	date: Date;
	type: TransactionEnum;
}

export const emptyTransaction: Transaction = {
	description: "",
	value: 0,
	date: new Date(),
	type: TransactionEnum.SPENDING,
};
