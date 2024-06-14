import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { NewsItem, category } from '../../../../types/newsTypes';
import { Pagination } from '../Pagination';
import styles from './NewsList.module.scss';

interface NewsListProps {
	newsItems: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ newsItems }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [newsPerPage] = useState<number>(6);
	const [filter, setFilter] = useState<category>(category.ALLARTICLES);
	const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
	const [totalItems, setTotalItems] = useState<number>(0); // State to store the total number of filtered items

	useEffect(() => {
		// Convert and filter news based on selected category
		const convertedAndFilteredNews = newsItems
			.map(item => ({
				...item,
				category: convertCategory(item.category),
			}))
			.filter(
				news => filter === category.ALLARTICLES || news.category === filter
			);

		setTotalItems(convertedAndFilteredNews.length); // Update the totalItems state

		// Determine the slice of news to display based on current page
		const indexOfLastNews = currentPage * newsPerPage;
		const indexOfFirstNews = indexOfLastNews - newsPerPage;
		const currentNews = convertedAndFilteredNews.slice(
			indexOfFirstNews,
			indexOfLastNews
		);

		setFilteredNews(currentNews);
	}, [currentPage, newsItems, filter, newsPerPage]);

	// Effect to reset to the first page when the filter changes
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
					<div key={news.title} className={classNames(styles.newsItem)}>
						<img
							src={news.imageUrl}
							alt={news.title}
							className={styles.newsItem__img}
						/>
						<h3>{news.title}</h3>
						<p>{news.description}</p>
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

export default NewsList;
