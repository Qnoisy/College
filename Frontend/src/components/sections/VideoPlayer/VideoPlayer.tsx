import { Container } from '../../Container';
import styles from './VideoPlayer.module.scss';

export const VideoPlayer = () => {
	return (
		<Container className={styles.video__container}>
			<video
				title='Video Player'
				src='./video/video.mp4'
				autoPlay
				loop
				muted
			></video>
			<div className={styles.video__overlay}></div>
			<h1 className={styles.video__title}>
				Черкаський політехнічний <p>фаховий коледж</p>
			</h1>
		</Container>
	);
};
