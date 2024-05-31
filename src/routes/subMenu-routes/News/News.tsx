import Page from '../../../Page/Page';
import { NewsSlider } from '../../../components/NewsSlider';
import Block from '../../../components/sample/Block/Block';
import { newsItems } from '../../../data/data';
import styles from './News.module.scss';

export const News = () => {
	const newsContent = (
		<div>
			{/* <Title text='Новини' />
			<hr className='hr-style' /> */}
		</div>
	);

	return (
		<div className={styles.news}>
			<Page title='Новини - ЧПФК' />
			<NewsSlider newsItems={newsItems} />
			<Block content={newsContent} />
		</div>
	);
};
