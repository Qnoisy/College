import Page from '../../../Page/Page';
import DropUpMenu from '../../../components/DropUpMenu/DropUpMenu';
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
		{
			text: 'Правила прийому до черкаського політехнічного фахового коледжу для здобуття освітньо-професійного ступеня фахового молодшого бакалаρα у 2024 році',
			url: 'https://drive.google.com/file/d/1zqZEcLOUcjpOKR6c6DKZ-uu6mnPQ0sVW/view?usp=sharing',
		},
		{
			text: 'Положення про приймальну комісію черкаського політехнічного фахового коледжу у 2024 році',
			url: 'https://drive.google.com/file/d/1zqZEcLOUcjpOKR6c6DKZ-uu6mnPQ0sVW/view?usp=sharing',
		},
		{
			text: 'Наказ про зарахування на навчання денної форми здобуття освіти за кошти фізичних та/або юридичних осіб на основі БСО (9 класів)',
			url: 'https://drive.google.com/file/d/1C-xRkuAxPaR4LYziaBs1vAYEruFUqUQT/view?usp=sharing',
		},
	];

	const accreditationContent = (
		<div>
			<Title text='Приймальна комісія' />
			<hr className='hr-style' />
			<DropUpMenu links={list} name={'Правила прийому'} />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Приймальна комісія - ЧПФК'>
			<DemoBlock routes={accreditationRoutes} content={accreditationContent} />
		</Page>
	);
};
