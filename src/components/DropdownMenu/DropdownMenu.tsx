import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DropdownMenu.module.scss';

interface DropdownMenuItem {
	name: string;
	path: string;
	icon?: JSX.Element;
}

interface DropdownMenuProps {
	title: string;
	items: DropdownMenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	return (
		<div className={styles.dropdown}>
			<button onClick={toggleDropdown} className={styles.dropdownToggle}>
				{title}
			</button>
			{isOpen && (
				<div className={styles.dropdownMenu}>
					{items.map((item, index) => (
						<Link to={item.path} className={styles.dropdownItem}>
							<div key={index} className={styles.dropdownLink}>
								{item.icon}
								{item.name}
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
