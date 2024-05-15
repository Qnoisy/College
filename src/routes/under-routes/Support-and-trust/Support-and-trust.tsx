import Page from '../../../Page/Page';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../components/sample/Title/Title';


export const Supportandtrust = () => {
	const supportandtrustRoutes = [
		{
			name: 'Соціальний педагог',
			path: '/support-and-trust/sotsialnyi-pedahoh',
		},
		{
			name: 'Практичний психолог',
			path: '/support-and-trust/praktychnyi-psykholoh',
		},
		{ 
			name: 'Загальна інформація', 
			path: '/support-and-trust/sotsialno-psykholohichna-pidtrymka',
		},
	];


	const supportandtrustContent = (
		<div>
			<Title text='Підтримка та довіра' />
			<hr className='hr-style' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Підтримка та довіра - ЧПФК'>
			<DemoBlock routes={supportandtrustRoutes} content={supportandtrustContent} />
		</Page>
	);
};
