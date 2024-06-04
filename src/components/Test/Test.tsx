import styles from './Test.module.scss';

interface TestProps {}

export const Test = ({}: TestProps) => {
	return <div className={styles.test}>Test Component</div>;
};
