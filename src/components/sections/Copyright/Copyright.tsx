import styles from './Copyright.module.scss';

// interface CopyrightProps {}

export const Copyright = () => {
	return (
		<p className={styles.copyright}>
			Copyright &copy; 2024 Черкаський політехнічний фаховий коледж. Всі права
			захищені.
		</p>
	);
};
