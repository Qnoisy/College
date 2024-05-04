// NewsSwiper.tsx
import { forwardRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './NewsSwiper.module.scss';

interface SliderProps {
	title: string;
	description: string;
	imageUrl: string;
}

interface NewsSwiperProps {
	newsItems: SliderProps[];
}

const NewsSwiper = forwardRef<Slider, NewsSwiperProps>(({ newsItems }, ref) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	return (
		<div className={styles.newsSwiper}>
			<Slider {...settings} ref={ref}>
				{newsItems.map((item, index) => (
					<div key={index} className={styles.swiperSlide}>
						<img src={item.imageUrl} alt={item.title} className={styles.img} />
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				))}
			</Slider>
		</div>
	);
});

export { NewsSwiper };
