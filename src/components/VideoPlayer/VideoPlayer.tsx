// interface VideoPlayerProps {}

export const VideoPlayer = () => {
	const videoUrl =
		'https://drive.google.com/file/d/1QPGiH-Zz_CHOQHjLTd64GdOSghDplsyo/preview'; // Замените ID на ваше

	return (
		<div className='video-container'>
			<iframe
				title='Video Player'
				src={videoUrl}
				width='100%'
				height='500'
				allow='autoplay'
				frameBorder='0'
				style={{ width: '100%', height: '100%' }}
			></iframe>
			<div className='video-text'>Черкаський політехнічний фаховий коледж</div>
		</div>
	);
};
