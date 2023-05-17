const CartItem = props => {
	const { offerId, displayName, finalPrice, quantity, deleteFromCart } =
		props;

	return (
		<li className='collection-item'>
			{displayName} x {quantity} = {finalPrice * quantity} ₽
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
