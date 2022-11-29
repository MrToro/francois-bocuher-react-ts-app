import './Join.scss';
import images from './Join.Images';

function Join() {
	return (
		<section className='container join'>
			<h2 className='join__title'>Join Mutual Art</h2>

			<div className='join__info-container'>
				<p>View similar artwork results for upcoming and sold lots, create and download custom artist reports and discover new artists by style, activity periods and more.</p>

				<button className='btn after-circle-right'>Start Course</button>
			</div>

			<div className='join__arts-container'>
				<p>Join over 1 Million members to continue using the most comprehensive art information service online</p>

				<div className='join__arts'>
					<div className='art'>
						<picture>
							<source srcSet={images.join_1.avif} type='image/avif' />
							<source srcSet={images.join_1.webp} type='image/webp' />
							<img src={images.join_1.jpg} alt='...' loading='lazy' decoding='async' draggable='false' />
						</picture>

						<p>Diane sortant du bain Louvre</p>
					</div>

					<div className='art'>
						<picture>
							<source srcSet={images.join_2.avif} type='image/avif' />
							<source srcSet={images.join_2.webp} type='image/webp' />
							<img src={images.join_2.jpg} alt='...' loading='lazy' decoding='async' draggable='false' />
						</picture>

						<p>Geniuses of the arts</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Join;
