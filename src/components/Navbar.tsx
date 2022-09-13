import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../src/store/order-context";

const StyledNavbar = styled.nav`
	display: flex;
	border: 2px solid white;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	border-radius: 0.5rem;
	font-family: "Roboto Mono", monospace;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	height: 3.5rem;
`;

const StyledAppnameCard = styled.h1`
	margin-left: 2rem;
	letter-spacing: 0.5px;
`;

const StyledCartCard = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
	align-items: center;
	margin-right: 5rem;
	font-size: 2rem;
`;

const Navbar: React.FC<{ showModal: () => void }> = ({ showModal }) => {
	const ctx = useContext(OrderContext);

	return (
		<StyledNavbar>
			<StyledAppnameCard>KOCKKYSS</StyledAppnameCard>
			<StyledCartCard onClick={showModal}>{ctx.orders}</StyledCartCard>
		</StyledNavbar>
	);
};

export default Navbar;
