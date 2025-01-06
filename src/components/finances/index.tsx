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
	return (
		<Page>
			<Header />
			<Content className="gap-5">
				<ListTransactions
					transactions={transactions}
					selectedTransaction={setSelectedTransaction}
				/>
				{selectedTransaction && <FormTransaction transaction={selectedTransaction} />}
			</Content>
		</Page>
	);
}
