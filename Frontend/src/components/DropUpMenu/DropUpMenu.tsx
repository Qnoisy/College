// DropUpMenu.tsx
import classNames from 'classnames';
import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styles from './DropUpMenu.module.scss';

interface DropdownMenuProps {
	links: { text: string; url: string }[];
	name: string;
}

const DropUpMenu: React.FC<DropdownMenuProps> = ({ links, name }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.dropUpMenu}>
			<button
				onClick={() => setIsOpen(isOpen => !isOpen)}
				className={styles.button}
			>
				<div className={styles.dropUpMenu__row}>
					{name}
					<IoIosArrowUp
						className={classNames(styles.icon, {
							[styles.dropUpMenu__active]: isOpen,
						})}
					/>
				</div>
			</button>
			{isOpen && (
				<div className={styles.dropdownContent}>
					{links.map((link, index) => (
						<a
							key={index}
							href={link.url}
							className={styles.link}
							target='_blank'
							rel='noreferrer'
						>
							{link.text}
						</a>
					))}
				</div>
			)}
		</div>
	);
};

export default DropUpMenu;
