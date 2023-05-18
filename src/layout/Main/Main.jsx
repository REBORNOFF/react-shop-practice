import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../../config';

import { Loader } from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import CartList from '../../components/Cart/CartList/CartList';

const Main = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setloading] = useState(true);
	const [order, setOrder] = useState([]);
	const [showCart, setShowCart] = useState(false);

	const addToBasket = item => {
		const findIndex = order.findIndex(
			elem => elem.offerId === item.offerId
		);

		if (findIndex < 0) {
			const newItem = {
				...item,
				quantity: 1
			};

			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((elem, index) => {
				if (index === findIndex) {
					return {
						...elem,
						quantity: elem.quantity + 1
					};
				} else {
					return elem;
				}
			});

			setOrder(newOrder);
		}
	};

	const handleCartShow = () => {
		setShowCart(!showCart);
	};

	const deleteFromCart = itemId => {
		const newOrder = order.filter(elem => elem.offerId !== itemId);
		setOrder(newOrder);
	};

	const changeQuantityGoods = (itemId, type) => {
		const newOrder = order.map(elem => {
			if (elem.offerId === itemId) {
				if (type === 'increment') {
					return {
						...elem,
						quantity: elem.quantity + 1
					};
				} else if (type === 'decrement') {
					return {
						...elem,
						quantity: elem.quantity > 0 ? elem.quantity - 1 : 0
					};
				}
			} else {
				return elem;
			}
		});

		setOrder(newOrder);
	};

	useEffect(() => {
		fetch(API_URL, { headers: { Authorization: API_KEY } })
			.then(response => response.json())
			.then(data => {
				data.shop && setGoods(data.shop);
				setloading(false);
			})
			.catch(error => {
				console.error(error);
				setloading(false);
			});
	}, []);

	return (
		<main className='container content'>
			<Cart quantity={order.length} handleCartShow={handleCartShow} />
			{loading ? (
				<Loader />
			) : (
				<Card goods={goods} addToBasket={addToBasket} />
			)}
			{showCart && (
				<CartList
					order={order}
					handleCartShow={handleCartShow}
					deleteFromCart={deleteFromCart}
					changeQuantityGoods={changeQuantityGoods}
				/>
			)}
		</main>
	);
};

export default Main;
