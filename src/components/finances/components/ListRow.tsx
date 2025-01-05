import { Transaction } from "@/logic/interface/Transaction";
import { DataFormat } from "@/logic/utils/DataFormat";
import { MoneyFormat } from "@/logic/utils/MoneyFormat";
import { TransactionType } from "./TransactionType";

interface ListRowProps {
	transaction: Transaction;
	index: number;
}

export function ListRow(props: ListRowProps) {
	return (
		<div
			className={`flex items-center gap-3 p-3 cursor-pointer ${
				props.index % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"
			}`}
			onClick={() => console.log(props.transaction)}>
			<TransactionType transaction={props.transaction} />
			<span className="w-full md:w-1/2">
				{props.transaction.description}
			</span>
			<span className="hidden md:inline flex-1">
				{DataFormat.type.dayMonthYear(props.transaction.date)}
			</span>
			<span>{MoneyFormat.format(props.transaction.value)}</span>
		</div>
	);
}
