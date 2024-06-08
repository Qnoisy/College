import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { headerRoutes } from '../../../data/data';
import ContactLink from '../../ContactLink/ContactLink';
import { Search } from '../../Search';
import { ThemeButton } from '../../ThemeButton';
import styles from './Header.module.scss';
import { Menu } from './Menu';

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<Menu navLinks={headerRoutes} linkClassName={styles.link__style} />
				<div className={styles.header__links}>
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
				</div>
				<div className={styles.header__block}>
					<Search />
					<ThemeButton />
				</div>
			</header>
		</>
	);
};

export default Header;
