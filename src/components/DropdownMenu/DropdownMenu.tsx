import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DropdownMenu.module.scss';

interface DropdownMenuItem {
	name: string;
	path: string;
	icon?: JSX.Element;
}

interface DropdownMenuProps {
	items: DropdownMenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	return (
		<div className={styles.dropdown}>
			<button onClick={toggleDropdown} className={styles.dropdownToggle}>
				Menu
			</button>
			{isOpen && (
				<div className={styles.dropdownMenu}>
					{items.map((item, index) => (
						<div key={index} className={styles.dropdownItem}>
							<Link to={item.path} className={styles.dropdownLink}>
								{item.icon}
								{item.name}
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
