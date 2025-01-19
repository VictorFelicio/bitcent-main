import Content from "@/components/template/Content";
import { Header } from "@/components/template/Header";
import { Page } from "@/components/template/Page";
import TitlePage from "@/components/template/TitlePage";
import { Forms } from "@/components/user/Forms";
import { mockUser } from "@/data/constants/mockUser";
import { IconForms } from "@tabler/icons-react";

export default function CreateUser() {
	return (
		<Page>
			<Header />
			<Content>
				<TitlePage
					icon={<IconForms />}
					title="Dados Cadastrais"
					subtitle={`Informações de ${mockUser.email}`}
				/>
				<Forms />
			</Content>
		</Page>
	);
}
