import React, { useEffect } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../context';
import { API_URL, API_KEY } from '../../config';

import { Loader } from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import CartList from '../../components/Cart/CartList/CartList';
import Alert from '../../components/Alert/Alert';

const Main = () => {
	const { setGoods, loading, showCart, alertName } = useContext(ShopContext);

	useEffect(() => {
		fetch(API_URL, { headers: { Authorization: API_KEY } })
			.then(response => response.json())
			.then(data => setGoods(data.shop))
			.catch(error => {
				console.error(error);
				loading(false);
			});
	}, []);

	return (
		<main className='container content'>
			<Cart />
			{loading ? <Loader /> : <Card />}
			{showCart && <CartList />}
			{alertName && <Alert />}
		</main>
	);
};

export default Main;
