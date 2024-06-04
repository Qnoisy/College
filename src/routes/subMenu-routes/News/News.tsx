import { newsItems } from '../../../data/data';
import LatestNews from './LatestNews/LatestNews';
import NewsList from './NewsList/NewsList';

export const News = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<NewsList newsItems={newsItems} />
			<LatestNews newsItems={newsItems} />
		</div>
	);
};
