import { Transaction } from "@/logic/interface/Transaction";
import { ListRow } from "./ListRow";

interface ListTransactionsProps {
	transactions: Transaction[];
}

export function ListTransactions(props: ListTransactionsProps) {
	return (
		<div className="flex flex-col border border-zinc-700 rounded-xl overflow-hidden">
			{props.transactions.map((transaction, index) => (
				<ListRow
					key={transaction.id}
					transaction={transaction}
					index={index}
				/>
			))}
		</div>
	);
}
