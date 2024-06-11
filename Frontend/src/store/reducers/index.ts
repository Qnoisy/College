import { combineReducers } from 'redux';
import { fetchNews } from '../actionsCreater/news';
import {} from './index';

export const rootReducer = combineReducers({
	news: fetchNews,
});

export type RootState = ReturnType<typeof rootReducer>;
