const CardItem = (props) => {
	const {
		offerId,
		displayName,
		displayDescription,
		price,
		displayAssets,
		addToBasket,
	} = props;

	return (
		<div className="card" id={offerId}>
			<div className="card-image">
				<img src={displayAssets[0]?.background} alt={displayName} />
			</div>
			<div className="card-content">
				<span className="card-title">{displayName}</span>
				<p>{displayDescription}</p>
			</div>
			<div className="card-actions">
				<button className="card-button" onClick={() => addToBasket(offerId)}>
					Buy
				</button>
				<span className="right card-price">{price?.regularPrice} rub.</span>
			</div>
		</div>
	);
};

export default CardItem;
