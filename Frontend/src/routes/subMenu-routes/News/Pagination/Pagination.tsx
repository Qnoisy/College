import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
	itemsPerPage: number;
	totalItems: number;
	currentPage: number;
	paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
	itemsPerPage,
	totalItems,
	currentPage,
	paginate,
}) => {
	const pageNumbers = React.useMemo(() => {
		const numbers = [];
		for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
			numbers.push(i);
		}
		return numbers;
	}, [totalItems, itemsPerPage]);

	return (
		<nav className={styles.pagination}>
			{pageNumbers.map(number => (
				<button
					key={number}
					onClick={() => paginate(number)}
					className={`${styles.pageLink} ${
						number === currentPage ? styles.active : ''
					}`}
				>
					{number}
				</button>
			))}
		</nav>
	);
};
