import styles from './Pagination.module.scss';
interface PaginationProps {
	itemsPerPage: number;
	totalItems: number;
	paginate: (pageNumber: number) => void;
}

export const Pagination = ({
	itemsPerPage,
	totalItems,
	paginate,
}: PaginationProps) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className={styles.pagination}>
				{pageNumbers.map(number => (
					<li key={number} className={styles.pageItem}>
						<button
							onClick={() => paginate(number)}
							className={styles.pageLink}
						>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
