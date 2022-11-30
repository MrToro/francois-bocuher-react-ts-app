import './Features.scss';
import images from './Features.Images';

function Features() {
  return (
		<section className='container features'>
			<h2 className='features__title'>What colors! what a variety! what a wealth of objects and ideas! This man has everything except the truth</h2>

			<div className='features__images-container'>
				<picture className='features__main-image'>
					<source srcSet={images.features_1.avif} type='image/avif' />
					<source srcSet={images.features_1.webp} type='image/webp' />
					<img src={images.features_1.def} alt='...' loading='lazy' decoding='async' draggable='false' />
				</picture>

				<picture className='features__side-image'>
					<source srcSet={images.features_2.avif} type='image/avif' />
					<source srcSet={images.features_2.webp} type='image/webp' />
					<img src={images.features_2.def} alt='...' loading='lazy' decoding='async' draggable='false' />
				</picture>

				<p className='features__description-container'>
					Artists who see how far this man has overcome the difficulties of painting and for whom it is all this merit that is hardly well known to them bend their knees before
					him. He is their god. The others don't care
				</p>
			</div>
		</section>
	);
}

export default Features
