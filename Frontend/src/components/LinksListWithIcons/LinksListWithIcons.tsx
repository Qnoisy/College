import React from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import styles from './LinksListWithIcons.module.scss'; // Стили для компонента

interface LinkItem {
	name: string;
	path: string;
	icon: IconType; // Тип IconType из react-icons
}

interface LinksListWithIconsProps {
	links: LinkItem[];
}

const LinksListWithIcons: React.FC<LinksListWithIconsProps> = ({
	links,
}: LinksListWithIconsProps) => {
	return (
		<div className={styles.linksList}>
			{links.map((link, index) => (
				<div key={index} className={styles.linkItem}>
					<link.icon className={styles.icon} /> {/* Использование иконки */}
					<Link to={link.path} className={styles.link}>
						{link.name}
					</Link>
				</div>
			))}
		</div>
	);
};

export default LinksListWithIcons;
