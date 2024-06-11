// В вашем JSX файле
import classNames from 'classnames';
import Page from '../../../Page/Page';
import { newsItems } from '../../../data/data';
import { NewsSlider } from '../../NewsSlider';
import styles from './Main.module.scss';

export const Main = () => {
	return (
		<Page title='Головна - ЧПФК'>
			<main className={styles.main}>
				<div className={classNames(styles.newsSection, styles.main__container)}>
					<NewsSlider newsItems={newsItems} className={styles.main__news_img} />
				</div>
			</main>
		</Page>
	);
};
