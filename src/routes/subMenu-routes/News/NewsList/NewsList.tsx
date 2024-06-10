import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { NewsItem } from '../../../../types/dataInterface';
import { Pagination } from '../Pagination';
import styles from './NewsList.module.scss';

interface NewsListProps {
	newsItems: NewsItem[];
}

const categories = ['Всі статті', 'Актуально', 'Анонси', 'Події'];

const NewsList: React.FC<NewsListProps> = ({ newsItems }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [newsPerPage] = useState<number>(6); // Обмеження в 6 новин
	const [filter, setFilter] = useState<string>('Всі статті');
	const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);

	useEffect(() => {
		const newFilteredNews = newsItems.filter(
			news => filter === 'Всі статті' || news.category === filter
		);
		setFilteredNews(newFilteredNews);
		setCurrentPage(1);
	}, [filter, newsItems]);

	const indexOfLastNews: number = currentPage * newsPerPage;
	const indexOfFirstNews: number = indexOfLastNews - newsPerPage;
	const currentNews: NewsItem[] = filteredNews.slice(
		indexOfFirstNews,
		indexOfLastNews
	);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div className={styles.newsList}>
			<div className={styles.categories}>
				{categories.map(cat => (
					<button
						key={cat}
						onClick={() => setFilter(cat)}
						className={classNames(styles.button, {
							[styles.buttonActive]: filter === cat,
						})}
					>
						{cat}
					</button>
				))}
			</div>
			<div className={styles.newsContainer}>
				{currentNews.map(news => (
					<div key={news.title} className={styles.newsItem}>
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
				totalItems={filteredNews.length}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</div>
	);
};

export default NewsList;
