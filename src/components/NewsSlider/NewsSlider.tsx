import { forwardRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './NewsSlider.module.scss';

interface SliderProps {
	title: string;
	description: string;
	imageUrl: string;
}

interface NewsSliderProps {
	newsItems: SliderProps[];
}

const NewsSlider = forwardRef<Slider, NewsSliderProps>(({ newsItems }, ref) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<div className={styles.newsSlider}>
			<Slider {...settings} ref={ref} arrows={false}>
				{newsItems.map((item, index) => (
					<div key={index} className={styles.newsSlider__slide}>
						<img src={item.imageUrl} alt={item.title} className={styles.img} />
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				))}
			</Slider>
		</div>
	);
});

export { NewsSlider };
