import { IsubRoutes } from '../types/CommonInterface';
import { NewsItem, category } from '../types/dataInterface';
export const subRoutes: IsubRoutes[] = [
	{
		name: 'Головна',
		link: '/',
	},
	{
		name: 'Новини',
		link: '/news',
		kategories: [
			{ name: 'test1', link: '/test1' },
			{ name: 'test2', link: '/test2' },
			{ name: 'test3', link: '/test3' },
		],
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
			{ name: 'test1', link: '/test1' },
			{ name: 'test2', link: '/test2' },
			{ name: 'test3', link: '/test3' },
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
];

export const newsItems: NewsItem[] = [
	{
		title: 'Новость 1',
		description: 'Описание новости 1',
		imageUrl:
			'https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
		path: '/news',
		category: category.ACTUAL,
	},
	{
		title: 'Новость 2',
		description: 'Описание новости 2',
		imageUrl:
			'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
		path: '/news',
		category: category.ACTUAL,
	},
	{
		title: 'Технологии',
		description: 'Прорыв в области искусственного интеллекта',
		imageUrl:
			'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
		path: '/news',
		category: category.ACTUAL,
	},
	{
		title: 'Природа',
		description: 'Сохранение зеленых зон в городских условиях',
		imageUrl:
			'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
		path: '/news',
		category: category.ACTUAL,
	},
	{
		title: 'Спорт',
		description: 'Местные спортивные мероприятия возобновляются этим летом',
		imageUrl:
			'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
		path: '/news',
		category: category.ANNOUNCE,
	},
	{
		title: 'Культура',
		description: 'Фестиваль уличного искусства начинается этой весной',
		imageUrl:
			'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
		path: '/news',
		category: category.ANNOUNCE,
	},
	{
		title: 'Культураа',
		description: 'Фестиваль уличного искусства начинается этой весной',
		imageUrl:
			'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
		path: '/news',
		category: category.ANNOUNCE,
	},
];
export const usefulLinks = [
	{
		imageUrl: '/img/useful links/chnu.jpg',
		path: 'https://cdu.edu.ua/',
	},
	{
		imageUrl: '/img/useful links/chpty.jpg',
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
];