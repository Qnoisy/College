import { combineReducers } from 'redux';
import { imageReducer } from './imageReducer';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({
	news: newsReducer,
	images: imageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
