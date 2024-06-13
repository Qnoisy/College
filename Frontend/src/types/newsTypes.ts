import { NewsItem } from './dataInterface';

export interface NewsState {
	news: NewsItem[];
	loading: boolean;
	error: string | null;
	page: number;
	limit: number;
}
export enum NewsActionTypes {
	FETCH_NEWS = 'FETCH_NEWS',
	FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
	FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
	SET_NEWS_PAGE = 'SET_NEWS_PAGE',
}
interface FetchNewsAction {
	type: NewsActionTypes.FETCH_NEWS;
}
interface FetchNewsSuccessAction {
	type: NewsActionTypes.FETCH_NEWS_SUCCESS;
	payload: NewsItem[];
}
interface FetchNewsErrorAction {
	type: NewsActionTypes.FETCH_NEWS_ERROR;
	payload: string;
}
interface setNewsPage {
	type: NewsActionTypes.SET_NEWS_PAGE;
	payload: number;
}
export type NewsAction =
	| FetchNewsAction
	| FetchNewsSuccessAction
	| FetchNewsErrorAction
	| setNewsPage;
