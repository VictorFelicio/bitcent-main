/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { Transaction } from "@/logic/interface/Transaction";
import { useState } from "react";

export function useFormData(initialData: Transaction) {
	const [data, setData] = useState(initialData);

	function handleChangeData(key: keyof Transaction, fn?: Function) {
		return (value: any) => {
			const valueTarget = value?.target?.value ?? value;
			setData({ ...data, [key]: fn?.(valueTarget) ?? valueTarget });
		};
	}

	return {
		data,
		setData,
		handleChangeData,
	};
}
