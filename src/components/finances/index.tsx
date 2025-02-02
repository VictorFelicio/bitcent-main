import { Button, SegmentedControl } from "@mantine/core";
import { emptyTransaction } from "@/logic/interface/Transaction";
import { FormTransaction } from "./components/FormTransaction";
import { Header } from "../template/Header";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import { ListTransactions } from "./components/list/ListTransactions";
import { NotFoundContent } from "../template/NotFoundContent";
import { Page } from "../template/Page";
import Content from "../template/Content";
import { useTransactions } from "@/data/hooks/useTransactions";
import InputData from "../template/InputData";
import { useState } from "react";
import { GridTransaction } from "./components/grid/GridTransaction";
import Summary from "./components/summary/Summary";

type ListLayout = "list" | "grid";

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

	const [layout, setLayout] = useState<ListLayout>("list");

	function renderTransactions() {
		if (layout === "list") {
			return (
				<ListTransactions
					transactions={transactions}
					selectedTransaction={setSelectedTransaction}
				/>
			);
		} else {
			return (
				<GridTransaction
					transactions={transactions}
					selectedTransaction={setSelectedTransaction}
				/>
			);
		}
	}

	return (
		<Page>
			<Header />
			<Content className="gap-5">
				<Summary transactions={transactions} />
				<div className="flex justify-between">
					<InputData
						date={data}
						dataChange={setData}
					/>
					<div className="flex gap-2 items-center">
						<Button
							className="bg-blue-500"
							leftIcon={<IconPlus />}
							onClick={() => setSelectedTransaction(emptyTransaction)}>
							Nova Transação
						</Button>
						<SegmentedControl
							data={[
								{ label: <IconList />, value: "list" },
								{ label: <IconLayoutGrid />, value: "grid" },
							]}
							onChange={(type) => setLayout(type as ListLayout)}
						/>
					</div>
				</div>
				{selectedTransaction ? (
					<FormTransaction
						transaction={selectedTransaction}
						cancelTransaction={() => setSelectedTransaction(null)}
						deleteTransaction={deleteTransaction}
						saveTransaction={saveTransaction}
					/>
				) : transactions.length > 0 ? (
					renderTransactions()
				) : (
					<NotFoundContent>Nenhuma transação encontrada</NotFoundContent>
				)}
			</Content>
		</Page>
	);
}
