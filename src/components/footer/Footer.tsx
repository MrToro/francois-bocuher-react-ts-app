import './Footer.scss';
import images from './Footer.Images';

function Footer() {
	return (
		<footer className='container footer'>
			<div className='footer__nav-container'>
				<h4>Information</h4>

				<nav className='footer__nav'>
					<a href='#'>Artist</a>
					<a href='#'>Exhibitions</a>
					<a href='#'>FAQ</a>
					<a href='#'>Contact us</a>
				</nav>
			</div>

			<div className='footer__nav-container'>
				<h4>Other</h4>

				<nav className='footer__nav'>
					<a href='#'>Sitemap</a>
					<a href='#'>Terms of Use</a>
					<a href='#'>Privacy Policy</a>
					<a href='#'>Copyright Concerns</a>
				</nav>
			</div>

			<div className='footer__contact-container'>
				<div className='footer__contact'>
					<h4>Contacts</h4>
					<p>+10 967 452 3232</p>
				</div>

				<div className='footer__follow-us'>
					<h4>Follow us:</h4>

					<div className='footer__socials'>
						<a href='#'>
							<img src={images.socials.instagram} alt='Instagram Icon' />
						</a>
						<a href='#'>
							<img src={images.socials.facebook} alt='Facebook Icon' />
						</a>
						<a href='#'>
							<img src={images.socials.twitter} alt='Twitter Icon' />
						</a>
						<a href='#'>
							<img src={images.socials.tumblr} alt='Tumblr Icon' />
						</a>
					</div>
				</div>
			</div>

			<div className='footer__schedule-container'>
				<a className='footer__home-button' href='index.html'>
					<picture>
						<source srcSet={images.logo.avif} type='image/avif' />
						<source srcSet={images.logo.webp} type='image/webp' />
						<img src={images.logo.png}  alt='Image logo' loading='lazy' decoding='async' draggable='false' />
					</picture>
				</a>

				<p className='footer__schedule'>All other collectons and exibitions at the museum are open from Monday to Sunday between 10 am and 6 pm</p>
				<p className='footer__copy'>© 2021 MutualArt Services, Inc.</p>
			</div>
		</footer>
	);
}

export default Footer;
