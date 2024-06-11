import { usefulLinks } from '../../data/data';
import { NewsSlider } from '../NewsSlider';
import styles from './UsefulLinks.module.scss';

export const UsefulLinks = () => {
	return (
		<NewsSlider
			newsItems={usefulLinks}
			target={true}
			objectFit='contain'
			className={styles.usefulLinks}
		/>
	);
};
