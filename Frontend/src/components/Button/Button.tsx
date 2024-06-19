import classNames from 'classnames';
import React, { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
}

const ButtonComponent = ({
	children,
	onClick,
	className,
	type = 'button',
}: ButtonProps) => {
	console.log('btn');

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

export const Button = React.memo(ButtonComponent);
