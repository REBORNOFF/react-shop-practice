import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	showCart: false,
	alertName: ''
};

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' });
	};

	value.deleteFromCart = itemId => {
		dispatch({ type: 'DELETE_FROM_CART', payload: { id: itemId } });
	};

	value.handleCartShow = () => {
		dispatch({ type: 'HANDLE_CART_SHOW' });
	};

	value.addToBasket = item => {
		dispatch({ type: 'ADD_TO_BASKET', payload: item });
	};

	value.changeQuantityGoods = (itemId, type) => {
		dispatch({
			type: 'CHANGE_QUANTITY_GOODS',
			payload: { id: itemId, type }
		});
	};

	value.setGoods = data => {
		dispatch({ type: 'SET_GOODS', payload: data });
	};

	return (
		<ShopContext.Provider value={value}>{children}</ShopContext.Provider>
	);
};
