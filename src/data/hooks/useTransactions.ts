import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { Transaction } from "@/logic/interface/Transaction";
import { service } from "@/logic/core";

export function useTransactions() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
	const { user } = useAuth();

	useEffect(() => {
		getTransactions();
	}, []);

	async function getTransactions() {
		if (!user) return;
		const transactionFirebase = await service.transaction.get(user);
		setTransactions(transactionFirebase);
	}

	async function deleteTransaction(transaction: Transaction) {
		if (!user) return;
		await service.transaction.delete(transaction, user);
		await getTransactions();
		setSelectedTransaction(null);
	}

	async function saveTransaction(transaction: Transaction) {
		if (!user) return;
		await service.transaction.save(transaction, user);
		await getTransactions();
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
