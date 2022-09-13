import React from "react";
import FoodCard from "./FoodCard";
import styled from "styled-components";

const foods = [
	{ name: "Sushi", price: 49 },
	{ name: "Golonka", price: 19 },
	{ name: "Schweinhaxe", price: 29 },
	{ name: "Fläsklägg", price: 39 },
];

const FoodItemList = () => {
	return (
		<ListWrapper>
			{foods.map((item, idx) => {
				return (
					<li key={idx}>
						<FoodCard name={item.name} price={item.price} />
					</li>
				);
			})}
		</ListWrapper>
	);
};

export default FoodItemList;

const ListWrapper = styled.ul`
	display: flex;
	list-style: none;
	flex-direction: column;
	border: 2px solid white;
	padding: 1rem;
	gap: 1rem;
	border-radius: 0.5rem;
	background-color: #1f1f1f;
	color: white;
	font-family: "Roboto mono";
`;
