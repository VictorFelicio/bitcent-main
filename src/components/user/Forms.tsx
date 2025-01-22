import { useFormData } from "@/data/hooks/useFormData";
import { MiniForm } from "../template/MiniForm";
import { mockUser } from "@/data/constants/mockUser";
import { TextInput } from "@mantine/core";
import { User } from "@/logic/interface/Usuario";
import { Text } from "@/logic/utils/validations/Text";
import { CPF } from "@/logic/utils/validations/CPF";

export function Forms() {
	const { data, handleChangeData } = useFormData<User>(mockUser);
	return (
		<div className="flex flex-col gap-5">
			<MiniForm
				title="Seu Nome"
				description="Como você gostaria de ser chamado?"
				footerDescription="O nome deve possuir entre 3 e 20 caracteres!"
				save={() => {}}
				canSave={Text.validateTextlength(data.name, 3, 20, true)}>
				<TextInput
					value={data.name}
					onChange={handleChangeData("name")}
				/>
			</MiniForm>
			<MiniForm
				title="CPF"
				description="Seu CPF é usado internamente pelo sistema."
				footerDescription="Ele está protegido pela LGPD!"
				save={() => {}}
				canSave={true}>
				<TextInput
					value={CPF.format(data.cpf)}
					onChange={handleChangeData("cpf", CPF.extractDigits)}
				/>
			</MiniForm>
			<MiniForm
				title="Telefone"
				description="Usado para notificações importantes sobre sua conta."
				footerDescription="Deve ser um número nacional."
				save={() => {}}
				canSave={true}>
				<TextInput
					value={data.phone}
					onChange={handleChangeData("phone")}
				/>
			</MiniForm>
		</div>
	);
}
