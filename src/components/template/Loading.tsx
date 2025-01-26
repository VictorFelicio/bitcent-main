import { Loader } from "@mantine/core";
import { Page } from "./Page";

export function Loading() {
	return (
		<Page
			external
			className="flex justify-center items-center gap-3">
			<span>Carregando</span>
			<Loader
				color="indigo"
				size="xl"
				variant="dots"
			/>
		</Page>
	);
}
