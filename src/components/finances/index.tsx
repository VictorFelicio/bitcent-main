import { Page } from "../template/Page";
import { Header } from "../template/Header";
import { ListTransactions } from "./components/ListTransactions";
import { mockTransactions } from "@/data/constants/mockTransaction";

export function Finances() {
	return (
		<Page>
			<Header />
			<ListTransactions transactions={mockTransactions} />
		</Page>
	);
}
