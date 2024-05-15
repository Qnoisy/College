import Page from '../../../Page/Page';
import DropUpMenu from '../../../components/DropUpMenu/DropUpMenu';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../components/sample/Title/Title';

export const Educationalunits = () => {
	const educationalunitsRoutes = [
		{
			name: 'Наші спеціальності',
			path: '/entry-company/nashi-spetsialnosti',
		},
		{
			name: 'ОПС Фаховий Молодший Бакалавр',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr',
		},
		{ 
			name: 'Вступна кампанія', path: '/entry-company/vstup' 
		},
		{ 
			name: 'Архів', path: '/entry-company/arkhiv' 
		},
	];


	const educationalunitsContent = (
		<div>
			<Title text='Освітні підрозділи' />
			<hr className='hr-style' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Освітні підрозділи - ЧПФК'>
			<DemoBlock routes={educationalunitsRoutes} content={educationalunitsContent} />
		</Page>
	);
};
