// Textarea.tsx
import { useField } from 'formik';
import React from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps {
	label: string;
	name: string;
	id: string;
	placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={props.id || props.name}>{label}</label>
			<textarea className={styles.textarea} {...field} {...props} />
			{meta.touched && meta.error ? (
				<span className={styles.error}>{meta.error}</span>
			) : null}
		</div>
	);
};
