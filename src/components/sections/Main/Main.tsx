import { News } from '../../../routes/subMenu-routes/News';
import styles from './Main.module.scss';

export const Main = () => {
	return (
		<div className={styles.main}>
			<News />
		</div>
	);
};
