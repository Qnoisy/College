import classNames from 'classnames';
import Hamburger from 'hamburger-react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { headerRoutes, subRoutes } from '../../../../data/data';
import ContactLink from '../../../ContactLink/ContactLink';
import { Container } from '../../../Container';
import styles from './BurgerContent.module.scss';

interface BurgerContentProps {
	isOpen: boolean;
	handler: () => void;
}

export const BurgerContent = ({ isOpen, handler }: BurgerContentProps) => {
	const mergeitems = subRoutes.concat(headerRoutes);
	const routes = mergeitems.map((route, index) => {
		return (
			<NavLink to={route.link} onClick={handler} key={index}>
				<li className={styles.burgerContent__link}>{route.name}</li>
			</NavLink>
		);
	});

	return (
		<div
			className={classNames(styles.burgerContent, {
				[styles.active]: isOpen,
			})}
		>
			<Container className={styles.burgerContent__block}>
				<div className={styles.burgerContent__block_row}>
					<div>
						<ul className={styles.burgerContent__block_list}>{routes}</ul>
						<div className={styles.contacts__links}>
							<ContactLink
								url='https://mail.google.com/mail/?view=cm&fs=1&to=info@chpt.edu.ua'
								icon={AiOutlineMail}
								text='info@chpt.edu.ua'
								className={styles.contacts__link}
							/>
							<ContactLink
								url='tel:+384723360728'
								icon={AiOutlinePhone}
								text='(0472)36-07-28'
								className={styles.contacts__link}
							/>
						</div>
					</div>
					<Hamburger toggled={isOpen} toggle={handler} />
				</div>
			</Container>
		</div>
	);
};
