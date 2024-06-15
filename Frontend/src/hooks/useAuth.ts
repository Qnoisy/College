import { useEffect, useState } from 'react';

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setIsAuthenticated(true);
		}
	}, []);

	const login = (token: string) => {
		localStorage.setItem('token', token);
		setIsAuthenticated(true);
	};

	const logout = () => {
		localStorage.removeItem('token');
		setIsAuthenticated(false);
	};

	return { isAuthenticated, login, logout };
};
