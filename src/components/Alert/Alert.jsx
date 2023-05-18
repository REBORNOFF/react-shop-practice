import { useEffect } from 'react';

const Alert = props => {
	const { name = '', closeAlert } = props;

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);

		return () => clearTimeout(timerId);
	}, [name]);

	return (
		<div id='toast-container' className='toast-wrapper'>
			<div className='toast'>{name} - added to the cart</div>
		</div>
	);
};

export default Alert;
