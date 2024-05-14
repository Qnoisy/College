import Page from '../../../Page/Page';
import DropdownList from '../../../components/DropdownList/DropdownList';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../components/sample/Title/Title';

export const Entrycompany = () => {
	const accreditationRoutes = [
		{
			name: 'Наші спеціальності',
			path: '/accreditation/nashi-spetsialnosti',
		},
		{
			name: 'ОПС Фаховий Молодший Бакалавр',
			path: '/accreditation/ops-fakhovyi-molodshyi-bakalavr',
		},
		{ name: 'Вступна кампанія', path: '/accreditation/vstup' },
		{ name: 'Архів', path: '/accreditation/arkhiv' },
	];

	const list = [
		{ name: 'Обзор', path: '/accreditation/overview' },
		{ name: 'Документы', path: '/accreditation/documents' },
		{ name: 'Контакты', path: '/accreditation/contacts' },
	];

	const accreditationContent = (
		<div>
			<Title text='Приймальна комісія' />
			<hr className='hr-style' />
			<DropdownList options={list}/> 
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Приймальна комісія - ЧПФК'>
			<DemoBlock routes={accreditationRoutes} content={accreditationContent} />
		</Page>
	);
};
