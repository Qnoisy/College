import { useEffect } from 'react';
import { SyncLoader } from 'react-spinners';
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import styles from './News.module.scss';
import NewsList from './NewsList/NewsList';

export const News = () => {
	const { news, loading } = useTypedSelector(state => state.news);
	const { fetchNews } = useAction();

	useEffect(() => {
		fetchNews();
	}, []);
	return (
		<div className={styles.news}>
			{loading && (
				<SyncLoader
					className={styles.loader}
					size={12}
					color='gray'
					loading={true}
				/>
			)}
			<NewsList newsItems={news} />
			{/* <LatestNews newsItems={news} /> */}
		</div>
	);
};
