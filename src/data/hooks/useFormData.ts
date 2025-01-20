/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import { useState } from "react";

export function useFormData<G = any>(initialData: G) {
	const [data, setData] = useState(initialData);

	function handleChangeData(key: keyof G, fn?: Function) {
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
