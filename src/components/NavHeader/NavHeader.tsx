import { Link } from 'react-router-dom';
import { ImasObjLinks } from '../../types/CommonInterface';
import styles from './NavHeader.module.scss';

interface NavHeaderProps {
	navLinks: ImasObjLinks[];
}

export const NavHeader = ({ navLinks }: NavHeaderProps) => {
	const links = navLinks.map((item: ImasObjLinks, index: number) => {
		if (item.link.includes('http')) {
			return (
				<li key={index} className={styles.navHeader__link}>
					<a
						href={item.link}
						rel='noopener noreferrer'
						target='_blank'
						className={styles.navHeader__link}
					>
						<span>{item.title}</span>
					</a>
				</li>
			);
		} else {
			return (
				<li key={index} className={styles.navHeader__link}>
					<Link to={item.link}>
						<span>{item.title}</span>
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
