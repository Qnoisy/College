import classNames from 'classnames';
import { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
	children,
	onClick,
	className,
	type = 'button',
}: ButtonProps) => {
	return (
		<button
			className={classNames('button', 'style', className)}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};
