import { Id } from "@/logic/core/common/Id";
import { Transaction } from "@/logic/interface/Transaction";
import { TransactionEnum } from "@/logic/core/finances/enum/TransactionEnum";

export const mockTransactions: Transaction[] = [
	{
		id: Id.genereateID(),
		description: "Burger King Largo Treze",
		value: 50.75,
		date: new Date("2023-01-01"),
		type: TransactionEnum.SPENDING,
	},
	{
		id: Id.genereateID(),
		description: "Salário",
		value: 1500.0,
		date: new Date("2023-01-01"),
		type: TransactionEnum.EARNINGS,
	},
	{
		id: Id.genereateID(),
		description: "Conta de Luz",
		value: 75.2,
		date: new Date("2023-01-10"),
		type: TransactionEnum.SPENDING,
	},
	{
		id: Id.genereateID(),
		description: "Freelance projeto",
		value: 300.0,
		date: new Date("2023-01-20"),
		type: TransactionEnum.SPENDING,
	},
];
