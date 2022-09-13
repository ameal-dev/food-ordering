import styled from "styled-components";

export const Container = styled.div<{ dark?: boolean }>`
	min-height: 100vh;
	height: 100%;
	width: 100vw;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ dark }) => (dark ? "#000" : "#000")};
	padding: 1rem;
`;

export const FlexWrapper = styled.div<{ col?: boolean }>`
	display: flex;
	flex-direction: ${({ col }) => (col ? "column" : "row")};
`;

export const BoxOne = styled.div<{
	dark?: boolean;
	padding?: string;
	absolute?: boolean;
	height?: string;
	top?: string;
	left?: string;
	col?: boolean;
	width?: string;
	bg?: string;
	border?: string;
	right?: string;
	radius?: string;
	bottom?: string;
	margin?: string;
	justify?: string;
	items?: string;
}>`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : "center")};
	align-items: ${({ items }) => (items ? items : "center")};
	position: ${({ absolute }) => (absolute ? "absolute" : "relative")};
	flex-direction: ${({ col }) => (col ? "column" : "row")};
	width: ${({ width }) => (width ? "px" : "200px")};
	height: ${({ height }) => (height ? "px" : "200px")};
	padding: ${({ padding }) => (padding ? padding : "0.75rem 0.5rem")};
	margin: ${({ margin }) => (margin ? margin : "")};
	top: ${({ top }) => (top ? top : "")};
	right: ${({ right }) => (right ? right : "")};
	box-shadow: ${({ dark }) =>
		dark ? "" : "0.9px 1.8px 1.8px hsl(0deg 0% 0% / 0.47)"};
	bottom: ${({ bottom }) => (bottom ? bottom : "")};
	font-family: "Roboto Mono", monospace;
	left: ${({ left }) => (left ? left : "")};
	background-color: ${({ dark }) => (dark ? "black" : "white")};
	border: ${({ dark }) => (dark ? "2px solid white" : "2px solid black")};
	border-radius: ${({ radius }) => (radius ? radius : "0.5rem")};
	color: ${({ dark }) => (dark ? "white" : "black")};
`;

export const Spacer = styled.div<{ width?: string; height?: string }>`
	width: ${({ width }) => (width ? width : "1rem")};
	height: ${({ height }) => (height ? height : "1rem")};
`;

export const InputOne = styled.input<{
	dark?: boolean;
	padding?: string;
	absolute?: boolean;
	top?: string;
	type?: string;
	left?: string;
	width?: string;
	right?: string;
	bottom?: string;
	margin?: string;
}>`
	padding: ${({ padding }) => (padding ? padding : "0.75rem 0.5rem")};
	margin: ${({ margin }) => (margin ? margin : "")};
	top: ${({ top }) => (top ? top : "")};
	right: ${({ right }) => (right ? right : "")};
	bottom: ${({ bottom }) => (bottom ? bottom : "")};
	left: ${({ left }) => (left ? left : "")};
	box-shadow: ${({ dark }) =>
		dark ? "" : "0.9px 1.8px 1.8px hsl(0deg 0% 0% / 0.47)"};
	border: 2px solid ${({ dark }) => (dark ? "white" : "black")};
	font-size: 1rem;
	/* type: ${({ type }) => (type ? type : "text")} */
	border-radius: 0.5rem;
	width: ${({ width }) => (width ? width : "")};
	height: ${({ height }) => (height ? height : "")};
	outline: none;
	font-family: "Roboto Mono", monospace;
	cursor: pointer;

	color: ${({ dark }) => (dark ? "white" : "black")};
	background-color: ${({ dark }) => (dark ? "black" : "white")};
	&:target,
	&:focus {
		background-color: ${({ dark }) => (dark ? "#1d1d1d" : "#e3e3e3")};
		/* border: 2px solid #ce796b; */
		/* border: 2px solid #586ba4; */
		border: 2px solid #50ffb1;
	}
	font-weight: 600;
	&::placeholder {
		color: ${({ dark }) => (dark ? "white" : "black")};
		font-style: italic;
		font-size: 0.8rem;
		opacity: 1;
	}
	&:focus::placeholder {
		color: ${({ dark }) => (dark ? "#1d1d1d" : "#e3e3e3")};
	}
`;

export const Button_Z = styled.button<{
	dark?: boolean;
	padding?: string;
	absolute?: boolean;
	flex?: string;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	height?: string;
	width?: string;
	radius?: string;
	margin?: string;
}>`
	padding: ${({ padding }) => (padding ? padding : "0.75rem 2rem")};
	margin: ${({ margin }) => (margin ? margin : "")};
	top: ${({ top }) => (top ? top : "")};
	display: flex;
	justify-content: center;
	align-items: center;
	right: ${({ right }) => (right ? right : "")};
	bottom: ${({ bottom }) => (bottom ? bottom : "")};
	left: ${({ left }) => (left ? left : "")};
	height: ${({ height }) => (height ? height : "")};
	border: 2px solid ${({ dark }) => (dark ? "white" : "black")};
	font-size: 1rem;
	font-family: "Roboto Mono", monospace;
	width: ${({ width }) => (width ? width : "")};
	letter-spacing: 1px;
	border-radius: ${({ radius }) => (radius ? radius : "0.5rem")};
	position: ${({ absolute }) => (absolute ? "absolute" : "relative")};
	cursor: pointer;
	box-shadow: ${({ dark }) =>
		dark ? "" : "0.9px 1.8px 1.8px hsl(0deg 0% 0% / 0.47)"};
	font-weight: 600;
	color: ${({ dark }) => (dark ? "white" : "black")};
	background-color: ${({ dark }) => (dark ? "black" : "white")};
	&:hover {
		background-color: ${({ dark }) => (dark ? "#1d1d1d" : "#e3e3e3")};
	}
	&:active {
		transform: scale(1.05, 1.1);
	}
`;
