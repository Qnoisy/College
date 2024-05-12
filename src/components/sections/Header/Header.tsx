import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { headerRoutes } from '../../../data/data';
import { useTheme } from '../../../hooks/useTheme';
import { Menu } from '../../Menu';
import { Search } from '../../Search';
import styles from './Header.module.scss';

export const Header = () => {
	const { theme, setTheme } = useTheme();
	const handleClickTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	return (
		<>
			<header className={styles.header}>
				<Menu navLinks={headerRoutes} linkClassName={styles.link__style} />
				<div className={styles.header__block}>
					<Search />
					<button onClick={handleClickTheme} className={styles.header__btn}>
						{theme === 'light' ? (
							<span className={styles.header__theme}>
								<MdOutlineLightMode />
							</span>
						) : (
							<span className={styles.header__theme}>
								<MdLightMode />
							</span>
						)}
					</button>
				</div>
			</header>
		</>
	);
};

export default Header;
