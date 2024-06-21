import * as Yup from 'yup';

const regx = {
	name: /^[а-яА-Яa-zA-Z0-9 ]{2,30}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
};

const firstName = Yup.string()
	.matches(regx.name, 'Літери від 2 до 20')
	.required('Введіть ваше ім’я');

const lastName = Yup.string()
	.matches(regx.name, 'Літери від 2 до 20')
	.required('Введіть ваше прізвище');

const email = Yup.string()
	.matches(regx.email, 'Формат example@gmail.com')
	.required('Введіть вашу електронну адресу');

export const schemas = {
	custom: Yup.object().shape({
		firstName,
		lastName,
		email,
	}),
};
export const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
};
export const validationSchema = Yup.object().shape({
	title: Yup.string().notRequired(),
	description: Yup.string().required('Введіть опис'),
	category: Yup.string().required('Выберіть категорі.'),
	image: Yup.mixed().notRequired(),
});
export const validationSchemaLogin = Yup.object({
	username: Yup.string().required('Введіть ваше ім’я користувача'),
	password: Yup.string().required('Введіть ваш пароль'),
});
