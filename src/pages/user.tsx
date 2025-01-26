import Content from "@/components/template/Content";
import { Header } from "@/components/template/Header";
import { Page } from "@/components/template/Page";
import TitlePage from "@/components/template/TitlePage";
import { Forms } from "@/components/user/Forms";
import { useAuth } from "@/data/hooks/useAuth";
//import { mockUser } from "@/data/constants/mockUser";
import { IconForms } from "@tabler/icons-react";

export default function CreateUser() {
	const { user } = useAuth();
	return (
		<Page>
			<Header />
			<Content>
				<TitlePage
					icon={<IconForms />}
					title="Dados Cadastrais"
					subtitle={`Informações de ${user.email}`}
				/>
				<Forms />
			</Content>
		</Page>
	);
}
