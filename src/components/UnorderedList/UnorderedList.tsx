import React from 'react';
import styles from './UnorderedList.module.scss';

interface UnorderedListProps {
	items: string[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ items }) => {
	return (
		<ul className={styles.unorderedList}>
			{items.map((item, index) => (
				<li className={styles.unorderedList__link} key={index}>
					{item}
				</li>
			))}
		</ul>
	);
};

export default UnorderedList;
