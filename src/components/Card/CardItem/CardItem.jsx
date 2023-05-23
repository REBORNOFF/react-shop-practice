import { useContext } from 'react';
import { ShopContext } from '../../../context';

const CardItem = props => {
	const { offerId, displayName, displayDescription, price, displayAssets } =
		props;

	const { finalPrice } = price;
	const { addToBasket } = useContext(ShopContext);

	return (
		<div className='card' id={offerId}>
			<div className='card-image'>
				<img src={displayAssets[0]?.background} alt={displayName} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{displayName}</span>
				<p>{displayDescription}</p>
			</div>
			<div className='card-actions'>
				<button
					className='card-button'
					onClick={() =>
						addToBasket({ offerId, displayName, finalPrice })
					}
				>
					Buy
				</button>
				<span className='right card-price'>{finalPrice} ₽</span>
			</div>
		</div>
	);
};

export default CardItem;
