import { Link } from 'react-router-dom';
import { subRoutes } from '../../data/data';
import { Menu } from '../Menu';
import styles from './SubMenu.module.scss';

// interface SubMenuProps {}

export const SubMenu = () => {
	return (
		<nav className={styles.subMenu}>
			<Link to='/' className={styles.subMenu__logo}>
				<img src='img/logo.png' alt='' className={styles.subMenu__logo_img} />
				<div className={styles.subMenu__logo_text}>чпфк</div>
			</Link>
			<Menu
				navLinks={subRoutes}
				linkClassName={styles.links__style}
				menuClassName={styles.link__style}
			/>
		</nav>
	);
};
