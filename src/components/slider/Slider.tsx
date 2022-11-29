import { useState, useEffect } from 'react';

import './Slider.scss';
import ISliderPage from '../../interfaces/ISliderPage';

function Slider({ images }: { images: ISliderPage[] }) {
	const [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent(current === images.length - 1 ? 0 : current + 1);
	};

	return (
		<>
			<div className='slider__page'>
				<p className='slider__page-label'>{`${current + 1} / ${images.length}`}</p>

				<div className='slider__page-status-bar'>
					<div className='slider__page-status-bar--active' style={{ width: `${20 * (current + 1)}%` }}></div>
				</div>
			</div>

			<div className='slider__images'>
				{images.map((page, index) => {
					const getActive = () => (current == index ? 'active' : '');

					return (
						<figure key={index} className={`slider__image-container ${getActive()}`}>
							<picture>
								<source srcSet={page.image.avif} type='image/avif' />
								<source srcSet={page.image.webp} type='image/webp' />
								<img src={page.image.def} alt='...' onClick={next} loading='lazy' decoding='async' draggable='false' />
							</picture>

							<figcaption>{page.description}</figcaption>
						</figure>
					);
				})}
			</div>
		</>
	);
}

export default Slider;
