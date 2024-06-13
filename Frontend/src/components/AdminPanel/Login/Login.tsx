import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

interface LoginProps {
	onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await fetch('http://localhost:3000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
			});

			const responseBody = await response.text();
			console.log(responseBody);

			if (response.ok) {
				const data = JSON.parse(responseBody);
				localStorage.setItem('token', data.token);
				onLogin();
				navigate('/admin');
			} else {
				alert('Authentication failed');
			}
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.Login}>
			<div>
				<label>Username:</label>
				<input
					type='text'
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<button type='submit'>Login</button>
		</form>
	);
};

export default Login;
