import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { Transaction } from "@/logic/interface/Transaction";
import { Id } from "@/logic/core/common/Id";
import { service } from "@/logic/core";
import { User } from "@/logic/interface/Usuario";

export function useTransactions() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
	const { user } = useAuth();

	useEffect(() => {
		getTransactions(user);
	}, []);

	async function getTransactions(user: User) {
		if (!user) return;
		const transactionFirebase = await service.transaction.get(user);
		setTransactions(transactionFirebase);
	}

	function deleteTransaction(transaction: Transaction) {
		const newTransactions = transactions.filter((t) => t.id !== transaction.id);
		setTransactions(newTransactions);
		setSelectedTransaction(null);
	}

	function saveTransaction(transaction: Transaction) {
		if (!user) return;
		const olderTransactions = transactions.filter((t) => {
			return t.id != transaction.id;
		});

		setTransactions([
			...olderTransactions,
			{ ...transaction, id: transaction.id ?? Id.genereateID() },
		]);

		service.transaction.save(transaction, user);

		setSelectedTransaction(null);
	}

	return {
		transactions,
		selectedTransaction,
		saveTransaction,
		deleteTransaction,
		setSelectedTransaction,
	};
}
