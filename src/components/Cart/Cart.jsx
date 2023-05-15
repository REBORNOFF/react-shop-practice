const Cart = (props) => {
	const { quantity = 0 } = props;

	return (
		<div className="cart red darken-4">
			<i className="material-icons small">shopping_cart</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	);
};

export default Cart;
