import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DropDownList.module.scss';

interface Category {
	name: string;
	link: string;
}

interface DropDownListProps {
	title: string;
	link: string;
	categories: Category[];
	linkClassName: string;
}

export const DropDownList: React.FC<DropDownListProps> = ({
	title,
	link,
	categories,
	linkClassName,
}) => {
	return (
		<li className={styles.dropdown}>
			<NavLink
				to={link}
				className={({ isActive }) =>
					classNames(styles.dropdownButton, linkClassName, {
						[styles.active]: isActive,
					})
				}
			>
				{title}
			</NavLink>
			<ul className={classNames(styles.dropdownContent)}>
				{categories.map((category, index) => (
					<li key={index}>
						<NavLink to={category.link} className={styles.dropdown__item}>
							{category.name}
						</NavLink>
					</li>
				))}
			</ul>
		</li>
	);
};
