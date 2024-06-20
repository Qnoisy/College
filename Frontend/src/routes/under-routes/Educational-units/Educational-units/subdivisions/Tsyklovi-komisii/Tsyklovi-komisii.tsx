import { FaCar, FaLaptopCode } from 'react-icons/fa';
import {
	GiMaterialsScience,
	GiMechanicGarage,
	GiPowerGenerator,
	GiWorld,
} from 'react-icons/gi';
import { MdOutlineElectricBolt } from 'react-icons/md';
import Page from '../../../../../../Page/Page';
import DemoBlock from '../../../../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../../../../components/sample/Title/Title';

export const Tsyklovikomisii = () => {
	const tsyklovikomisiiRoutes = [
		{
			name: 'ЦИКЛОВА КОМІСІЯ  ДИСЦИПЛІН ЗАГАЛЬНООСВІТНЬОЇ ПІДГОТОВКИ',
			path: '/educational-units/tsyklovi-komisii/DisciplinesofGenera',
			icon: <GiMaterialsScience />,
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ  ФІЛОЛОГІЧНИХ ТА ГУМАНІТАРНИХ ДИСЦИПЛІН',
			path: '/educational-units/tsyklovi-komisii/Philologicalandhumanitarian',
			icon: <GiWorld />,
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ  ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ ТА СОЦІАЛЬНО-ЕКОНОМІЧНИХ ДИСЦИПЛІН',
			path: '/educational-units/tsyklovi-komisii/SoftwareandSoc-Eco',
			icon: <FaLaptopCode />,
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН ПРОФЕСІЙНО-ПРАКТИЧНОЇ ПІДГОТОВКИ ЕЛЕКТРОЕНЕРГЕТИЧНИХ СПЕЦІАЛЬНОСТЕЙ',
			path: '/educational-units/tsyklovi-komisii/ElecEnergySpec',
			icon: <GiPowerGenerator />,
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ЕЛЕКТРОМЕХАНІЧНИХ ДИСЦИПЛІН',
			path: '/educational-units/tsyklovi-komisii/CCElectromechanical',
			icon: <MdOutlineElectricBolt />,
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ЗАГАЛЬНОТЕХНІЧНИХ ДИСЦИПЛІН ТА ГАЛУЗЕВОГО МАШИНОБУДУВАННЯ',
			path: '/educational-units/tsyklovi-komisii/GTDandIME',
			icon: <GiMechanicGarage />,
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН АВТОМОБІЛЬНОГО ТРАНСПОРТУ',
			path: '/educational-units/tsyklovi-komisii/RoadTransport',
			icon: <FaCar />,
		},
	];
	const tsyklovikomisiiContent = (
		<div>
			<Title text='Циклові комісії' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Циклова комісія - ЧПФК'>
			<DemoBlock
				additionalLinks={tsyklovikomisiiRoutes}
				content={tsyklovikomisiiContent}
				routes={tsyklovikomisiiRoutes}
			/>
		</Page>
	);
};
