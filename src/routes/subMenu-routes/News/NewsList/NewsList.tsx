import React, { useState } from 'react';
import { NewsItem } from '../../../../types/dataInterface';

import { Pagination } from '../Pagination';
import styles from './NewsList.module.scss';

interface NewsListProps {
	newsItems: NewsItem[];
}

const categories = ['Всі статті', 'Актуально', 'Анонси', 'Події'];

const NewsList: React.FC<NewsListProps> = ({ newsItems }) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [newsPerPage] = useState<number>(2);
	const [filter, setFilter] = useState<string>('Всі статті');

	const filteredNews: NewsItem[] = newsItems.filter(
		news => filter === 'Всі статті' || news.category === filter
	);

	const indexOfLastNews: number = currentPage * newsPerPage;
	const indexOfFirstNews: number = indexOfLastNews - newsPerPage;
	const currentNews: NewsItem[] = filteredNews.slice(
		indexOfFirstNews,
		indexOfLastNews
	);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div>
			<div>
				{categories.map(cat => (
					<button
						key={cat}
						onClick={() => setFilter(cat)}
						className={`${styles.button} ${
							filter === cat ? styles.buttonActive : ''
						}`}
					>
						{cat}
					</button>
				))}
			</div>
			<div className={styles.newsContainer}>
				{currentNews.map(news => (
					<div key={news.title} className={styles.newsItem}>
						<img src={news.imageUrl} alt={news.title} />
						<h3>{news.title}</h3>
						<p>{news.description}</p>
					</div>
				))}
			</div>
			<Pagination
				itemsPerPage={newsPerPage}
				totalItems={filteredNews.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default NewsList;
