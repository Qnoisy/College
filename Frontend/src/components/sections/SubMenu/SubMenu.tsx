import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { subRoutes } from '../../../data/data';
import { Container } from '../../Container';
import { Logo } from '../../Logo';
import { Burger } from '../Header/Burger';
import { Menu } from '../Header/Menu';
import styles from './SubMenu.module.scss';

const SubMenu = () => {
	const [isFixed, setIsFixed] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const [menuHeight, setMenuHeight] = useState(0);

	const handleScroll = () => {
		if (menuRef.current) {
			setIsFixed(window.scrollY > 55);
			setMenuHeight(menuRef.current.clientHeight);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{isFixed && <div style={{ height: menuHeight }} />}
			<div
				ref={menuRef}
				className={classNames(styles.subMenuWrapper, {
					[styles.fixed]: isFixed,
				})}
			>
				<Container>
					<nav className={styles.subMenu}>
						<Logo />
						<Menu
							navLinks={subRoutes}
							linkClassName={styles.links__style}
							menuClassName={styles.link__style}
						/>
						<Burger />
					</nav>
				</Container>
			</div>
		</>
	);
};

export default SubMenu;
