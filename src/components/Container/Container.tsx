import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
	return (
		<div className={className}>
			<div className={styles.container}>{children}</div>
		</div>
	);
};
