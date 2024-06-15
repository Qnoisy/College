import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { Pagination } from '../../../routes/subMenu-routes/News/Pagination';
import { NewsItem, category } from '../../../types/newsTypes';
import styles from './AdminNewsList.module.scss';

interface AdminNewsListProps {
	newsItems: NewsItem[];
	onUpdate: (newsItem: NewsItem) => void;
	onDelete: (id: number) => void;
}

const AdminNewsList: React.FC<AdminNewsListProps> = ({
	newsItems,
	onUpdate,
	onDelete,
}) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [newsPerPage] = useState<number>(6);
	const [filter, setFilter] = useState<category>(category.ALLARTICLES);
	const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
	const [totalItems, setTotalItems] = useState<number>(0);

	useEffect(() => {
		const convertedAndFilteredNews = newsItems
			.map(item => ({
				...item,
				category: convertCategory(item.category),
			}))
			.filter(
				news => filter === category.ALLARTICLES || news.category === filter
			);

		setTotalItems(convertedAndFilteredNews.length);

		const indexOfLastNews = currentPage * newsPerPage;
		const indexOfFirstNews = indexOfLastNews - newsPerPage;
		const currentNews = convertedAndFilteredNews.slice(
			indexOfFirstNews,
			indexOfLastNews
		);

		setFilteredNews(currentNews);
	}, [currentPage, newsItems, filter, newsPerPage]);

	useEffect(() => {
		setCurrentPage(1);
	}, [filter]);

	function convertCategory(oldCategory: string): category {
		switch (oldCategory) {
			case 'category.ACTUAL':
				return category.ACTUAL;
			case 'category.ANNOUNCE':
				return category.ANNOUNCE;
			case 'category.EVENTS':
				return category.EVENTS;
			default:
				return category.ALLARTICLES;
		}
	}

	return (
		<div className={styles.newsList}>
			<div className={styles.categories}>
				{Object.values(category).map(cat => (
					<button
						key={cat}
						onClick={() => setFilter(cat)}
						className={classNames(styles.button, {
							[styles.active]: filter === cat,
						})}
					>
						{cat}
					</button>
				))}
			</div>
			<div className={styles.newsContainer}>
				{filteredNews.map(news => (
					<div key={news.id} className={classNames(styles.newsItem)}>
						<img
							src={`http://localhost:3001/assets/${news.imageUrl}`}
							alt={news.title}
							className={styles.newsItem__img}
						/>
						<h3>{news.title}</h3>
						<p>{news.description}</p>
						<button onClick={() => onUpdate(news)}>Update</button>
						<button onClick={() => onDelete(news.id)}>Delete</button>
					</div>
				))}
			</div>
			<Pagination
				itemsPerPage={newsPerPage}
				totalItems={totalItems}
				currentPage={currentPage}
				paginate={setCurrentPage}
			/>
		</div>
	);
};

export default AdminNewsList;
