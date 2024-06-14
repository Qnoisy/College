import * as Yup from 'yup';

const regx = {
	name: /^[а-яА-Яa-zA-Z]{2,20}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
};

const firstName = Yup.string()
	.matches(regx.name, 'Латинские буквы, от 2 до 20 символов')
	.required('Введіть ваше ім’я');

const lastName = Yup.string()
	.matches(regx.name, 'Латинские буквы, от 2 до 20 символов')
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
