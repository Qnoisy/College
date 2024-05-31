import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { IsubRoutes } from '../../types/CommonInterface';
import { DropDownList } from '../DropDownList';
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
			return item.kategories ? (
				<DropDownList
					title={item.name}
					link={item.link}
					categories={item.kategories}
					linkClassName={linkClassName}
				/>
			) : (
				<li
					key={index}
					className={classNames(styles.menu__link, linkClassName)}
				>
					<NavLink
						to={item.link}
						className={({ isActive }) =>
							classNames(styles.menu__link, linkClassName, {
								[styles.active]: isActive,
							})
						}
					>
						{item.name}
					</NavLink>
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
