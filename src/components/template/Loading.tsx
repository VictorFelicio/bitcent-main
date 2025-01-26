import { Loader } from "@mantine/core";
import { Page } from "./Page";

export function Loading() {
	return (
		<Page
			external
			className="flex justify-center items-center">
			<Loader
				color="indigo"
				size="xl"
				variant="dots"
			/>
		</Page>
	);
}
