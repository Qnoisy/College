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
		name: 'Співробітництво',
		link: '/cooperation',
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
		name: 'Публічне обговорення',
		link: '/public-discussion',
	},
	{
		name: 'Aкредитація ОП',
		link: '/accreditation',
	},
	{
		name: 'Структурні підрозділи',
		link: '/subdivisions',
	},
	{
		name: 'Розклад',
		link: '/schedule',
	},
	{
		name: 'Навчальні Матеріали',
		link: 'https://mdl.chpt.edu.ua/',
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
		name: 'Студентське життя',
		link: '/student-life',
	},
	{
		name: 'Бібліотека',
		link: '/library',
	},
	{
		name: 'Підтримка та довіра',
		link: '/support-and-trust',
	},
];
export const allRoutes = [...subRoutes, ...headerRoutes, ...BigMenuRoutes];
