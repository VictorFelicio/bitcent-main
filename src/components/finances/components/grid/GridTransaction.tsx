import { Transaction } from "@/logic/interface/Transaction";
import { GridCard } from "./GridCard";

interface GridTransactionProps {
	transactions: Transaction[];
	selectedTransaction?: (transaction: Transaction) => void;
}

export function GridTransaction(props: GridTransactionProps) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5">
			{props.transactions.map((t) => {
				return (
					<GridCard
						key={t.id}
						transaction={t}
						selectedTransaction={props.selectedTransaction}
					/>
				);
			})}
		</div>
	);
}
