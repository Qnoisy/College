import Page from '../../../Page/Page'
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock'
import Title from '../../../components/sample/Title/Title'

export const Educationalunits = () => {

	const educationalunitsRoutes = [
		{
			name: 'Циклова комісія',
			path: '/educational-units/tsyklovi-komisii',
		},
		{ 
			name: 'Відділення', path: '/educational-units/department',
		},
		{ 
			name: 'Основні підрозділи', path: '/educational-units/mainsub' 
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
