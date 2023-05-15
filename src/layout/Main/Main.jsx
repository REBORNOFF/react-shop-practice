import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../../config";

import { Loader } from "../../components/Loader/Loader";
import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";

const Main = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setloading] = useState(true);
	const [order, setOrder] = useState([]);

	const addToBasket = (itemId) => {
		const item = goods.find((item) => item.offerId === itemId);
		setOrder([...order, item]);
	};

	const getQuantityGoods = (arr) => {
		const cartQuantityObject = {};

		for (let item of arr) {
			cartQuantityObject[item.displayName] = cartQuantityObject[
				item.displayName
			]
				? cartQuantityObject[item.displayName] + 1
				: 1;
		}

		return Object.keys(cartQuantityObject).length;
	};

	useEffect(() => {
		fetch(API_URL, { headers: { Authorization: API_KEY } })
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop);
				setloading(false);
			})
			.catch((error) => {
				console.error(error);
				setloading(false);
			});
	}, []);

	return (
		<main className="container content">
			<Cart quantity={getQuantityGoods(order)} />
			{loading ? <Loader /> : <Card goods={goods} addToBasket={addToBasket} />}
		</main>
	);
};

export default Main;
