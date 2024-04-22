import styles from './Footer.module.scss';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
	return <div className={styles.footer}>Footer Component</div>;
};
