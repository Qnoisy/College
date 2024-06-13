export enum category {
	ALLARTICLES = 'Всі статті',
	ACTUAL = 'Актуально',
	ANNOUNCE = 'Анонси',
	EVENTS = 'Події',
}

export interface NewsItem {
	title: string;
	description: string;
	imageUrl: string;
	path: string;
	category: category;
}
