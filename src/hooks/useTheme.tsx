import { useEffect, useLayoutEffect, useState } from 'react';

const getInitialTheme = () => {
	if (typeof window !== 'undefined') {
		const storedTheme = localStorage.getItem('app-theme');
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;

		return storedTheme || (prefersDark ? 'dark' : 'light');
	}
	return 'light';
};

export const useTheme = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const initialTheme = getInitialTheme();
		setTheme(initialTheme);
	}, []);

	useLayoutEffect(() => {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('app-theme', theme);
		}
	}, [theme]);

	return { theme, setTheme };
};
