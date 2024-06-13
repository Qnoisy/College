export enum category {
	ALLARTICLES = 'Всі статті',
	ACTUAL = 'Актуально',
	ANNOUNCE = 'Анонс',
	EVENTS = 'Івенти',
}

export interface NewsItem {
	title: string;
	description: string;
	imageUrl: string;
	path: string;
	category: category;
}
