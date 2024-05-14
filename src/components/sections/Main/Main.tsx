import { useRef } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Slider from 'react-slick';
import { newsItems } from '../../../data/data';
import { NewsSlider } from '../../NewsSlider';
import Arrow from '../../NewsSlider/Arrow/Arrow';
import styles from './Main.module.scss';

export const Main = () => {
	const sliderRef = useRef<Slider>(null); // Теперь TypeScript знает о типе Slider
	const handleNext = () => {
		sliderRef.current?.slickNext(); // Используем optional chaining
	};

	const handlePrev = () => {
		sliderRef.current?.slickPrev(); // Используем optional chaining
	};

	return (
		<div className={styles.main}>
			<div className={styles.newsHeader}>
				<h2 className={styles.main__title}>Новини</h2>
				<div className={styles.arrows}>
					<Arrow direction='left' onClick={handlePrev}>
						<AiFillCaretLeft className={styles.arrowIcon} />
					</Arrow>
					<Arrow direction='right' onClick={handleNext}>
						<AiFillCaretRight className={styles.arrowIcon} />
					</Arrow>
				</div>
			</div>
			<NewsSlider ref={sliderRef} newsItems={newsItems} />
		</div>
	);
};
