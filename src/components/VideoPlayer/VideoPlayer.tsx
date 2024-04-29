import styles from './VideoPlayer.module.scss';
// interface VideoPlayerProps {}

export const VideoPlayer = () => {
	const videoUrl =
		'https://drive.google.com/file/d/1QPGiH-Zz_CHOQHjLTd64GdOSghDplsyo/preview'; // Замените ID на ваше

	return (
		<div className={styles.video__container}>
			<iframe title='Video Player' src={videoUrl} allow='autoplay'></iframe>
			<div className={styles.video__text}>
				Черкаський політехнічний фаховий коледж
			</div>
		</div>
	);
};
