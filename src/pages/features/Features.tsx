import images from './Features.Images';

function Features() {
  return (
		<>
			<h2>What colors! what a variety! what a wealth of objects and ideas! This man has everything except the truth</h2>

			<picture>
				<source srcSet={images.features_1.avif} type='image/avif' />
				<source srcSet={images.features_1.webp} type='image/webp' />
				<img src={images.features_1.def} alt='...' loading='lazy' decoding='async' draggable='false' />
			</picture>

			<picture>
				<source srcSet={images.features_2.avif} type='image/avif' />
				<source srcSet={images.features_2.webp} type='image/webp' />
				<img src={images.features_2.def} alt='...' loading='lazy' decoding='async' draggable='false' />
			</picture>

			<p>
				Artists who see how far this man has overcome the difficulties of painting and for whom it is all this merit that is hardly well known to them bend their knees before him.
				He is their god. The others don't care
			</p>
		</>
	);
}

export default Features
