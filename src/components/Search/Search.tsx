import classNames from 'classnames';
import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { allRoutes } from '../../data/data';
import { IsubRoutes } from '../../types/CommonInterface';
import styles from './Search.module.scss';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isActive, setIsActive] = useState(false);
	const [suggestions, setSuggestions] = useState<IsubRoutes[]>([]);
	const navigate = useNavigate();

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);

		if (value.length > 1) {
			const searchQuery = value.toLowerCase().trim();
			const filteredSuggestions = allRoutes.filter(route =>
				route.name.toLowerCase().includes(searchQuery)
			);
			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	};

	const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (suggestions.length === 1) {
			navigate(suggestions[0].link);
		}
		setSearchTerm(''); // Очищення поля вводу
		setIsActive(false); // Закриття поля вводу
	};

	const toggleSearch = () => {
		setIsActive(!isActive);
	};

	return (
		<div className={classNames(styles.search, { [styles.active]: isActive })}>
			<form onSubmit={handleSearchSubmit} className={styles.searchForm}>
				<input
					type='text'
					value={searchTerm}
					onChange={handleSearchChange}
					placeholder='Пошук...'
					className={styles.searchInput}
					style={{ display: isActive ? 'block' : 'none' }} // Показувати або приховувати поле вводу
				/>
				<button
					type='button'
					className={styles.searchButton}
					onClick={toggleSearch} // Перемикач активного стану поля вводу
				>
					<IoMdSearch className={styles.searchIcon} />
				</button>
			</form>
			{isActive && suggestions.length > 0 && (
				<ul className={styles.suggestions}>
					{suggestions.map(suggestion => (
						<li
							key={suggestion.link}
							onClick={() => {
								navigate(suggestion.link);
								setSearchTerm(''); // Очищення поля вводу
								setIsActive(false); // Закриття поля вводу
							}}
						>
							{/* {searchTerm.length != 0 && (
								<div className={styles.search__suggestion}>
									{suggestion.name}
								</div>
							)} */}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
