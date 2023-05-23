export function reducer(state, action) {
	switch (action.type) {
		case 'SET_GOODS': {
			return {
				...state,
				goods: action.payload || [],
				loading: false
			};
		}
		case 'ADD_TO_BASKET': {
			const findIndex = state.order.findIndex(
				elem => elem.offerId === action.payload.offerId
			);

			let newOrder = null;

			if (findIndex < 0) {
				const newItem = {
					...action.payload,
					quantity: 1
				};

				newOrder = [...state.order, newItem];

				return {
					...state,
					order: newOrder,
					alertName: action.payload.displayName
				};
			} else {
				newOrder = state.order.map((elem, index) => {
					if (index === findIndex) {
						return {
							...elem,
							quantity: elem.quantity + 1
						};
					} else {
						return elem;
					}
				});
			}

			return {
				...state,
				order: newOrder,
				alertName: action.payload.displayName
			};
		}
		case 'CHANGE_QUANTITY_GOODS': {
			const newOrder = state.order.map(elem => {
				if (elem.offerId === action.payload.id) {
					if (action.payload.type === 'increment') {
						return {
							...elem,
							quantity: elem.quantity + 1
						};
					} else if (action.payload.type === 'decrement') {
						return {
							...elem,
							quantity: elem.quantity > 0 ? elem.quantity - 1 : 0
						};
					}
				} else {
					return elem;
				}
			});

			return {
				...state,
				order: newOrder
			};
		}
		case 'CLOSE_ALERT':
			return {
				...state,
				alertName: ''
			};
		case 'DELETE_FROM_CART':
			return {
				...state,
				order: state.order.filter(
					elem => elem.offerId !== action.payload.id
				)
			};
		case 'HANDLE_CART_SHOW':
			return {
				...state,
				showCart: !state.showCart
			};
		default:
			return state;
	}
}
