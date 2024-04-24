import { ImasObjLinks } from '../../types/CommonInterface';
import { NavHeader } from '../NavHeader';
import styles from './Header.module.scss';

// interface HeaderProps {}

export const Header = () => {
	const masObjLinks: ImasObjLinks[] = [
		{
			title: 'Публічне обговорення',
			link: '/publichne-obhovorennia',
		},
		{
			title: 'Aкредетація ОП',
			link: '/acredetation-op',
		},
		{
			title: 'Структурні підрозділи',
			link: '/pidrozdily',
		},
		{
			title: 'Розклад',
			link: '/rozklad',
		},
		{
			title: 'Навчальні Матеріали',
			link: 'https://mdl.chpt.edu.ua/',
		},
		{
			title: 'Вхід',
			link: '/login',
		},
	];
	return (
		<header className={styles.header}>
			<NavHeader navLinks={masObjLinks} />
		</header>
	);
};
