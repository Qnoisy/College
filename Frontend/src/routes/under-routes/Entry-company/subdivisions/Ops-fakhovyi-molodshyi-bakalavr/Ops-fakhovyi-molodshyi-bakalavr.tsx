import { BsFuelPumpDiesel } from 'react-icons/bs';
import {
	GiElectricalResistance,
	GiFarmer,
	GiMechanicGarage,
	GiMoneyStack,
	GiPayMoney,
} from 'react-icons/gi';
import { IoIosLaptop } from 'react-icons/io';
import { PiEngineLight, PiFactory, PiRobotLight } from 'react-icons/pi';
import Page from '../../../../../Page/Page';
import DemoBlock from '../../../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../../../components/sample/Title/Title';

export const Opsfakhovyimolodshyibakalavr = () => {
	const opsfakhovyimolodshyibakalavrRoutes = [
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
		{
			name: 'Обслуговування верстатів з програмним управлінням і робототехнічних комплексів',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ov',
			icon: <PiRobotLight />,
		},
		{
			name: 'Економіка підприємства',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ek',
			icon: <GiMoneyStack />,
		},
		{
			name: 'Технологія обробки матеріалів на верстатах і автоматичних лініях',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/om',
			icon: <PiFactory />,
		},
		{
			name: 'Розробка програмного забезпечення',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ps',
			icon: <IoIosLaptop />,
		},
		{
			name: 'Обслуговування та ремонт електроустаткування автомобілів і тракторів',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ea',
			icon: <GiMechanicGarage />,
		},
		{
			name: 'Обслуговування та ремонт автомобілів і двигунів',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ra',
			icon: <PiEngineLight />,
		},
		{
			name: 'Оціночна діяльність',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/od',
			icon: <GiPayMoney />,
		},
		{
			name: 'Обслуговування та ремонт обладнання підприємств хімічної і нафтогазопереробної промисловості',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/zm',
			icon: <BsFuelPumpDiesel />,
		},
	];

	const opsfakhovyimolodshyibakalavrContent = (
		<div>
			<Title text='ОПС Фаховий Молодший Бакалавр' />
			<hr className='hr-style' />
			<p>
				Фаховий молодший бакалавр - це фахівець, який має ступінь бакалавра у
				певній галузі, але на відміну від звичайного бакалавра, він має глибше
				та більш практичне знання в обраній сфері. Основною відмінністю є те, що
				фаховий молодший бакалавр отримує спеціалізовану підготовку, що дозволяє
				йому здійснювати конкретні завдання та роботу у відповідній сфері
				безпосередньо після закінчення навчання.
			</p>
			<br />

			<p>Переваги фахового молодшого бакалавра включають:</p>
			<li>
				Практичну орієнтацію: Освіта орієнтована на практичні навички та знання,
				які потрібні на ринку праці.
			</li>
			<li>
				Швидше влаштування на роботу: Завдяки спеціалізованій підготовці,
				випускники можуть швидше знайти роботу у вибраній сфері.
			</li>
			<li>
				Гнучкість: Вони можуть швидко адаптуватися до змін в сфері і розвивати
				нові навички відповідно до потреб ринку праці.
			</li>
			<li>
				Можливості кар'єрного зростання: Фахові молодші бакалаври мають
				можливість просуватися в кар'єрі швидше, оскільки вони вже мають
				спеціалізовану підготовку.
			</li>
			<li>
				Практичний досвід: Багато програм включають стажування або практичну
				роботу, що дозволяє студентам отримати реальний досвід роботи в сфері до
				завершення навчання.
			</li>
			<br />
			<p>
				Загалом, фаховий молодший бакалавр є привабливою альтернативою для тих,
				хто шукає швидше влаштування на роботу та бажає мати практичні навички,
				що відповідають потребам сучасного ринку праці.
			</p>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='ОПС Фаховий Молодший Бакалавр - ЧПФК'>
			<DemoBlock
				content={opsfakhovyimolodshyibakalavrContent}
				routes={opsfakhovyimolodshyibakalavrRoutes}
				additionalLinks={opsfakhovyimolodshyibakalavrRoutes}
			/>
		</Page>
	);
};
