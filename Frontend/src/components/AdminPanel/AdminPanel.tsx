import { nanoid } from 'nanoid';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAction } from '../../hooks/useAction';
import { RootState } from '../../store';
import { NewsItem } from '../../types/newsTypes';
import AdminNewsList from './AdminNewsList/AdminNewsList';
import styles from './AdminPanel.module.scss';
import NewsForm from './NewsForm/NewsForm';

const AdminPanel: React.FC = () => {
	const news = useSelector((state: RootState) => state.news.news);
	const { fetchNews, addNews, updateNews, deleteNews } = useAction();
	const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
	const [isEditMode, setIsEditMode] = useState(false);

	const fetchNewsCallback = useCallback(() => {
		fetchNews();
	}, [fetchNews]);

	useEffect(() => {
		fetchNewsCallback();
	}, [fetchNewsCallback]);

	const handleAddNews = async (values: any, { resetForm }: any) => {
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

		await addNews(formData);
		resetForm();
		fetchNewsCallback();
	};

	const handleUpdateNews = async (values: any, { resetForm }: any) => {
		const updatedNews: NewsItem = {
			...selectedNews!,
			title: values.title,
			description: values.description,
			category: values.category,
			path: `/news/${values.title}+${selectedNews!.id}`,
			imageUrl: selectedNews?.imageUrl || '',
		};
		if (values.image) {
			updatedNews.imageUrl = URL.createObjectURL(values.image);
		}
		await updateNews(updatedNews);
		setSelectedNews(null);
		setIsEditMode(false);
		resetForm();
		fetchNewsCallback();
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