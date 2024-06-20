import { IsubRoutes } from '../types/CommonInterface';
const catCollege = [
	{ name: 'Про нас', link: '/college/pro-nas' },
	{ name: 'Загальна Інформація', link: '/college/zagaln-informacia' },
	{ name: 'Публічна Інформація', link: '/college/publichna-informatsiia' },
];

export const subRoutes: IsubRoutes[] = [
	{
		name: 'Головна',
		link: '/',
	},
	{
		name: 'Новини',
		link: '/news',
	},
	{
		name: 'Коледж',
		link: '/college',
		kategories: [
			{ name: 'Про нас', link: '/college/pro-nas' },
			{ name: 'Загальна Інформація', link: '/college/zagaln-informacia' },
			{ name: 'Публічна Інформація', link: '/college/publichna-informatsiia' },
		],
	},
	{
		name: 'Освіта',
		link: '/education',
		kategories: [
			{
				name: 'Організація освітнього процесу',
				link: '/education/organization',
			},
			{
				name: 'Неформальна освіта',
				link: '/education/nefor',
			},
		],
	},
	{
		name: 'Якість',
		link: '/quality',
	},
	{
		name: 'Контакти',
		link: '/contacts',
	},
];
export const headerRoutes: IsubRoutes[] = [
	{
		name: 'Aкредитація ОП',
		link: '/accreditation',
	},
	{
		name: 'Розклад',
		link: '/schedule',
	},
	{
		name: 'Навчальні Матеріали',
		link: 'https://mdl.chpt.edu.ua/',
	},
	{
		name: 'Бібліотека',
		link: '/library',
	},
];
export const BigMenuRoutes: IsubRoutes[] = [
	{
		name: 'Приймальна комісія',
		link: '/entry-company',
	},
	{
		name: 'Освітні підрозділи',
		link: '/educational-units',
	},
	{
		name: 'Наукова діяльність',
		link: '/research-activities',
	},
	{
		name: 'Підтримка та довіра',
		link: '/support-and-trust',
	},
];

