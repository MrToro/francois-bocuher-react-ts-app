import './Main.scss';
import images from './Main.Images';

function Main() {
	return (
		<main className='container main'>
			<div className='main__hero-container'>
				<div className='main__info'>
					<h1>Francois Boucher</h1>
					<p>Discover perhaps the most celebrated painter and decorative artist of the 18th century French painter, draughtsman and etcher, who worked in the Rococo style</p>
					<button className='btn btn--primary'>Start Course</button>

					<div className='main__statistics'>
						<div className='main__statictic'>
							<p className='main__statictic-heading'>12</p>
							<p className='main__statictic-description'>Halls</p>
						</div>

						<div className='main__statictic'>
							<p className='main__statictic-heading'>145</p>
							<p className='main__statictic-description'>Art Objects</p>
						</div>
					</div>
				</div>

				<div className='main__hero'>
					<div className='main__image-container'>
						<picture>
							<source srcSet={images.hero.avif} type='image/avif' />
							<source srcSet={images.hero.webp} type='image/webp' />
							<img src={images.hero.jpg} alt='...' loading='lazy' decoding='async' draggable='false' />
						</picture>
					</div>

					<div className='main__hero-border'></div>
				</div>

				<div className='main__socials-container'>
					<p className='main__date'>1703-1773</p>

					<div className='main__socials'>
						<a href='#'>Fb</a>
						<a href='#'>Ins</a>
						<a href='#'>Tw</a>
					</div>

					<div className='main__side-image'>
						<picture>
							<source srcSet={images.sideImage.avif} type='image/avif' />
							<source srcSet={images.sideImage.webp} type='image/webp' />
							<img src={images.sideImage.jpg} alt='...' loading='lazy' decoding='async' draggable='false' />
						</picture>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;
