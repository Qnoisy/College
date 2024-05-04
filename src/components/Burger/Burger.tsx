import Hamburger from 'hamburger-react';
import { useState } from 'react';
import styles from './Burger.module.scss';

interface BurgerProps {}

export const Burger = ({}: BurgerProps) => {
	const [isOpen, setOpen] = useState(false);
	const handlerBurger = () => {
		setOpen(isOpen => !isOpen);
	};

	return (
		<div className={styles.burger}>
			<div>{isOpen && <Burger />}</div>
			<Hamburger toggled={isOpen} toggle={handlerBurger} />
		</div>
	);
};
