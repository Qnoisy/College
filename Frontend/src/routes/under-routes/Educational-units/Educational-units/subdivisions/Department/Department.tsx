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
	const tsyklovikomisiiLinks = [
		{
			name: "ВІДДІЛЕННЯ БІЗНЕС-ОСВІТИ ТА КОМП'ЮТЕРНИХ ТЕХНОЛОГІЙ",
			path: '/educational-units/department/DEPARTMENTOFBUSINESSEDUCATIONANDKT',
			icon: <TbBusinessplan />,
		},
		{
			name: 'ЕЛЕКТРОМЕХАНІЧНЕ ВІДДІЛЕННЯ',
			path: '/educational-units/department/Electromechanical',
			icon: <GiPowerGenerator />,
		},
		{
			name: 'ЕЛЕКТРОТЕХНІЧНЕ ВІДДІЛЕННЯ',
			path: '/educational-units/department/Electricalengineering',
			icon: <GiElectricalResistance />,
		},
		{
			name: 'МЕХАНІЧНЕ ВІДДІЛЕННЯ',
			path: '/educational-units/department/Mechanical',
			icon: <GiAutoRepair />,
		},
	];
	const tsyklovikomisiiRoutes = [
		{
			name: "ВІДДІЛЕННЯ БІЗНЕС-ОСВІТИ ТА КОМП'ЮТЕРНИХ ТЕХНОЛОГІЙ",
			path: '/educational-units/department/DEPARTMENTOFBUSINESSEDUCATIONANDKT',
			icon: <TbBusinessplan />,
		},
		{
			name: 'ЕЛЕКТРОМЕХАНІЧНЕ ВІДДІЛЕННЯ',
			path: '/educational-units/department/Electromechanical',
			icon: <GiPowerGenerator />,
		},
		{
			name: 'ЕЛЕКТРОТЕХНІЧНЕ ВІДДІЛЕННЯ',
			path: '/educational-units/department/Electricalengineering',
			icon: <GiElectricalResistance />,
		},
		{
			name: 'МЕХАНІЧНЕ ВІДДІЛЕННЯ',
			path: '/educational-units/department/Mechanical',
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
				additionalLinks={tsyklovikomisiiLinks}
				content={departmentContent}
				routes={tsyklovikomisiiRoutes}
			/>
		</Page>
	);
};
