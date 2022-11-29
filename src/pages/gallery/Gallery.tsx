import './Gallery.scss';
import images from './Gallery.Images';

import Slider from '../../components/slider/Slider';

function Gallery() {
	return (
		<section className='container gallery'>
			<div className='gallery__info-container'>
				<h2>Absolutely Art Place</h2>
				<p>
					His rise to prominence was greatly due to his work as an illustrator for the then-booming pictorial press — an outlet that brought Homer’s imagery into hundreds of
					thousands of homes on a nearly weekly basis.
				</p>
			</div>

			<div className='gallery__slider-container slider'>
				<Slider images={images} />
			</div>
		</section>
	);
}

export default Gallery;
