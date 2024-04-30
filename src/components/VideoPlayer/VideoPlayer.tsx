import styles from './VideoPlayer.module.scss';
// interface VideoPlayerProps {}

export const VideoPlayer = () => {
	return (
		<div className={styles.video__container}>
			<video
				title='Video Player'
				src='./video/video.mp4'
				autoPlay // Автоматическое воспроизведение
				loop // Повторение видео
				muted // Необходимо добавить для автовоспроизведения в некоторых браузерах
			></video>
			<div className={styles.video__overlay}></div>
			<div className={styles.video__text}>
				Черкаський політехнічний фаховий коледж
			</div>
		</div>
	);
};
