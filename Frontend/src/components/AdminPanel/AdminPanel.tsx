import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import { RootState } from '../../store';
import { NewsItem } from '../../types/newsTypes';
import AddNewsForm from './AddNewsForm/AddNewsForm';
import AdminNewsList from './AdminNewsList/AdminNewsList';
import styles from './AdminPanel.module.scss';

const AdminPanel: React.FC = () => {
	const dispatch = useDispatch();
	const news = useSelector((state: RootState) => state.news.news);

	const { fetchNews, updateNews, deleteNews } = useAction();

	useEffect(() => {
		fetchNews();
	}, [dispatch]);

	const handleUpdateNews = (newsItem: NewsItem) => {
		updateNews(newsItem);
	};

	const handleDeleteNews = (id: number) => {
		deleteNews(id);
	};

	return (
		<div className={styles.adminPanel}>
			<h1>Admin Panel</h1>
			<AddNewsForm />
			<AdminNewsList
				newsItems={news}
				onUpdate={handleUpdateNews}
				onDelete={handleDeleteNews}
			/>
		</div>
	);
};

export default AdminPanel;
