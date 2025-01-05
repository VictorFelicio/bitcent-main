import { Transaction } from "@/logic/interface/Transaction";
import { DataFormat } from "@/logic/utils/DataFormat";
import { MoneyFormat } from "@/logic/utils/MoneyFormat";

interface ListTransactionsProps {
	transactions: Transaction[];
}

export function ListTransactions(props: ListTransactionsProps) {
	function renderLine(transaction: Transaction, index: number) {
		return (
			<div
				key={transaction.id}
				className={`flex items-center gap-3 p-3 cursor-pointer ${
					index % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"
				}`}
				onClick={() => console.log(transaction)}>
				<span className="w-full md:w-1/2">
					{transaction.description}
				</span>
				<span className="hidden md:inline flex-1">
					{DataFormat.type.dayMonthYear(transaction.date)}
				</span>
				<span>{MoneyFormat.format(transaction.value)}</span>
			</div>
		);
	}

	return <div>{props.transactions.map(renderLine)}</div>;
}
