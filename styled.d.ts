import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			white: string;
			black: string;
			bg_dark: string;
			bg_light: string;
		};
	}
}
