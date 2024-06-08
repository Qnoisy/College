import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

interface LogoProps {
	customStyle?: string;
}

export const Logo = ({ customStyle }: LogoProps) => {
	return (
		<Link to='/' className={classNames(styles.logo, customStyle)}>
			<img src='/img/logo.png' alt='Logo' className={styles.logo_img} />
			<div className={classNames(styles.logo_text, customStyle)}>чпфк</div>
		</Link>
	);
};
