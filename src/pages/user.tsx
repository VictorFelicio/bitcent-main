import { Header } from "@/components/template/Header";
import { Page } from "@/components/template/Page";
import { mockUser } from "@/data/constants/mockUser";

export default function CreateUser() {
	return (
		<Page>
			<Header />
			<div>{`Usuarios cadastrar ${mockUser.name}`}</div>
		</Page>
	);
}
