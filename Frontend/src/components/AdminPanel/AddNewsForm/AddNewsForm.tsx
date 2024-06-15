import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useAction } from '../../../hooks/useAction';
import { Button } from '../../Button/Button';
import styles from './AddNewsForm.module.scss';

const regx = {
	name: /^[а-яА-Яa-zA-Z]{2,20}$/,
};

const validationSchema = Yup.object().shape({
	title: Yup.string()
		.matches(regx.name, 'Латинские буквы, от 2 до 20 символов')
		.required('Введите заголовок'),
	description: Yup.string().required('Введите описание'),
	category: Yup.string().required('Выберите категорию'),
	path: Yup.string().required('Введите путь'),
	image: Yup.mixed().required('Выберите изображение'),
});

const AddNewsForm: React.FC = () => {
	const { addNews } = useAction();

	const handleSubmit = (values: any, { resetForm }: any) => {
		const formData = new FormData();
		formData.append('title', values.title);
		formData.append('description', values.description);
		formData.append('category', values.category);
		formData.append('path', values.path);
		if (values.image) {
			formData.append('image', values.image);
		}

		addNews(formData);
		resetForm(); // Reset the form after submission
	};

	return (
		<Formik
			initialValues={{
				title: '',
				description: '',
				category: 'category.ACTUAL',
				path: '/news',
				image: null,
			}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ setFieldValue }) => (
				<Form className={styles.addNewsForm}>
					<Field type='text' name='title' placeholder='Title' />
					<ErrorMessage name='title' component='div' className={styles.error} />
					<Field as='textarea' name='description' placeholder='Description' />
					<ErrorMessage
						name='description'
						component='div'
						className={styles.error}
					/>
					<Field as='select' name='category'>
						<option value='category.ACTUAL'>Актуально</option>
						<option value='category.ANNOUNCE'>Анонси</option>
						<option value='category.EVENTS'>Події</option>
					</Field>
					<ErrorMessage
						name='category'
						component='div'
						className={styles.error}
					/>
					<Field type='text' name='path' placeholder='Path' />
					<ErrorMessage name='path' component='div' className={styles.error} />
					<input
						type='file'
						name='image'
						onChange={event => {
							if (event.target.files) {
								setFieldValue('image', event.target.files[0]);
							}
						}}
						accept='image/*'
					/>
					<ErrorMessage name='image' component='div' className={styles.error} />
					<Button type='submit'>Add News</Button>
				</Form>
			)}
		</Formik>
	);
};

export default AddNewsForm;
