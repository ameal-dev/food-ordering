import React, { useReducer } from "react";
const ADD = "ADD";
const REMOVE = "REMOVE";

const OrderContext = React.createContext({
	cart: {},
	foodsPrice: {},
	onChange: (action) => {},
	orders: 0,
	total: 0,
});

const initalState = {
	foodsAmount: { Sushi: 0, Golonka: 0, Schweinhaxe: 0, Fläsklägg: 0 },
	total: 0,
	orders: 0,
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case ADD: {
			const newState = {
				foodsAmount: {
					...state.foodsAmount,
					[payload.value]: state.foodsAmount[payload.value] + 1,
				},
				total: state.total + payload.price,
				orders: state.orders + 1,
			};
			console.log(newState);

			return newState;
		}
		case REMOVE: {
			if (state.foodsAmount[payload.value] > 0) {
				console.log(payload);
				const newState = {
					foodsAmount: {
						...state.foodsAmount,
						[payload.value]: state.foodsAmount[payload.value] - 1,
					},
					total: state.total - payload.price,
					orders: state.orders - 1,
				};
				console.log(newState);
				return newState;
			} else {
				return { ...state };
			}
		}
		default:
			return;
	}
};

export const OrderContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initalState);

	return (
		<OrderContext.Provider
			value={{
				cart: state.foodsAmount,
				foodsPrice: { Sushi: 49, Golonka: 19, Schweinhaxe: 29, Fläsklägg: 39 },
				total: state.total,
				onChange: dispatch,
				orders: state.orders,
			}}
		>
			{props.children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
