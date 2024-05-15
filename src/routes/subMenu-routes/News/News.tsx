import Page from '../../../Page/Page';
import { NewsSlider } from '../../../components/NewsSlider';
import { newsItems } from '../../../data/data';
import styles from './News.module.scss';
import Block from '../../../components/sample/Block/Block';
import Title from '../../../components/sample/Title/Title';

export const News = () => {

	const newsContent = (
		<div>
			<Title text='Новини' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<div className={styles.news}>
			<Page title='Новини - ЧПФК' />
			<h2 className={styles.news__title}>Новини</h2>
			<NewsSlider newsItems={newsItems} />
		</div>
	);
};
