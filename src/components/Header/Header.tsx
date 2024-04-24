import { headerRoutes } from '../../data/data';
import { NavHeader } from '../NavHeader';
import styles from './Header.module.scss';

// interface HeaderProps {}

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<NavHeader navLinks={headerRoutes} />
			</header>
		</>
	);
};
