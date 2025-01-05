import { Transaction } from "@/logic/interface/Transaction";
import { IconTrendingDown2, IconTrendingUp2 } from "@tabler/icons-react";

interface TransactionTypeProps {
	transaction: Transaction;
}
export function TransactionType(props: TransactionTypeProps) {
	return (
		<span
			className={`
            flex justify-center items-center
            h-8 sm:w-10 p-1.5 rounded-full
            ${
				props.transaction.type === "earnings"
					? "bg-green-500"
					: "bg-red-500"
			}
            `}>
			{props.transaction.type === "earnings" ? (
				<IconTrendingUp2 />
			) : (
				<IconTrendingDown2 />
			)}
		</span>
	);
}
