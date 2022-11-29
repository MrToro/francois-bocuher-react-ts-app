import { useState } from 'react';

import './Navigation.scss';
import images from './Navigation.Images';

function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = (event: any, value: boolean = !isMenuOpen) => {
		setIsMenuOpen(value);
	};

	const onScape = (event: any) => {
		if (event.key === 'Escape') {
			toggleMenu(false);
		}
	};

	const getActive = () => {
		return isMenuOpen ? 'active' : '';
	};

	return (
		<div className='nav' onKeyDown={onScape}>
			<nav className={`nav__list ${getActive()}`}>
				<a href='#' onClick={toggleMenu}>
					Artists
				</a>
				<a href='#' onClick={toggleMenu}>
					Auctions
				</a>
				<a href='#' onClick={toggleMenu}>
					Exhibitions
				</a>
				<a href='#' onClick={toggleMenu}>
					Analysis
				</a>
				<a href='#' onClick={toggleMenu}>
					Services
				</a>
				<img src={images.line.svg} alt='Line' draggable='false' loading='lazy' decoding='async' />
				<a href='#' onClick={toggleMenu} className='font-weight-700'>
					Join Now
				</a>
			</nav>

			<input type='button' className={`nav__toggle-button ${getActive()}`} onClick={toggleMenu} value='X' />
		</div>
	);
}

export default Navigation;
