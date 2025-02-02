import { TransactionEnum } from "@/logic/core/finances/enum/TransactionEnum";
import { Transaction } from "@/logic/interface/Transaction";
import { DataFormat } from "@/logic/utils/DataFormat";
import { MoneyFormat } from "@/logic/utils/MoneyFormat";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

interface GridcardProps {
	transaction: Transaction;
	selectedTransaction?: (transaction: Transaction) => void;
}

export function GridCard(props: GridcardProps) {
	return (
		<div
			className={`relative flex flex-col justify-between rounded-lg p-4 
						text-white overflow-hidden h-24 cursor-pointer`}
			onClick={() => props.selectedTransaction?.(props.transaction)}>
			<div
				className={`
						absolute top-0 left-0 w-full h-full
						bg-gradient-to-r opacity-60
						${
							props.transaction.type === TransactionEnum.EARNINGS
								? "from-teal-500 via-green-600 to-teal-700"
								: "from-pink-500 via-red-600 to-pink-700"
						}
					`}></div>
			<div className="flex justify-between items-center">
				<span className="z-10 font-light opacity-75">
					{props.transaction.description}
				</span>
				<span className="z-10 font-light opacity-75 text-xs">
					{DataFormat.type.dayMonth(props.transaction.date)}
				</span>
			</div>
			<span className="z-10 text-3xl from-black">
				{MoneyFormat.format(props.transaction.value)}
			</span>
			{props.transaction.type === TransactionEnum.EARNINGS ? (
				<IconTrendingUp
					size={40}
					stroke={1}
					className="absolute bottom-1 right-2 text-white opacity-10"
				/>
			) : (
				<IconTrendingDown
					size={40}
					stroke={1}
					className="absolute bottom-1 right-2 text-white opacity-10"
				/>
			)}
		</div>
	);
}
