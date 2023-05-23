import CardItem from './CardItem/CardItem';
import { useContext } from 'react';
import { ShopContext } from '../../context';

const Card = () => {
	const { goods = [] } = useContext(ShopContext);

	if (!goods.length) <h3>Goods not found</h3>;

	return (
		<div className='goods'>
			{goods.map(item => (
				<CardItem key={item.offerId} {...item} />
			))}
		</div>
	);
};

export default Card;
