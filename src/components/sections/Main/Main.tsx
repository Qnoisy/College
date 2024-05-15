// В вашем JSX файле
import classNames from 'classnames';
import { News } from '../../../routes/subMenu-routes/News';
import styles from './Main.module.scss';

export const Main = () => {
	return (
		<main className={styles.main}>
			<div className={classNames(styles.newsSection, styles.main__container)}>
				<News />
			</div>
		</main>
	);
};
