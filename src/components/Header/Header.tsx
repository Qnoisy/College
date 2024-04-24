import Hamburger from 'hamburger-react';
import { useState } from 'react';
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

			<div>
				{isOpen && (
					<div className={styles.header__burger}>
						<div className={styles.header__burger_content}>
							<Hamburger toggled={isOpen} toggle={handlerBurger} />
						</div>
					</div>
				)}
			</div>
			<Hamburger toggled={isOpen} toggle={handlerBurger} />
		</header>
	);
};
