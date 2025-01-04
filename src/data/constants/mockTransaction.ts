import { Id } from "@/logic/core/common/Id";
import { Transaction } from "@/logic/core/finances/Transaction";
import { TransactionType } from "@/logic/core/finances/TransactionType";

export const mockTransactions: Transaction[] = [
	{
		id: Id.genereateID(),
		description: "Burger King Largo Treze",
		value: 50.75,
		date: new Date("2023-01-15"),
		type: TransactionType.SPENDING,
	},
	{
		id: Id.genereateID(),
		description: "Salario",
		value: 1500.0,
		date: new Date("2023-01-01"),
		type: TransactionType.EARNINGS,
	},
	{
		id: Id.genereateID(),
		description: "C0nta de Luz",
		value: 75.2,
		date: new Date("2023-01-10"),
		type: TransactionType.SPENDING,
	},
	{
		id: Id.genereateID(),
		description: "Freelance projeto",
		value: 300.0,
		date: new Date("2023-01-20"),
		type: TransactionType.SPENDING,
	},
];
