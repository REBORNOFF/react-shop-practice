const Cart = props => {
	const { quantity = 0, handleCartShow } = props;

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
