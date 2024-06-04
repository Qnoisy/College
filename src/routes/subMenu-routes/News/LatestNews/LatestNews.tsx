import React from 'react';
import { NewsItem } from '../../../../types/dataInterface';
import styles from './LatestNews.module.scss'; // Припускаємо, що стилі аналогічні до NewsList

interface LatestNewsProps {
	newsItems: NewsItem[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ newsItems }) => {
	const latestNews = newsItems.slice(-4); // Вибираємо останні чотири новини

	return (
		<div className={styles.latestNews}>
			{latestNews.map(news => (
				<div key={news.title} className={styles.newsItem}>
					<img src={news.imageUrl} alt={news.title} />
					<h3>{news.title}</h3>
					<p>{news.description}</p>
				</div>
			))}
		</div>
	);
};

export default LatestNews;
