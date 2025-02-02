import { Button } from "@mantine/core";
import { emptyTransaction } from "@/logic/interface/Transaction";
import { FormTransaction } from "./components/FormTransaction";
import { Header } from "../template/Header";
import { IconPlus } from "@tabler/icons-react";
import { ListTransactions } from "./components/ListTransactions";
import { NotFoundContent } from "../template/NotFoundContent";
import { Page } from "../template/Page";
import Content from "../template/Content";
import { useTransactions } from "@/data/hooks/useTransactions";
import InputData from "../template/InputData";

export function Finances() {
	const {
		transactions,
		selectedTransaction,
		data,
		setData,
		setSelectedTransaction,
		saveTransaction,
		deleteTransaction,
	} = useTransactions();

	return (
		<Page>
			<Header />
			<Content className="gap-5">
				<div className="flex justify-between">
					<InputData
						date={data}
						dataChange={setData}
					/>
					<Button
						className="bg-blue-500"
						leftIcon={<IconPlus />}
						onClick={() => setSelectedTransaction(emptyTransaction)}>
						Nova Transação
					</Button>
				</div>
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
