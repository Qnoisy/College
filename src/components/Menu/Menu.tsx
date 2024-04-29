import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { IsubRoutes } from '../../types/CommonInterface';
import styles from './Menu.module.scss';

interface MenuProps {
	navLinks: IsubRoutes[];
	className?: string;
	menuClassName?: string;
	linkClassName?: string;
	externalLinkTarget?: string;
	externalLinkRel?: string;
	renderItem?: (item: IsubRoutes) => JSX.Element;
}

export const Menu = ({
	navLinks,
	className = '',
	menuClassName = '',
	linkClassName = '',
	externalLinkTarget = '_blank',
	externalLinkRel = 'noopener noreferrer',
	renderItem,
}: MenuProps) => {
	const links = navLinks.map((item, index) => {
		if (renderItem) {
			return renderItem(item);
		} else if (item.link.includes('http')) {
			return (
				<li
					key={index}
					className={classNames(styles.menu__link, linkClassName)}
				>
					<a
						href={item.link}
						rel={externalLinkRel}
						target={externalLinkTarget}
						className={classNames(styles.menu__link, linkClassName)}
					>
						{item.name}
					</a>
				</li>
			);
		} else {
			return (
				<li
					key={index}
					className={classNames(styles.menu__link, linkClassName)}
				>
					<Link
						to={item.link}
						className={classNames(styles.menu__link, linkClassName)}
					>
						{item.name}
					</Link>
				</li>
			);
		}
	});

	return (
		<nav className={classNames(styles.menu, className)}>
			<ul className={classNames(styles.menu__links, menuClassName)}>{links}</ul>
		</nav>
	);
};
