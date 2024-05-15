import Page from '../../../Page/Page';
import { NewsSlider } from '../../../components/NewsSlider';
import { newsItems } from '../../../data/data';
import styles from './News.module.scss';

// interface NewsProps {}

export const News = () => {
	return (
		<div className={styles.news}>
			<Page title='Новини - ЧПФК' />
			<h2 className={styles.news__title}>Новини</h2>
			<NewsSlider newsItems={newsItems} />
		</div>
	);
};
