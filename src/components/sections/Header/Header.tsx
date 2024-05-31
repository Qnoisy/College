import classNames from 'classnames';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
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
				<a
					className={classNames(styles.header__link, 'row')}
					href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJVjvPsftnLMnXzgslkGVptXmSLMVKJdWzzXBFmNCsnCVlHSxHVXrXxgfZZtNjHdlDhWg'
				>
					<AiOutlineMail className={styles.header__icon} />
					<span className={styles.header__text}>info@chpt.edu.ua</span>
				</a>
				<a
					href='tel:+384723360728'
					className={classNames(styles.header__link, 'row')}
				>
					<AiOutlinePhone className={styles.header__icon} />
					<span className={styles.header__text}>(0472)36-07-28</span>
				</a>
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
