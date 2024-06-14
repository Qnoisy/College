import { useEffect } from 'react';
import cart from '../../assets/1.jpg';

import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import NewsList from '../../routes/subMenu-routes/News/NewsList/NewsList';
import { NewsItem, category } from '../../types/newsTypes';
import styles from './AdminPanel.module.scss';
import ImageUpload from './ImageUpload/ImageUpload';
// interface AdminPanelProps {}

export const AdminPanel = () => {
	const { news } = useTypedSelector(state => state.news);
	const { fetchNews } = useAction();
	const newCard: NewsItem = {
		title: 'Новина 3',
		description: 'начинается этой весной',
		imageUrl: '/assets/1.jpg',
		path: '/news',
		category: category.EVENTS,
		id: +new Date(),
	};
	useEffect(() => {
		fetchNews();
	}, []);
	console.log(news);
	return (
		<div className={styles.adminPanel}>
			<ImageUpload />
			<img src={cart} alt='' />
			<NewsList newsItems={news} />
		</div>
	);
};
