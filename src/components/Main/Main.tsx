import styles from './Main.module.scss';

interface MainProps {}

export const Main = ({}: MainProps) => {
	return <div className={styles.main}>Основа</div>;
};