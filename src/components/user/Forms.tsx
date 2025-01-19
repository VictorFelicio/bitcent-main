import { MiniForm } from "../template/MiniForm";

export function Forms() {
	return (
		<div>
			<MiniForm
				title="Seu Nome"
				description="Como você gostaria de ser chamado?"
				footerDescription="O nome deve possuir entre 3 e 15 caracteres!"
				save={() => {}}
				canSave={true}>
				opa
			</MiniForm>
		</div>
	);
}
