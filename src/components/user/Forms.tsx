import { useFormData } from "@/data/hooks/useFormData";
import { MiniForm } from "../template/MiniForm";
import { TextInput } from "@mantine/core";
import { User } from "@/logic/interface/Usuario";
import { Text } from "@/logic/utils/validations/Text";
import { CPF } from "@/logic/utils/validations/CPF";
import { Phone } from "@/logic/utils/validations/Phone";
import { useAuth } from "@/data/hooks/useAuth";
import { useEffect } from "react";

export function Forms() {
	const { user, updateUser } = useAuth();
	const { data, handleChangeData, setData } = useFormData<User>(user);

	useEffect(() => {
		if (!user) return;
		setData(user);
	}, [user, setData]);

	async function saveData() {
		if (!user) return;
		await updateUser(data);
	}

	return (
		<div className="flex flex-col gap-5 mt-7">
			<MiniForm
				title="Seu Nome"
				description="Como você gostaria de ser chamado?"
				footerDescription="O nome deve possuir entre 3 e 20 caracteres!"
				save={saveData}
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
				save={saveData}
				canSave={true}>
				<TextInput
					value={CPF.formatExibition(data.cpf)}
					onChange={handleChangeData("cpf", CPF.extractDigits)}
				/>
			</MiniForm>
			<MiniForm
				title="Telefone"
				description="Usado para notificações importantes sobre sua conta."
				footerDescription="Deve ser um número nacional."
				save={saveData}
				canSave={true}>
				<TextInput
					value={Phone.formatExibition(data.phone)}
					onChange={handleChangeData("phone", Phone.extractNumbers)}
				/>
			</MiniForm>
		</div>
	);
}
