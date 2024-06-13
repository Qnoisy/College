import { BsFuelPumpDiesel } from 'react-icons/bs';
import { PiEngineLight, PiFactory } from 'react-icons/pi';
import Page from '../../../../../../../Page/Page';
import { Button } from '../../../../../../../components/Button';
import DemoBlock from '../../../../../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../../../../../components/sample/Title/Title';

export const Mechanical = () => {
	const MechanicalLinks = [
		{
			name: 'Технологія обробки матеріалів на верстатах і автоматичних лініях',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/om',
			icon: <PiFactory />,
		},
		{
			name: 'Обслуговування та ремонт автомобілів і двигунів',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ra',
			icon: <PiEngineLight />,
		},
		{
			name: 'Обслуговування та ремонт обладнання підприємств хімічної і нафтогазопереробної промисловості',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/zm',
			icon: <BsFuelPumpDiesel />,
		},
	];
	const MechanicalRoutes = [
		{
			name: 'Технологія обробки матеріалів на верстатах і автоматичних лініях',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/om',
			icon: <PiFactory />,
		},
		{
			name: 'Обслуговування та ремонт автомобілів і двигунів',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ra',
			icon: <PiEngineLight />,
		},
		{
			name: 'Обслуговування та ремонт обладнання підприємств хімічної і нафтогазопереробної промисловості',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/zm',
			icon: <BsFuelPumpDiesel />,
		},
	];
	const MechanicalContent = (
		<div>
			<Title text='Механічне' />
			<Button
				onClick={() => {
					window.open(
						'https://www.youtube.com/watch?v=2fLMVISHOx4&t=7s',
						'_blank'
					);
				}}
			>
				Презентація освітньої програми "Обслуговування та ремонт автомобілів і
				двигунів"
			</Button>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Механічне - ЧПФК'>
			<DemoBlock
				additionalLinks={MechanicalLinks}
				content={MechanicalContent}
				routes={MechanicalRoutes}
			/>
		</Page>
	);
};
