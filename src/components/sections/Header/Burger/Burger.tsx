import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import { BurgerContent } from '../BurgerContent';
import styles from './Burger.module.scss';

// interface BurgerProps {}

export const Burger = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const handlerBurger = () => {
		setOpen(!isOpen);
	};
	useEffect(() => {
		const handleEscKeyPress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setOpen(false);
			}
		};
		document.addEventListener('keydown', handleEscKeyPress);
		return () => {
			document.removeEventListener('keydown', handleEscKeyPress);
		};
	}, [isOpen]);
	return (
		<div className={styles.burger}>
			<Hamburger toggled={isOpen} toggle={handlerBurger} />
			<BurgerContent isOpen={isOpen} handler={handlerBurger} />
		</div>
	);
};
