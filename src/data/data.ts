import { IsubRoutes } from '../types/CommonInterface';
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
	},
	{
		name: 'Освіта',
		link: '/education',
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
		name: 'Вступна компанія',
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
export const newsItems = [
	{
		title: 'Новость 1',
		description: 'Описание новости 1',
		imageUrl:
			'https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Новость 2',
		description: 'Описание новости 2',
		imageUrl:
			'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Технологии',
		description: 'Прорыв в области искусственного интеллекта',
		imageUrl:
			'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Природа',
		description: 'Сохранение зеленых зон в городских условиях',
		imageUrl:
			'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Спорт',
		description: 'Местные спортивные мероприятия возобновляются этим летом',
		imageUrl:
			'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
	{
		title: 'Культура',
		description: 'Фестиваль уличного искусства начинается этой весной',
		imageUrl:
			'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	},
];
export const allRoutes = [...subRoutes, ...headerRoutes, ...BigMenuRoutes];
