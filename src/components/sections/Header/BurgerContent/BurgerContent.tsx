import classNames from 'classnames';
import Hamburger from 'hamburger-react';
import { Container } from '../../../Container';
import styles from './BurgerContent.module.scss';

interface BurgerContentProps {
	isOpen: boolean;
	handler: () => void;
}

export const BurgerContent = ({ isOpen, handler }: BurgerContentProps) => {
	return (
		<div
			className={classNames(styles.burgerContent, {
				[styles.active]: isOpen,
			})}
		>
			<div className={styles.burgerContent__block}>
				<Container>
					<div className={styles.burgerContent__block_row}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
						tempora ex. A, ratione pariatur. Vel ad culpa eum earum maiores
						excepturi consequuntur id dolores, labore cupiditate, autem nesciunt
						iste necessitatibus!
						<Hamburger toggled={isOpen} toggle={handler} />
					</div>
				</Container>
			</div>
		</div>
	);
};
