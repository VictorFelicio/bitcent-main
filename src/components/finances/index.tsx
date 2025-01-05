import { mockTransactions } from "@/data/constants/mockTransaction";
import { Header } from "../template/Header";
import { Page } from "../template/Page";
import { ListTransactions } from "./ListTransactions";

export function Finances() {
	return (
		<Page>
			<Header />
			<ListTransactions transactions={mockTransactions} />
		</Page>
	);
}
