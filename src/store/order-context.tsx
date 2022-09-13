import React, { useEffect, useReducer } from "react";
const ADD = "ADD";
const REMOVE = "REMOVE";

const OrderContext = React.createContext({
	cart: {},
	onAdd: (action) => {},
	onRemove: (action) => {},
	orders: 2,
});

const initalState = {
	foods: { Sushi: 0, Golonka: 0, Schweinhaxe: 0, Fläsklägg: 0 },
	total: 0,
	orders: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case ADD: {
			const newOrders = Object.values(state.foods).reduce(
				(a: number, b: number) => a + b,
				0
			);
			const newState = {
				foods: {
					...state.foods,
					[action.payload.value]: state.foods[action.payload.value] + 1,
				},
				total: state.total + action.payload.price,
				orders: newOrders,
			};
			//below solution works:
			// orders: state.orders + 1
			console.log(newState);
			return newState;
		}
		case REMOVE: {
			if (state.foods[action.payload.value] > 0) {
				const newOrders = Object.values(state.foods).reduce(
					(a: number, b: number) => a + b,
					0
				);
				const newState = {
					foods: {
						...state.foods,
						[action.payload.value]: state.foods[action.payload.value] - 1,
					},
					total: state.total - action.payload.price,
					orders: newOrders,
				};
				//below solution works:
				// orders: state.orders - 1
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
				cart: state.foods,
				onAdd: dispatch,
				onRemove: dispatch,
				orders: state.orders,
			}}
		>
			{props.children}
		</OrderContext.Provider>
	);
};

export default OrderContext;
