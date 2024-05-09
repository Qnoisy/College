import classNames from 'classnames';
import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import styles from './Search.module.scss';

interface SearchProps {
	onSearch: (query: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isActive, setIsActive] = useState(false);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (searchTerm.trim()) {
			onSearch(searchTerm);
			setIsActive(false); // Закриваємо поле пошуку після виконання
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && searchTerm.trim()) {
			event.preventDefault(); // Запобігаємо стандартній поведінці, якщо поле введення не пусте
			onSearch(searchTerm);
			setIsActive(false); // Закриваємо поле пошуку після виконання
		}
	};

	const toggleSearch = () => {
		setIsActive(current => !current); // Змінюємо стан на протилежний
	};

	return (
		<div className={classNames(styles.search, { [styles.active]: isActive })}>
			<form onSubmit={handleSearchSubmit} className={styles.searchForm}>
				<input
					type='text'
					value={searchTerm}
					onChange={handleSearchChange}
					onKeyDown={handleKeyDown}
					placeholder='Пошук...'
					className={styles.searchInput}
					style={{ opacity: isActive ? 1 : 0 }}
				/>
				<button
					type='button' // Змінено на type="button" щоб уникнути небажаного сабміта форми
					className={styles.searchButton}
					onClick={toggleSearch}
				>
					<IoMdSearch className={styles.searchIcon} />
				</button>
			</form>
		</div>
	);
};
