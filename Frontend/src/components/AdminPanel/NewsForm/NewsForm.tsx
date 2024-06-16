import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { MdBorderColor, MdLibraryAdd } from 'react-icons/md';
import { Button } from '../../Button/Button';
import { Input } from '../../Form/Input';
import { Textarea } from '../../Form/Textarea';
import { validationSchema } from '../../Form/helper';
import styles from './NewsForm.module.scss';

interface NewsFormProps {
	initialValues: {
		title: string;
		description: string;
		category: string;
		image: File | null;
	};
	onSubmit: (values: any, { resetForm }: any) => void;
	buttonText: string;
	onCancel?: () => void; // Додали необов'язковий обробник для кнопки Закрити
}

const NewsForm: React.FC<NewsFormProps> = ({
	initialValues,
	onSubmit,
	buttonText,
	onCancel,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({ setFieldValue }) => (
				<Form className={styles.newsForm}>
					<Input
						id='title'
						label='Заголовок'
						name='title'
						placeholder='Заголовок'
					/>
					<Textarea
						id='description'
						label='Опис'
						name='description'
						placeholder='Опис'
					/>
					<label htmlFor='category' className={styles.label}>
						Категорія
					</label>
					<Field as='select' name='category' className={styles.inputField}>
						<option value='category.ACTUAL'>Актуально</option>
						<option value='category.ANNOUNCE'>Анонси</option>
						<option value='category.EVENTS'>Події</option>
					</Field>
					<label htmlFor='category' className={styles.label}>
						Файл
					</label>
					<input
						type='file'
						name='image'
						onChange={event => {
							if (event.target.files) {
								setFieldValue('image', event.target.files[0]);
							}
						}}
						accept='image/*'
						className={styles.inputField}
					/>
					<ErrorMessage name='image' className={styles.error} component='div' />
					<div className={styles.btn__block}>
						<Button className={styles.btn} type='submit'>
							<MdLibraryAdd style={{ fontSize: '1.5rem' }} />
							{buttonText}
						</Button>
						{buttonText === 'Редагувати новину' && onCancel && (
							<Button type='button' className={styles.btn} onClick={onCancel}>
								<MdBorderColor style={{ fontSize: '1.5rem' }} /> Закрити
							</Button>
						)}
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default NewsForm;
