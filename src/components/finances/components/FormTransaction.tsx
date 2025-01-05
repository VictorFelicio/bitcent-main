import "dayjs/locale/pt-br";
import { Transaction } from "@/logic/interface/Transaction";
import { Button, Group, Radio, TextInput } from "@mantine/core";
import { MoneyFormat } from "@/logic/utils/MoneyFormat";
import { DatePicker } from "@mantine/dates";
import { TransactionEnum } from "@/logic/core/finances/enum/TransactionEnum";

interface FormTransactionProps {
	transaction: Transaction;
}

export function FormTransaction(props: FormTransactionProps) {
	return (
		<div className="flex flex-col border border-zinc-700 rounded-xl overflow-hidden">
			<div className="bg-black py-3 px-7 text-zinc-400">Formulario</div>
			<div className="flex flex-col gap-4 p-4 sm:p-7">
				<TextInput
					label="Descrição"
					value={props.transaction.description}
				/>
				<TextInput
					label="Valor"
					value={MoneyFormat.format(props.transaction.value)}
				/>
				<DatePicker
					label="Data"
					value={props.transaction.date}
					locale="pt-BR"
					inputFormat="DD/MM/YYYY"
				/>
				<Radio.Group value={props.transaction.type}>
					<Group>
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
						color="green">
						Salvar
					</Button>
					<Button
						className="bg-zinc-500"
						color="gray">
						Cancelar
					</Button>
				</div>
				{props.transaction.id && (
					<Button
						className="bg-red-500"
						color="red">
						Excluir
					</Button>
				)}
			</div>
		</div>
	);
}
