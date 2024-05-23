import classNames from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DropDownList.module.scss';

interface Category {
	name: string;
	path: string;
}

interface DropDownListProps {
	title: string;
	path: string;
	categories: Category[];
	linkClassName: string;
}

export const DropDownList: React.FC<DropDownListProps> = ({
	title,
	path,
	categories,
	linkClassName,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li className={styles.dropdown}>
			<NavLink
				to={path}
				onMouseEnter={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
				className={({ isActive }) =>
					classNames(styles.dropdownButton, linkClassName, {
						[styles.active]: isActive, // Применяем активный класс
					})
				}
			>
				{title}
			</NavLink>
			<ul className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
				{categories.map((category, index) => (
					<li key={index}>
						<NavLink to={category.path} className={styles.dropdown__item}>
							{category.name}
						</NavLink>
					</li>
				))}
			</ul>
		</li>
	);
};
