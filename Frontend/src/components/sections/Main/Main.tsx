// В вашем JSX файле
import classNames from 'classnames';
import { useEffect } from 'react';
import Page from '../../../Page/Page';
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { NewsSlider } from '../../NewsSlider';
import styles from './Main.module.scss';

export const Main = () => {
	const { news } = useTypedSelector(state => state.news);
	const { fetchNews } = useAction();
	useEffect(() => {
		fetchNews();
	}, []);
	return (
		<Page title='Головна - ЧПФК'>
			<main className={styles.main}>
				<div className={classNames(styles.newsSection, styles.main__container)}>
					<NewsSlider
						newsItems={news}
						useAssetsPath={true}
						className={styles.main__news_img}
					/>
				</div>
			</main>
		</Page>
	);
};
