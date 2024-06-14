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
	id: number;
}

export interface NewsState {
	news: NewsItem[];
	loading: boolean;
	error: string | null;
}
export enum NewsActionTypes {
	FETCH_NEWS = 'FETCH_NEWS',
	FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
	FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
	ADD_NEWS = 'ADD_NEWS',
	ADD_NEWS_SUCCESS = 'ADD_NEWS_SUCCESS',
	ADD_NEWS_ERROR = 'ADD_NEWS_ERROR',
	UPDATE_NEWS = 'UPDATE_NEWS',
	UPDATE_NEWS_SUCCESS = 'UPDATE_NEWS_SUCCESS',
	UPDATE_NEWS_ERROR = 'UPDATE_NEWS_ERROR',
	DELETE_NEWS = 'DELETE_NEWS',
	DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS',
	DELETE_NEWS_ERROR = 'DELETE_NEWS_ERROR',
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

interface AddNewsAction {
	type: NewsActionTypes.ADD_NEWS;
}

interface AddNewsSuccessAction {
	type: NewsActionTypes.ADD_NEWS_SUCCESS;
	payload: NewsItem;
}

interface AddNewsErrorAction {
	type: NewsActionTypes.ADD_NEWS_ERROR;
	payload: string;
}

interface UpdateNewsAction {
	type: NewsActionTypes.UPDATE_NEWS;
}

interface UpdateNewsSuccessAction {
	type: NewsActionTypes.UPDATE_NEWS_SUCCESS;
	payload: NewsItem;
}

interface UpdateNewsErrorAction {
	type: NewsActionTypes.UPDATE_NEWS_ERROR;
	payload: string;
}

interface DeleteNewsAction {
	type: NewsActionTypes.DELETE_NEWS;
}

interface DeleteNewsSuccessAction {
	type: NewsActionTypes.DELETE_NEWS_SUCCESS;
	payload: number;
}

interface DeleteNewsErrorAction {
	type: NewsActionTypes.DELETE_NEWS_ERROR;
	payload: string;
}

export type NewsAction =
	| FetchNewsAction
	| FetchNewsSuccessAction
	| FetchNewsErrorAction
	| AddNewsAction
	| AddNewsSuccessAction
	| AddNewsErrorAction
	| UpdateNewsAction
	| UpdateNewsSuccessAction
	| UpdateNewsErrorAction
	| DeleteNewsAction
	| DeleteNewsSuccessAction
	| DeleteNewsErrorAction;
