import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAction } from '../../hooks/useAction';
import { RootState } from '../../store';
import { NewsItem } from '../../types/newsTypes';
import AdminNewsList from './AdminNewsList/AdminNewsList';
import styles from './AdminPanel.module.scss';
import NewsForm from './NewsForm/NewsForm';

const AdminPanel: React.FC = () => {
	const dispatch = useDispatch();
	const news = useSelector((state: RootState) => state.news.news);
	const { fetchNews, addNews, updateNews, deleteNews } = useAction();
	const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
	const [isEditMode, setIsEditMode] = useState(false);

	useEffect(() => {
		fetchNews();
	}, [dispatch]);

	const handleAddNews = (values: any, { resetForm }: any) => {
		const formData = new FormData();
		formData.append('title', values.title);
		formData.append('description', values.description);
		formData.append('category', values.category);

		const id = nanoid(3);
		const path = `/news/${values.title}+${id}`;
		formData.append('path', path);

		if (values.image) {
			formData.append('image', values.image);
		}

		addNews(formData);
		resetForm(); // Reset the form after submission
	};

	const handleUpdateNews = (values: any, { resetForm }: any) => {
		const updatedNews: NewsItem = {
			...selectedNews!,
			title: values.title,
			description: values.description,
			category: values.category,
			path: `/news/${values.title}+${selectedNews!.id}`, // Генерація шляху
			imageUrl: selectedNews?.imageUrl || '', // Переконатися, що imageUrl завжди строка
		};
		if (values.image) {
			updatedNews.imageUrl = URL.createObjectURL(values.image);
		}
		updateNews(updatedNews);
		setSelectedNews(null);
		setIsEditMode(false);
		resetForm();
	};

	const handleEditClick = (news: NewsItem) => {
		setSelectedNews(news);
		setIsEditMode(true);
	};

	const handleCancelEdit = () => {
		setSelectedNews(null);
		setIsEditMode(false);
	};

	return (
		<div className={styles.adminPanel}>
			<h1 className={styles.admin__title}>Адмін панель</h1>
			{isEditMode && selectedNews ? (
				<NewsForm
					initialValues={{
						title: selectedNews.title,
						description: selectedNews.description,
						category: selectedNews.category,
						image: null,
					}}
					onSubmit={handleUpdateNews}
					buttonText='Редагувати новину'
					onCancel={handleCancelEdit}
				/>
			) : (
				<NewsForm
					initialValues={{
						title: '',
						description: '',
						category: 'category.ACTUAL',
						image: null,
					}}
					onSubmit={handleAddNews}
					buttonText='Додати новину'
				/>
			)}
			<AdminNewsList
				newsItems={news}
				onUpdate={handleEditClick}
				onDelete={deleteNews}
			/>
		</div>
	);
};

export default AdminPanel;
