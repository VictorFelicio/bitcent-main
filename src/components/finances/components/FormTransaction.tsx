import "dayjs/locale/pt-br";
import { Transaction } from "@/logic/interface/Transaction";
import { Button, Group, Radio, TextInput } from "@mantine/core";
import { MoneyFormat } from "@/logic/utils/MoneyFormat";
import { DatePicker } from "@mantine/dates";
import { TransactionEnum } from "@/logic/core/finances/enum/TransactionEnum";
import { useFormData } from "@/data/hooks/useFormData";

interface FormTransactionProps {
	transaction: Transaction;
	cancelTransaction?: () => void;
	deleteTransaction?: (transaction: Transaction) => void;
	saveTransaction?: (transaction: Transaction) => void;
}

export function FormTransaction(props: FormTransactionProps) {
	const { data, handleChangeData } = useFormData(props.transaction);
	return (
		<div className="flex flex-col border border-zinc-700 rounded-xl overflow-hidden">
			<div className="bg-black py-3 px-7 text-zinc-400">Formulario</div>
			<div className="flex flex-col gap-4 p-4 sm:p-7">
				<TextInput
					label="Descrição"
					value={data.description}
					onChange={handleChangeData("description")}
				/>
				<TextInput
					label="Valor"
					value={MoneyFormat.format(data.value)}
					onChange={handleChangeData("value", MoneyFormat.unformat)}
				/>
				<DatePicker
					label="Data"
					value={data.date}
					locale="pt-BR"
					inputFormat="DD/MM/YYYY"
					onChange={handleChangeData("date")}
				/>
				<Radio.Group value={data.type}>
					<Group onChange={handleChangeData("type")}>
						<Radio
							value={TransactionEnum.EARNINGS}
							label="Receita"
						/>
						<Radio
							value={TransactionEnum.SPENDING}
							label="Despesa"
						/>
					</Group>
				</Radio.Group>
			</div>
			<div className="flex px-4 sm:px-7 py-3 gap-3 bg-zinc-800 justify-between">
				<div className="flex gap-3">
					<Button
						className="bg-green-500"
						color="green"
						onClick={() => props.saveTransaction?.(data)}>
						Salvar
					</Button>
					<Button
						className="bg-zinc-500"
						color="gray"
						onClick={props.cancelTransaction}>
						Cancelar
					</Button>
				</div>
				{props.transaction.id && (
					<Button
						className="bg-red-500"
						color="red"
						onClick={() => props.deleteTransaction?.(data)}>
						Excluir
					</Button>
				)}
			</div>
		</div>
	);
}
