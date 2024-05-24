import Page from '../../../Page/Page';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../components/sample/Title/Title';

export const College  = () => {

	const сollegeRoutes = [
		{
			name: 'Про нас',
			path: '/сollege/pro-nas',
		},
		{
			name: 'Загальна Інформація',
			path: '/сollege/zagaln-informacia',
		},
		{ 
			name: 'Публічна Інформація', path: '/сollege/publichna-informatsiia',
		},
	];


	const сollegeContent = (
		<div>
			<Title text='Коледж' />
			<hr className='hr-style' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Коледж - ЧПФК'>
			<DemoBlock routes={сollegeRoutes} content={сollegeContent} />
		</Page>
	);
};
