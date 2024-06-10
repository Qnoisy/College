import { FaCar, FaLaptopCode } from "react-icons/fa"
import { GiMaterialsScience, GiMechanicGarage, GiPowerGenerator, GiWorld } from "react-icons/gi"
import { MdOutlineElectricBolt } from "react-icons/md"
import Page from '../../../../../Page/Page'
import DemoBlock from '../../../../../components/sample/DemoBlock/DemoBlock'
import Title from '../../../../../components/sample/Title/Title'

export const Tsyklovikomisii = () => {
	const tsyklovikomisiiLinks = [
		{
			name: 'ЦИКЛОВА КОМІСІЯ  ДИСЦИПЛІН ЗАГАЛЬНООСВІТНЬОЇ ПІДГОТОВКИ',
			path: '/educational-units/tsyklovi-komisii/CyclicCommissionofDisciplinesofGeneralEducation',
			icon: <GiMaterialsScience />
			
		},
		{ 
			name: 'ЦИКЛОВА КОМІСІЯ  ФІЛОЛОГІЧНИХ ТА ГУМАНІТАРНИХ ДИСЦИПЛІН', 
			path: '/educational-units/tsyklovi-komisii/Cycliccommissionofphilologicalandhumanitariandisciplines',
			icon: <GiWorld /> 
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ  ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ ТА СОЦІАЛЬНО-ЕКОНОМІЧНИХ ДИСЦИПЛІН',
			path: '/educational-units/tsyklovi-komisii/CyclingCommissionofSoftwareandSocioEconomicDisciplines',
			icon: <FaLaptopCode />
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН ПРОФЕСІЙНО-ПРАКТИЧНОЇ ПІДГОТОВКИ ЕЛЕКТРОЕНЕРГЕТИЧНИХ СПЕЦІАЛЬНОСТЕЙ',
			path: '/educational-units/tsyklovi-komisii/CycCommDiscProfPracTrainElecEnergySpec',
			icon: <GiPowerGenerator />
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ЕЛЕКТРОМЕХАНІЧНИХ ДИСЦИПЛІН',
			path: '/educational-units/tsyklovi-komisii/Cyclicalcommissionofelectromechanicaldisciplines',
			icon: <MdOutlineElectricBolt />,
		},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ЗАГАЛЬНОТЕХНІЧНИХ ДИСЦИПЛІН ТА ГАЛУЗЕВОГО МАШИНОБУДУВАННЯ',
			path: '/educational-units/tsyklovi-komisii/CCofGTDandIME',
			icon: <GiMechanicGarage />,},
		{
			name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН АВТОМОБІЛЬНОГО ТРАНСПОРТУ',
			path: '/educational-units/tsyklovi-komisii/CyclicalCommissionofRoadTransportDisciplines',
			icon: <FaCar />,
		},
	];
	const tsyklovikomisiiRoutes = [
		{ name: 'ЦИКЛОВА КОМІСІЯ  ДИСЦИПЛІН ЗАГАЛЬНООСВІТНЬОЇ ПІДГОТОВКИ', path: '/educational-units/tsyklovi-komisii/CyclicCommissionofDisciplinesofGeneralEducation' ,
		icon: <GiMaterialsScience />},
		{ name: 'ЦИКЛОВА КОМІСІЯ  ФІЛОЛОГІЧНИХ ТА ГУМАНІТАРНИХ ДИСЦИПЛІН', path: '/educational-units/tsyklovi-komisii/Cycliccommissionofphilologicalandhumanitariandisciplines',icon: <GiWorld /> },
		{ name: 'ЦИКЛОВА КОМІСІЯ  ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ ТА СОЦІАЛЬНО-ЕКОНОМІЧНИХ ДИСЦИПЛІН', path: '/educational-units/tsyklovi-komisii/CyclingCommissionofSoftwareandSocioEconomicDisciplines',icon: <FaLaptopCode />},
		{ name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН ПРОФЕСІЙНО-ПРАКТИЧНОЇ ПІДГОТОВКИ ЕЛЕКТРОЕНЕРГЕТИЧНИХ СПЕЦІАЛЬНОСТЕЙ', path: '/educational-units/tsyklovi-komisii/CycCommDiscProfPracTrainElecEnergySpec',icon: <GiPowerGenerator /> },
		{ name: 'ЦИКЛОВА КОМІСІЯ ЕЛЕКТРОМЕХАНІЧНИХ ДИСЦИПЛІН', path: '/educational-units/tsyklovi-komisii/Cyclicalcommissionofelectromechanicaldiscipline',
		icon: <MdOutlineElectricBolt />,},
		{ name: 'ЦИКЛОВА КОМІСІЯ ЗАГАЛЬНОТЕХНІЧНИХ ДИСЦИПЛІН ТА ГАЛУЗЕВОГО МАШИНОБУДУВАННЯ', path: '/educational-units/tsyklovi-komisii/CCofGTDandIME',icon: <GiMechanicGarage /> },
		{ name: 'ЦИКЛОВА КОМІСІЯ ДИСЦИПЛІН АВТОМОБІЛЬНОГО ТРАНСПОРТУ', path: '/educational-units/tsyklovi-komisii/CyclicalCommissionofRoadTransportDisciplines',
		icon: <FaCar />,},
		];
	const tsyklovikomisiiContent = (
		<div>
				 <Title text='Циклові комісії' />
						<hr className='hr-style' />
		</div>
	)

	return (
		<Page title='Циклова комісія - ЧПФК'>
			<DemoBlock
				additionalLinks={tsyklovikomisiiLinks}
				content={tsyklovikomisiiContent}
				routes={tsyklovikomisiiRoutes}
			/>
		</Page>
	);
};
