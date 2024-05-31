import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { headerRoutes } from '../../../data/data';
import { useTheme } from '../../../hooks/useTheme';
import ContactLink from '../../ContactLink/ContactLink';
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
				<ContactLink
					url='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJVjvPsftnLMnXzgslkGVptXmSLMVKJdWzzXBFmNCsnCVlHSxHVXrXxgfZZtNjHdlDhWg'
					icon={AiOutlineMail}
					text='info@chpt.edu.ua'
				/>
				<ContactLink
					url='tel:+384723360728'
					icon={AiOutlinePhone}
					text='(0472)36-07-28'
				/>
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
