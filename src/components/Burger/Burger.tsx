import styles from './Burger.module.scss';

interface BurgerProps {}

export const Burger = ({}: BurgerProps) => {
	return <div className={styles.burger}>Burger Component</div>;
};
