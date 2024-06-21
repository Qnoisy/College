import { GiElectricalResistance, GiFarmer } from 'react-icons/gi';
import Page from '../../../../../../../Page/Page';
import DemoBlock from '../../../../../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../../../../../components/sample/Title/Title';

export const Electricalengineering = () => {
	const ElectricalengineeringRoutes = [
		{
			name: 'Монтаж, обслуговування та ремонт електротехнічних установок в агропромисловому комплексі',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/es',
			icon: <GiFarmer />,
		},
		{
			name: 'Монтаж і експлуатація електроустаткування підприємств і цивільних споруд',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ep',
			icon: <GiElectricalResistance />,
		},
	];
	const ElectricalengineeringContent = (
		<div>
			<Title text='Електротехнічне' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Електротехнічне - ЧПФК'>
			<DemoBlock
				additionalLinks={ElectricalengineeringRoutes}
				content={ElectricalengineeringContent}
				routes={ElectricalengineeringRoutes}
			/>
		</Page>
	);
};
