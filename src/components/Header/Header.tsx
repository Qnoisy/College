import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from '../Burger/Burger';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
	const [isOpen, setOpen] = useState(false);

	const handlerBurger = () => {
		setOpen(isOpen => !isOpen);
	};

	return (
		<header className={styles.header}>
			<Link to='/'>
				<div className='row'>
					<div className={styles.header__logo}></div>
					<div className={styles.header__title}>Your Title</div>
				</div>
			</Link>
			<nav>
				<ul className={styles.header__links}>
					{/* <li className={styles.header__link}>
						<Link to='/'>Menu</Link>
					</li> */}
					<li className={styles.header__link}>
						<Link to='/publichne-obhovorennia'>
							<span>Contact us</span>
						</Link>
					</li>
				</ul>
			</nav>

			<div>{isOpen && <Burger />}</div>
			<Hamburger toggled={isOpen} toggle={handlerBurger} />
		</header>
	);
};
