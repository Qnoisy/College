import { Form, Formik } from 'formik';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';
import { Input } from '../../Form/Input';
import { validationSchemaLogin } from '../../Form/helper';
import styles from './Login.module.scss';

interface LoginProps {
	onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
	const navigate = useNavigate();
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const { login } = useAuth();

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
				event.preventDefault();
				if (event.key === 'ArrowDown') {
					if (document.activeElement === usernameRef.current) {
						passwordRef.current?.focus();
					}
				} else if (event.key === 'ArrowUp') {
					if (document.activeElement === passwordRef.current) {
						usernameRef.current?.focus();
					}
				}
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const handleSubmit = async (values: {
		username: string;
		password: string;
	}) => {
		try {
			const response = await fetch('http://localhost:3001/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});

			const responseBody = await response.text();
			console.log(responseBody);

			if (response.ok) {
				const data = JSON.parse(responseBody);
				localStorage.setItem('token', data.token);
				login(data.token);
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
		<Formik
			initialValues={{ username: '', password: '' }}
			validationSchema={validationSchemaLogin}
			onSubmit={handleSubmit}
			className={styles.Login}
		>
			<Form className={styles.Login}>
				<Input
					id='username'
					label='Логін'
					name='username'
					placeholder='Логін'
					innerRef={usernameRef}
				/>
				<Input
					id='password'
					label='Пароль'
					name='password'
					type='password'
					placeholder='Пароль'
					innerRef={passwordRef}
				/>
				<Button type='submit' className={styles.btn}>
					Login
				</Button>
			</Form>
		</Formik>
	);
};

export default Login;
