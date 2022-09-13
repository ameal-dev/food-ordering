import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../src/components/globalstyles";
import { OrderContextProvider } from "../src/store/order-context";

const theme: DefaultTheme = {
	colors: {
		white: "#fff",
		black: "#000",
		bg_dark: "#141414",
		bg_light: "#e6e6e6",
	},
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<OrderContextProvider>
					<Component {...pageProps} />
				</OrderContextProvider>
			</ThemeProvider>
		</>
	);
}
