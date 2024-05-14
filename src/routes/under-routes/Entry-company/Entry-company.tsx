import Page from '../../../Page/Page';
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

	const accreditationContent = (
		<div>
			<Title text='Приймальна комісія' />
			<hr className='hr-style' />

			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Приймальна комісія - ЧПФК'>
			<DemoBlock routes={accreditationRoutes} content={accreditationContent} />
		</Page>
	);
};
