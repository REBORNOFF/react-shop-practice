const CartItem = props => {
	const {
		offerId,
		displayName,
		finalPrice,
		quantity,
		deleteFromCart,
		changeQuantityGoods
	} = props;

	return (
		<li className='collection-item'>
			{displayName}{' '}
			<i
				className='material-icons cart-quantity-items'
				onClick={() => changeQuantityGoods(offerId, 'decrement')}
			>
				remove
			</i>
			x{quantity}{' '}
			<i
				className='material-icons cart-quantity-items'
				onClick={() => changeQuantityGoods(offerId, 'increment')}
			>
				add
			</i>{' '}
			= {finalPrice * quantity} ₽
			<span
				className='secondary-content cart-delete'
				onClick={() => deleteFromCart(offerId)}
			>
				<i className='material-icons'>close</i>
			</span>
		</li>
	);
};

export default CartItem;
