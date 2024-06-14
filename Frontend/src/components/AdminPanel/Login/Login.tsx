import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import styles from './Login.module.scss';

interface LoginProps {
	onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
	const navigate = useNavigate();
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

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

	const validationSchema = Yup.object({
		username: Yup.string().required('Введіть ваше ім’я користувача'),
		password: Yup.string().required('Введіть ваш пароль'),
	});

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

			const responseBody = await response.text(); // Используйте .text() вместо .json()
			console.log(responseBody); // Логирование ответа для отладки

			if (response.ok) {
				const data = JSON.parse(responseBody); // Парсинг текста как JSON вручную
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
		<Formik
			initialValues={{ username: '', password: '' }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form className={styles.Login}>
				<div>
					<label className={styles.label} htmlFor='username'>
						Логін:
					</label>
					<Field name='username' type='text' innerRef={usernameRef} />
					<ErrorMessage
						name='username'
						component='div'
						className={styles.error}
					/>
				</div>
				<div>
					<label className={styles.label} htmlFor='password'>
						Пароль:
					</label>
					<Field name='password' type='password' innerRef={passwordRef} />
					<ErrorMessage
						name='password'
						component='div'
						className={styles.error}
					/>
				</div>
				<button type='submit'>Login</button>
			</Form>
		</Formik>
	);
};

export default Login;
