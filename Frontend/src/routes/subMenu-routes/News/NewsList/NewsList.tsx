import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { useAction } from '../../../../hooks/useAction';
import { useTypedSelector } from '../../../../hooks/useTypeSelector';
import { NewsItem, category } from '../../../../types/newsTypes';
import { Pagination } from '../Pagination';
import styles from './NewsList.module.scss';

const NewsList: React.FC = () => {
	const { news, loading } = useTypedSelector(state => state.news);
	const { fetchNews } = useAction();

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [newsPerPage] = useState<number>(6);
	const [filter, setFilter] = useState<category>(category.ALLARTICLES);
	const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
	const [totalItems, setTotalItems] = useState<number>(0);

	useEffect(() => {
		fetchNews();
	}, []);

	useEffect(() => {
		const convertedAndFilteredNews = news
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
	}, [currentPage, news, filter, newsPerPage]);

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
			{loading && (
				<SyncLoader
					className={styles.loader}
					size={12}
					color='gray'
					loading={true}
				/>
			)}
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
				{filteredNews.map((news, index) => (
					<Link to={news.path} key={index}>
						<div key={news.title} className={classNames(styles.newsItem)}>
							<img
								src={`http://localhost:3001/assets/${news.imageUrl}`}
								alt={news.title}
								className={styles.newsItem__img}
							/>
							<h3>{news.title}</h3>
							<p>{news.description}</p>
						</div>
					</Link>
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
