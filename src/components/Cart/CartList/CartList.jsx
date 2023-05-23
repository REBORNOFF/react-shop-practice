import { useContext } from 'react';
import { ShopContext } from '../../../context';

import CartItem from './CartItem/CartItem';

const CartList = () => {
	const { order = [], handleCartShow } = useContext(ShopContext);

	const totalPrice = order.reduce((sum, item) => {
		return sum + item.finalPrice * item.quantity;
	}, 0);

	return (
		<ul className='collection cart-list'>
			<li className='collection-item active'>
				Cart
				<span
					className='secondary-content cart-close'
					onClick={handleCartShow}
				>
					<i className='material-icons'>close</i>
				</span>
			</li>
			{order.length ? (
				order.map(item => <CartItem key={item.offerId} {...item} />)
			) : (
				<li className='collection-item'>The basket is empty</li>
			)}
			<li className='collection-item active'>
				Total price: {totalPrice} ₽
			</li>
		</ul>
	);
};

export default CartList;
