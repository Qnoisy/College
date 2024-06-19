import { IoLibraryOutline } from 'react-icons/io5';
import { VscServerProcess } from 'react-icons/vsc';
import Page from '../../../Page/Page';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../components/sample/Title/Title';

export const Education = () => {
	const educationRoutes = [
		{
			name: 'Організація освітнього процесу',
			path: '/education/organization',
			icon: <IoLibraryOutline />,
		},
		{
			name: 'Неформальна освіта',
			path: '/education/nefor',
			icon: <VscServerProcess />,
		},
	];

	const educationContent = (
		<div>
			<Title text='Освіта' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Освіта - ЧПФК'>
			<DemoBlock
				routes={educationRoutes}
				content={educationContent}
				additionalLinks={educationRoutes}
			/>
		</Page>
	);
};
