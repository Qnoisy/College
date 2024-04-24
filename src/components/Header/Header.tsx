import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { Burger } from '../Burger';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
	const [isOpen, setOpen] = useState(false);

	const handlerBurger = () => {
		setOpen(isOpen => !isOpen);
	};

	return (
		<header className={styles.header}>
			<div className='row'>
				<div className={styles.header__logo}></div>
				<div className={styles.header__title}>Your Title</div>
			</div>

			<div>{isOpen && <Burger />}</div>
			<Hamburger toggled={isOpen} toggle={handlerBurger} />
		</header>
	);
};
