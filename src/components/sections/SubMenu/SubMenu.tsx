import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { subRoutes } from '../../../data/data';
import { Container } from '../../Container';
import { Menu } from '../../Menu';
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
						<Link to='/' className={styles.subMenu__logo}>
							<img
								src='img/logo.png'
								alt='Logo'
								className={styles.subMenu__logo_img}
							/>
							<div className={styles.subMenu__logo_text}>чпфк</div>
						</Link>
						<Menu
							navLinks={subRoutes}
							linkClassName={styles.links__style}
							menuClassName={styles.link__style}
						/>
					</nav>
				</Container>
			</div>
		</>
	);
};

export default SubMenu;
