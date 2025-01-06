import { Page } from "../template/Page";
import { Header } from "../template/Header";
import { ListTransactions } from "./components/ListTransactions";
import { mockTransactions } from "@/data/constants/mockTransaction";
import { FormTransaction } from "./components/FormTransaction";
import Content from "../template/Content";
import { useState } from "react";
import { Transaction } from "@/logic/interface/Transaction";

export function Finances() {
	const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
	const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

	function deleteTransaction(transaction: Transaction) {
		const newTransactions = transactions.filter((t) => t.id !== transaction.id);
		setTransactions(newTransactions);
		setSelectedTransaction(null);
	}
	return (
		<Page>
			<Header />
			<Content className="gap-5">
				{selectedTransaction ? (
					<FormTransaction
						transaction={selectedTransaction}
						cancelTransaction={() => setSelectedTransaction(null)}
						deleteTransaction={deleteTransaction}
					/>
				) : (
					<ListTransactions
						transactions={transactions}
						selectedTransaction={setSelectedTransaction}
					/>
				)}
			</Content>
		</Page>
	);
}
