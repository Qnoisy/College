import { useRef } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Slider from 'react-slick';
import Arrow from '../Arrow/Arrow';
import { NewsSwiper } from '../NewsSwiper';
import styles from './Main.module.scss';

const newsItems = [
	{
		title: 'Новость 1',
		description: 'Описание новости 1',
		imageUrl:
			'https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Новость 2',
		description: 'Описание новости 2',
		imageUrl:
			'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Технологии',
		description: 'Прорыв в области искусственного интеллекта',
		imageUrl:
			'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Природа',
		description: 'Сохранение зеленых зон в городских условиях',
		imageUrl:
			'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Спорт',
		description: 'Местные спортивные мероприятия возобновляются этим летом',
		imageUrl:
			'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Культура',
		description: 'Фестиваль уличного искусства начинается этой весной',
		imageUrl:
			'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
];

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
			<NewsSwiper ref={sliderRef} newsItems={newsItems} />
		</div>
	);
};
