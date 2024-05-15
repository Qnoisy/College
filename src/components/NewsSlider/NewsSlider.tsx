import { forwardRef, useRef } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Arrow from './Arrow/Arrow';
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
		arrows: false,
	};
	const sliderRef = useRef<Slider>(null);

	const handleNext = () => {
		sliderRef.current?.slickNext();
	};
	const handlePrev = () => {
		sliderRef.current?.slickPrev();
	};

	return (
		<div className={styles.newsSlider}>
			<Arrow
				direction='left'
				onClick={handlePrev}
				className={styles.arrows__left}
			>
				<AiFillCaretLeft className={styles.arrowIcon} />
			</Arrow>

			<Slider {...settings} ref={sliderRef}>
				{newsItems.map((item, index) => (
					<div key={index} className={styles.newsSlider__slide}>
						<img src={item.imageUrl} alt={item.title} className={styles.img} />
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				))}
			</Slider>

			<Arrow
				direction='right'
				onClick={handleNext}
				className={styles.arrows__right}
			>
				<AiFillCaretRight className={styles.arrowIcon} />
			</Arrow>
		</div>
	);
});

export { NewsSlider };
