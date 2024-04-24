import { Link } from 'react-router-dom';
import { subRoutes } from '../../data/data';
import { NavHeader } from '../NavHeader';
import styles from './SubMenu.module.scss';

// interface SubMenuProps {}

export const SubMenu = () => {
	return (
		<nav className={styles.subMenu}>
			<Link to='/' className={styles.subMenu__logo}>
				<div className={styles.subMenu__logo_img}></div>
				<div className={styles.subMenu__logo_text}>Text logo</div>
			</Link>
			<NavHeader navLinks={subRoutes} />
		</nav>
	);
};
