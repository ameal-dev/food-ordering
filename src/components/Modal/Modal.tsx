import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import OrderContext from "../../../src/store/order-context";
import { Img } from "../../../src/components/Img";
import { Spacer } from "../../../src/components/_atoms";
import { Button_Z } from "../../../src/components/_atoms";

const TotalAmount = styled.div`
	display: flex;
	height: 100px;
	align-items: center;
`;

const AmountText = styled.div`
	flex: 1;
	font-weight: bold;
	font-size: 2rem;
`;

const AmountValue = styled.h2`
	display: flex;
	font-size: 2rem;
`;

const ModalOverlayWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.9);
`;

const ModalBox = styled.div`
	padding: 1rem;
	width: 50%;
	min-width: 300px;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	border: 2px solid white;
	border-radius: 0.5rem;
	position: relative;
	color: white;
	background-color: black;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CartItem = styled.div`
	width: 100%;
	display: flex;
	height: 5rem;
	border-bottom: 2px solid white;
`;

const FoodName = styled.div`
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.5rem;
	flex: 1;
`;

const StyledAmount = styled.h1`
	margin-bottom: 25px;
`;
const ButtonGroupWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CartModal = ({ show, closeModal }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	const ctx = useContext(OrderContext);

	const handleOrder = () => {
		console.log("Ordering...");
	};

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const modal = show ? (
		<ModalOverlayWrapper>
			<ModalBox>
				<Title>
					<h1>Cart</h1>
				</Title>
				{Object.entries(ctx.cart).map((elem, idx) => {
					if (elem[1]) {
						return (
							<CartItem key={idx}>
								<Spacer />
								<FoodName>{elem[0]}</FoodName>
								<ButtonGroupWrapper>
									<Img
										src='./svg/icon__zebra_remove_dark.svg'
										alt='remove item'
										width='25rem'
										onClick={() =>
											ctx.onChange({
												type: "REMOVE",
												payload: {
													value: elem[0],
													price: ctx.foodsPrice[elem[0]],
												},
											})
										}
									/>
									<Spacer />
									<StyledAmount>{`${elem[1]}`}</StyledAmount>
									<Spacer />
									<Img
										src='./svg/icon__zebra_add_dark.svg'
										alt='add item'
										width='25rem'
										onClick={() =>
											ctx.onChange({
												type: "ADD",
												payload: {
													value: elem[0],
													price: ctx.foodsPrice[elem[0]],
												},
											})
										}
									/>
									<Spacer />
								</ButtonGroupWrapper>
							</CartItem>
						);
					}
				})}
				<Img
					src='./svg/icon__zebra_abort_dark.svg'
					width='30px'
					alt='close cart'
					absolute
					inset='-15px 0 95% 97.5%'
					onClick={closeModal}
				/>
				<TotalAmount>
					<Spacer />
					<AmountText>Total Amount:</AmountText>
					<AmountValue>{`${ctx.total} $`}</AmountValue>
					<Spacer />
				</TotalAmount>

				{ctx.orders ? (
					<>
						<Button_Z dark onClick={handleOrder}>
							ORDER
						</Button_Z>
						<Spacer />
					</>
				) : (
					""
				)}
			</ModalBox>
		</ModalOverlayWrapper>
	) : (
		""
	);

	if (isBrowser) {
		return ReactDOM.createPortal(modal, document.getElementById("modal"));
	} else {
		return null;
	}
};

export default CartModal;
