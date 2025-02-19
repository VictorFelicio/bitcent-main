import { AuthContextProvider } from "@/data/contexts/AuthContext";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider theme={{ colorScheme: "dark" }}>
			<AuthContextProvider>
				<Component {...pageProps} />;
			</AuthContextProvider>
		</MantineProvider>
	);
}
