import React from "react";
import styled from "styled-components";

const ImgWrapper = styled.div<{
	absolute?: boolean;
	width?: string;
	inset?: string;
}>`
	position: ${({ absolute }) => (absolute ? "absolute" : "relative")};
	inset: ${({ inset }) => (inset ? inset : "")};
	cursor: pointer;
`;

interface ImgType {
	src: string;
	alt: string;
	width: string;
	absolute?: boolean;
	inset?: string;
	onClick?: () => void;
}

export const Img = ({ src, alt, width, absolute, inset, onClick }: ImgType) => {
	return (
		<ImgWrapper absolute={absolute} inset={inset} onClick={onClick}>
			<img src={src} alt={alt} width={width} />
		</ImgWrapper>
	);
};
