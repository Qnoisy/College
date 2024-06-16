import { ErrorMessage, Field } from 'formik';
import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
	id: string;
	label: string;
	name: string;
	type?: string;
	placeholder: string;
	innerRef?: React.Ref<HTMLInputElement>;
}

export const Input = ({
	id,
	label,
	name,
	type = 'text',
	placeholder,
	innerRef,
}: InputProps) => {
	return (
		<div className={styles.input_container}>
			<label htmlFor={id}>{label}</label>
			<Field
				name={name}
				id={id}
				type={type}
				placeholder={placeholder}
				innerRef={innerRef}
			/>
			<ErrorMessage name={name} className={styles.error} component='div' />
		</div>
	);
};
