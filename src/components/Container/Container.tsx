import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
	children: ReactNode;
	className?: string;
	section?: boolean;
	offPadding?: boolean;
}

export const Container = ({
	children,
	className,
	section = false,
	offPadding = false,
}: ContainerProps) => {
	const containerClasses = classNames(styles.container, {
		[styles.section]: section,
		[styles.offPadding]: offPadding,
	});

	return (
		<div className={className}>
			<div className={containerClasses}>{children}</div>
		</div>
	);
};
