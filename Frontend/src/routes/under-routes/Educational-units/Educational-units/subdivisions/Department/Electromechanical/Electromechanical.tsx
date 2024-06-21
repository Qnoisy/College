import { GiMechanicGarage } from 'react-icons/gi';
import { PiRobotLight } from 'react-icons/pi';
import Page from '../../../../../../../Page/Page';
import { Button } from '../../../../../../../components/Button';
import DemoBlock from '../../../../../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../../../../../components/sample/Title/Title';

export const Electromechanical = () => {
	const ElectromechanicalRoutes = [
		{
			name: 'Обслуговування верстатів з програмним управлінням і робототехнічних комплексів',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ov',
			icon: <PiRobotLight />,
		},
		{
			name: 'Обслуговування та ремонт електроустаткування автомобілів і тракторів',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ea',
			icon: <GiMechanicGarage />,
		},
	];
	const ElectromechanicalContent = (
		<div>
			<Title text='Електромеханічне' />
			<Button
				onClick={() => {
					window.open('https://www.youtube.com/watch?v=UAqbQnfXLBQ', '_blank');
				}}
			>
				Презентація освітньої програми "Обслуговування верстатів з програмним
				управлінням і робототехнічних комплексів"
			</Button>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Електромеханічне - ЧПФК'>
			<DemoBlock
				additionalLinks={ElectromechanicalRoutes}
				content={ElectromechanicalContent}
				routes={ElectromechanicalRoutes}
			/>
		</Page>
	);
};
