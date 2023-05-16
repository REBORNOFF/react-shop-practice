import CardItem from './CardItem/CardItem';

const Card = ({ goods = [], addToBasket }) => {
	if (!goods.length) <h3>Goods not found</h3>;

	return (
		<div className='goods'>
			{goods.map(item => (
				<CardItem
					key={item.offerId}
					{...item}
					addToBasket={addToBasket}
				/>
			))}
		</div>
	);
};

export default Card;
