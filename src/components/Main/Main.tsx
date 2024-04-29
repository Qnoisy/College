import { VideoPlayer } from '../VideoPlayer';
import styles from './Main.module.scss';

// interface MainProps {}

export const Main = () => {
	return (
		<div className={styles.main}>
			<VideoPlayer />
		</div>
	);
};
