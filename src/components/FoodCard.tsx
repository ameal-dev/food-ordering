import React, { useContext } from "react";
import styled from "styled-components";
import { Spacer } from "./_atoms";
import { Img } from "./Img";
import OrderContext from "../store/order-context";

const FoodCard: React.FC<{ name: string; price: number }> = ({
	name,
	price,
}) => {
	const ctx = useContext(OrderContext);

	const handleRemove = () => {
		ctx.onChange({ type: "REMOVE", payload: { value: name, price: price } });
	};

	const handleAdd = () => {
		ctx.onChange({ type: "ADD", payload: { value: name, price: price } });
	};

	return (
		<CardWrapper>
			<FoodInfoCard>
				<Spacer height='40%' />
				<StyledName>{name}</StyledName>
				<Spacer height='0.5rem' />
				<div>{price + "$"}</div>
			</FoodInfoCard>
			<ButtonGroupWrapper>
				<Img
					src='./svg/icon__zebra_remove_dark.svg'
					alt='remove item'
					width='25rem'
					onClick={handleRemove}
				/>
				<Spacer />
				<StyledAmount>{ctx.cart[name]}</StyledAmount>
				<Spacer />
				<Img
					src='./svg/icon__zebra_add_dark.svg'
					alt='add item'
					width='25rem'
					onClick={handleAdd}
				/>
				<Spacer />
			</ButtonGroupWrapper>
			<Spacer width='1rem' />
		</CardWrapper>
	);
};

export default FoodCard;

const StyledName = styled.h3`
	margin: 0;
`;

const CardWrapper = styled.div`
	display: flex;
	border: 2px solid white;
	height: 8rem;
	width: 50vw;
	min-width: 400px;
	max-width: 600px;
	border-radius: 0.5rem;
	background-color: black;
	color: white;
	font-family: "Roboto mono";
`;

const FoodInfoCard = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 0 1rem;
`;

const StyledAmount = styled.h1`
	margin-bottom: 25px;
`;
const ButtonGroupWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
