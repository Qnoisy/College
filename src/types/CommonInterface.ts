export interface Ikategories {
	name: string;
	path: string;
}
export interface IsubRoutes {
	name: string;
	link: string;
	kategories?: Ikategories[];
}
