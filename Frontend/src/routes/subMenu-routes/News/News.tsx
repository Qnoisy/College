import { newsItems } from '../../../data/data';
import LatestNews from './LatestNews/LatestNews';
import styles from './News.module.scss';
import NewsList from './NewsList/NewsList';

export const News = () => {
	return (
		<div className={styles.news}>
			<NewsList newsItems={newsItems} />
			<LatestNews newsItems={newsItems} />
		</div>
	);
};
