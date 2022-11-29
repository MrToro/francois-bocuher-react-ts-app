import './Slider.scss';
import ISliderPage from '../../interfaces/ISliderPage';

function Slider({ images }: { images: ISliderPage[] }) {
	return (
		<>
			<div className='slider__page'>
				<p className='slider__page-label'>1 / {images.length}</p>

				<div className='slider__page-status-bar'>
					<div className='slider__page-status-bar--active'></div>
				</div>
			</div>

			<div className='slider__images'>
				{images.map((page, index) => (
					<figure key={index} className='slider__image-container'>
						<picture>
							<source srcSet={page.image.avif} type='image/avif' />
							<source srcSet={page.image.webp} type='image/webp' />
							<img src={page.image.def} alt='...' loading='lazy' decoding='async' draggable='false' />
						</picture>

						<figcaption>{page.description}</figcaption>
					</figure>
				))}
			</div>
		</>
	);
}

export default Slider;
