import './Header.scss';
import images from './Header.Images';

import Navigation from '../navigation/Navigation';

function Header() {
	return (
		<header className='container header'>
			<a className='headaer__home-button' href='index.html'>
				<picture>
					<source srcSet={images.header_logo.avif} type='image/avif' />
					<source srcSet={images.header_logo.webp} type='image/webp' />
					<img src={images.header_logo.png} alt='Image logo' loading='lazy' decoding='async' draggable='false' />
				</picture>
			</a>

			<Navigation />
		</header>
	);
}

export default Header;
