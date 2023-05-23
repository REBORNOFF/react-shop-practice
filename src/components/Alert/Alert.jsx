import { useEffect, useContext } from 'react';
import { ShopContext } from '../../context';

const Alert = () => {
	const { alertName, closeAlert } = useContext(ShopContext);

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);

		return () => clearTimeout(timerId);
	}, [alertName]);

	return (
		<div id='toast-container' className='toast-wrapper'>
			<div className='toast'>{alertName} - added to the cart</div>
		</div>
	);
};

export default Alert;
