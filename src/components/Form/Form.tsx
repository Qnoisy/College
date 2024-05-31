// CustomForm.tsx
import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from '../Button';
import styles from './Form.module.scss';
import { Input } from './Input'; // Предполагаем, что Input уже типизирован
import MapComponent from './MapComponent/MapComponent';
import { Textarea } from './Textarea';
import { initialValues, schemas } from './helper';

export const CustomForm: React.FC = () => {
	return (
		<div className='row'>
			<Formik
				initialValues={initialValues}
				validationSchema={schemas.custom}
				onSubmit={() => console.log('success')}
			>
				<Form className={styles.form}>
					<Input
						label='Ім’я'
						name='firstName'
						id='firstName'
						placeholder='Введіть ваше ім’я'
					/>
					<Input
						label='Прізвище'
						name='lastName'
						id='lastName'
						placeholder='Введіть ваше прізвище'
					/>
					<Input
						label='Електронна адреса'
						name='email'
						id='email'
						placeholder='Введіть вашу електронну адресу'
					/>
					<Textarea
						label='Коментар'
						name='comment'
						id='comment'
						placeholder='Ваш комментарий'
					/>
					<Button>Відправити</Button>
				</Form>
			</Formik>
			<MapComponent />
		</div>
	);
};