export const underItems = [
	{
		name: 'Старшокласникам',
		link: '/entry-company/starshoklasnykam',
	},
	{
		name: 'ОПС Фаховий Молодший Бакалавр',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr',
	},
	{
		name: 'Вступна кампанія',
		link: '/entry-company/vstup',
	},
	{
		name: 'Архів',
		link: '/entry-company/arkhiv',
	},
	{
		name: 'Циклова комісія',
		link: '/educational-units/tsyklovi-komisii',
	},
	{
		name: 'Методична комісія',
		link: '/educational-units/metodychni-komisii',
	},
	{
		name: 'Відділення',
		link: '/educational-units/department',
	},
	{
		name: 'Основні підрозділи',
		link: '/educational-units/mainsub',
	},
	{
		name: 'Дні науки',
		link: '/research-activities/dni-nauky',
	},
	{
		name: 'Наука в коледжі',
		link: '/research-activities/nauka-v-koledzhi',
	},
	{
		name: 'Науково-дослідна робота студентів',
		link: '/research-activities/naukovodoslidna-robota-studentiv',
	},
	{
		name: 'Наукова діяльність викладачів',
		link: '/research-activities/naukova-diialnist-vykladachiv',
	},
	{
		name: 'Соціальний педагог',
		link: '/support-and-trust/sotsialnyi-pedahoh',
	},
	{
		name: 'Практичний психолог',
		link: '/support-and-trust/praktychnyi-psykholoh',
	},
	{
		name: 'Соціально-психологічна підтримка',
		link: '/support-and-trust/sotsialno-psykholohichna-pidtrymka',
	},
	{
		name: 'Діяльність бібліотеки',
		link: '/library/activity',
	},
	{
		name: 'Бібліотечні ресурси',
		link: '/library/resources',
	},
	{
		name: 'Провідні бібліотеки світу',
		link: '/library/resources/leadingLibraries',
	},
	{
		name: 'Сертифікати про акредитацію',
		link: '/accreditation/certification',
	},
	{
		name: 'Відомості про самооцінювання',
		link: '/accreditation/self-esteem',
	},
	{
		name: 'Ліцензії',
		link: '/accreditation/licence',
	},
	{
		name: 'Вибери професію',
		link: '/entry-company/starshoklasnykam/choose-profesion',
	},
	{
		name: 'Організація освітнього процесу',
		link: '/education/organization',
	},
	{
		name: 'Неформальна освіта',
		link: '/education/nefor',
	},
	{
		name: 'Монтаж, обслуговування та ремонт електротехнічних установок в агропромисловому комплексі',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/es',
	},
	{
		name: 'Монтаж і експлуатація електроустаткування підприємств і цивільних споруд',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ep',
	},
	{
		name: 'Обслуговування верстатів з програмним управлінням і робототехнічних комплексів',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ov',
	},
	{
		name: 'Економіка підприємства',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ek',
	},
	{
		name: 'Технологія обробки матеріалів на верстатах і автоматичних лініях',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/om',
	},
	{
		name: 'Розробка програмного забезпечення',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ps',
	},
	{
		name: 'Обслуговування та ремонт електроустаткування автомобілів і тракторів',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ea',
	},
	{
		name: 'Обслуговування та ремонт автомобілів і двигунів',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ra',
	},
	{
		name: 'Оціночна діяльність',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/od',
	},
	{
		name: 'Обслуговування та ремонт обладнання підприємств хімічної і нафтогазопереробної промисловості',
		link: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/zm',
	},
	{
		name: "Відділення бізнес-освіти та комп'ютерних технологій",
		link: '/educational-units/department/bus-kt-education',
	},
	{
		name: "Електромеханічне відділення",
		link: '/educational-units/department/electromechanical',
	},
	{
		name: "Електротехнічне відділення",
		link: '/educational-units/department/electricalengineering',
	},
	{
		name: "Механічне відділення",
		link: '/educational-units/department/mechanical',
	},
	{
		name: "Циклова комісія дисциплін загальноосвітньої підготовки",
		link: '/educational-units/tsyklovi-komisii/DisciplinesofGenera',
	},
	{
		name: "Циклова комісія філологічних та гуманітарних дисциплін",
		link: '/educational-units/tsyklovi-komisii/Philologicalandhumanitarian',
	},
	{
		name: "Циклова комісія програмного забезпечення та соціально-економічних дисциплін",
		link: '/educational-units/tsyklovi-komisii/SoftwareandSoc-Eco',
	},
	{
		name: "Циклова комісія дисциплін професійно-практичної підготовки електроенергетичних спеціальностей",
		link: '/educational-units/tsyklovi-komisii/ElecEnergySpec',
	},
	{
		name: "Циклова комісія електромеханічних дисциплін",
		link: '/educational-units/tsyklovi-komisii/CCElectromechanical',
	},
	{
		name: "Циклова комісія загальнотехнічних дисциплін та галузевого машинобудування",
		link: '/educational-units/tsyklovi-komisii/GTDandIME',
	},
	{
		name: "Циклова комісія дисциплін автомобільного транспорту",
		link: '/educational-units/tsyklovi-komisii/RoadTransport',
	},
];

export const usefulLinks = [
	{
		imageUrl: '/img/useful links/chnu.png',
		path: 'https://cdu.edu.ua/',
	},
	{
		imageUrl: '/img/useful links/chpty.png',
		path: 'https://chdtu.edu.ua/',
	},
	{
		imageUrl: '/img/useful links/classroom.svg',
		path: 'https://classroom.google.com/',
	},
	{
		imageUrl: '/img/useful links/gmail.svg',
		path: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJVjvPsftnLMnXzgslkGVptXmSLMVKJdWzzXBFmNCsnCVlHSxHVXrXxgfZZtNjHdlDhWg',
	},
	{
		imageUrl: '/img/useful links/logo_ukr.svg',
		path: 'https://abiturients.info/uk',
	},
	{
		imageUrl: '/img/useful links/moodle.svg',
		path: 'https://mdl.chpt.edu.ua/',
	},
];
export const allRoutes = [
	...subRoutes,
	...headerRoutes,
	...BigMenuRoutes,
	...underItems,
	...catCollege,
];
