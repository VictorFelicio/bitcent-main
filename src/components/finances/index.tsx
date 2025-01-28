import { Page } from "../template/Page";
import { Header } from "../template/Header";
import { ListTransactions } from "./components/ListTransactions";
import { mockTransactions } from "@/data/constants/mockTransaction";
import { FormTransaction } from "./components/FormTransaction";
import Content from "../template/Content";
import { useState } from "react";
import { emptyTransaction, Transaction } from "@/logic/interface/Transaction";
import { NotFoundContent } from "../template/NotFoundContent";
import { Id } from "@/logic/core/common/Id";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { ServicesTransaction } from "@/logic/core/finances/services/ServicesTransaction";

export function Finances() {
	const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
	const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

	function deleteTransaction(transaction: Transaction) {
		const newTransactions = transactions.filter((t) => t.id !== transaction.id);
		setTransactions(newTransactions);
		setSelectedTransaction(null);
	}

	function saveTransaction(transaction: Transaction) {
		const olderTransactions = transactions.filter((t) => {
			return t.id != transaction.id;
		});

		setTransactions([
			...olderTransactions,
			{ ...transaction, id: transaction.id ?? Id.genereateID() },
		]);

		new ServicesTransaction().save(selectedTransaction);

		setSelectedTransaction(null);
	}

	return (
		<Page>
			<Header />
			<Content className="gap-5">
				<Button
					className="bg-blue-500"
					leftIcon={<IconPlus />}
					onClick={() => setSelectedTransaction(emptyTransaction)}>
					Nova Transação
				</Button>
				{selectedTransaction ? (
					<FormTransaction
						transaction={selectedTransaction}
						cancelTransaction={() => setSelectedTransaction(null)}
						deleteTransaction={deleteTransaction}
						saveTransaction={saveTransaction}
					/>
				) : transactions.length > 0 ? (
					<ListTransactions
						transactions={transactions}
						selectedTransaction={setSelectedTransaction}
					/>
				) : (
					<NotFoundContent>Nenhuma transação encontrada</NotFoundContent>
				)}
			</Content>
		</Page>
	);
}
