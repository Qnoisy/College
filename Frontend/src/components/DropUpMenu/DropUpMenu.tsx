// DropdownMenu.tsx
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styles from './DropUpMenu.module.scss';

interface DropdownMenuProps {
	links: { text: string; url: string }[];
	name: string;
}

const DropUpMenu: React.FC<DropdownMenuProps> = ({ links, name }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => setIsOpen(!isOpen);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);

	return (
		<div className={styles.dropUpMenu} ref={ref}>
			<button onClick={toggleDropdown} className={styles.button}>
				<div className={styles.dropUpMenu__row}>
					{name}
					<IoIosArrowUp
						className={classNames({ [styles.dropUpMenu__active]: isOpen })}
					/>
				</div>
			</button>
			{isOpen && (
				<div className={styles.dropdownContent}>
					{links.map((link, index) => (
						<a
							key={index}
							href={link.url}
							rel='noopener'
							className={styles.link}
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
