import { headerRoutes } from '../../data/data';
import { Menu } from '../Menu';
import styles from './Header.module.scss';

// interface HeaderProps {}

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<Menu navLinks={headerRoutes} linkClassName={styles.link__style} />
			</header>
		</>
	);
};
