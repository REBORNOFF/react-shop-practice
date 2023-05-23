import { useContext } from 'react';
import { ShopContext } from '../../context';

const Cart = () => {
	const { order, handleCartShow } = useContext(ShopContext);
	const quantity = order.length;

	return (
		<div className='cart red darken-4' onClick={handleCartShow}>
			<i className='material-icons small'>shopping_cart</i>
			{quantity ? (
				<span className='cart-quantity'>{quantity}</span>
			) : null}
		</div>
	);
};

export default Cart;
