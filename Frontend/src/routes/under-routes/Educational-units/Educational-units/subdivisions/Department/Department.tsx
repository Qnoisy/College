import {
	GiAutoRepair,
	GiElectricalResistance,
	GiPowerGenerator,
} from 'react-icons/gi';
import { TbBusinessplan } from 'react-icons/tb';
import Page from '../../../../../../Page/Page';
import DemoBlock from '../../../../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../../../../components/sample/Title/Title';

export const Department = () => {
	const tsyklovikomisiiRoutes = [
		{
			name: "ВІДДІЛЕННЯ БІЗНЕС-ОСВІТИ ТА КОМП'ЮТЕРНИХ ТЕХНОЛОГІЙ",
			path: '/educational-units/department/bus-kt-education',
			icon: <TbBusinessplan />,
		},
		{
			name: 'ЕЛЕКТРОМЕХАНІЧНЕ ВІДДІЛЕННЯ',
			path: '/educational-units/department/electromechanical',
			icon: <GiPowerGenerator />,
		},
		{
			name: 'ЕЛЕКТРОТЕХНІЧНЕ ВІДДІЛЕННЯ',
			path: '/educational-units/department/electricalengineering',
			icon: <GiElectricalResistance />,
		},
		{
			name: 'МЕХАНІЧНЕ ВІДДІЛЕННЯ',
			path: '/educational-units/department/mechanical',
			icon: <GiAutoRepair />,
		},
	];

	const departmentContent = (
		<div>
			<Title text='Відділення' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Відділення - ЧПФК'>
			<DemoBlock
				additionalLinks={tsyklovikomisiiRoutes}
				content={departmentContent}
				routes={tsyklovikomisiiRoutes}
			/>
		</Page>
	);
};
