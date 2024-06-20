import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './Copyright.module.scss';

export const Copyright = () => {
	const [isVisible, setIsVisible] = useState(true);
	useEffect(() => {
		const timer = setInterval(() => {
			setIsVisible(prev => !prev);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const style = { display: isVisible ? 'block' : 'none' };
	return (
		<p className={styles.copyright}>
			Copyright &copy; 2024 Черкаський політехнічний фаховий коледж. Всі права
			захищені.
			<a
				href='https://www.youtube.com/watch?v=v81WE3uq_6o&t=5s'
				className={classNames(styles.copyright__egg)}
				style={style}
			>
				卐
			</a>
		</p>
	);
};
