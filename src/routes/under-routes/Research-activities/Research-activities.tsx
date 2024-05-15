import Page from '../../../Page/Page';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../components/sample/Title/Title';


export const Researchactivities = () => {
	const researchactivitiesRoutes = [
		{
			name: 'Дні науки',
			path: '/research-activities/dni-nauky',
		},
		{ 
			name: 'Наука в коледжі', path: '/research-activities/nauka-v-koledzhi' 
		},
		{
			name: 'Науково-дослідна робота студентів',
			path: '/research-activities/naukova-diialnist-vykladachiv',
		},
		{ 
			name: 'Наукова діяльність викладачів', 
			path: '/research-activities/naukovodoslidna-robota-studentiv' 
		},
	];


	const researchactivitiesContent = (
		<div>
			<Title text='Наукова діяльність' />
			<hr className='hr-style' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Наукова діяльність - ЧПФК'>
			<DemoBlock routes={researchactivitiesRoutes} content={researchactivitiesContent} />
		</Page>
	);

};
