import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../../config';

import { Loader } from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';

const Main = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setloading] = useState(true);
	const [order, setOrder] = useState([]);

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

	console.log(order);

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
			<Cart quantity={order.length} />
			{loading ? (
				<Loader />
			) : (
				<Card goods={goods} addToBasket={addToBasket} />
			)}
		</main>
	);
};

export default Main;
