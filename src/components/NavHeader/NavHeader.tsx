import { Link } from 'react-router-dom';
import { IsubRoutes } from '../../types/CommonInterface';
import styles from './NavHeader.module.scss';

interface NavHeaderProps {
	navLinks: IsubRoutes[];
}

export const NavHeader = ({ navLinks }: NavHeaderProps) => {
	const links = navLinks.map((item: IsubRoutes, index: number) => {
		if (item.link.includes('http')) {
			return (
				<li key={index} className={styles.navHeader__link}>
					<a
						href={item.link}
						rel='noopener noreferrer'
						target='_blank'
						className={styles.navHeader__link}
					>
						<span>{item.name}</span>
					</a>
				</li>
			);
		} else {
			return (
				<li key={index} className={styles.navHeader__link}>
					<Link to={item.link}>
						<span>{item.name}</span>
					</Link>
				</li>
			);
		}
	});

	return (
		<nav className={styles.navHeader}>
			<ul className={styles.navHeader__links}>{links}</ul>
		</nav>
	);
};
