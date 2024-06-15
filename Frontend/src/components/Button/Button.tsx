import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string; // Опциональный className для дополнительного стилизации
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button className={classNames('button', 'style', className)} {...props}>
			{children}
		</button>
	);
};
