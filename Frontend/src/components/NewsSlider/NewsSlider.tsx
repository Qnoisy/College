import classNames from 'classnames';
import { forwardRef, useRef } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Arrow from './Arrow/Arrow';
import styles from './NewsSlider.module.scss';

interface SliderProps {
	title?: string;
	description?: string;
	imageUrl: string;
	path: string;
}

interface NewsSliderProps {
	newsItems: SliderProps[];
	target?: boolean;
	objectFit?: 'cover' | 'contain';
	className?: string;
	useAssetsPath?: boolean;
}

const NewsSlider = forwardRef<Slider, NewsSliderProps>(
	(
		{
			newsItems,
			target = false,
			objectFit = 'cover',
			className,
			useAssetsPath = false,
		},
		ref
	) => {
		const settings = {
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 540,
					settings: {
						slidesToShow: 1,
					},
				},
			],
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
						<a
							href={item.path}
							key={index}
							className={classNames(styles.newsSlider__slide, className)}
							target={target ? '_blank' : '_self'}
							rel='noopener noreferrer'
						>
							<img
								src={
									useAssetsPath
										? `http://localhost:3001/assets/${item.imageUrl}`
										: item.imageUrl
								}
								alt={item.title}
								style={{ objectFit: objectFit }}
							/>
							{item.title && <h3>{item.title}</h3>}
							{item.description && <p>{item.description}</p>}
						</a>
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
	}
);

export { NewsSlider };
