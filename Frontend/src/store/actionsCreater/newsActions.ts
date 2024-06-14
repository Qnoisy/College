import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes, NewsItem } from '../../types/newsTypes';

export const fetchNews = () => {
	return async (dispatch: Dispatch<NewsAction>) => {
		try {
			dispatch({
				type: NewsActionTypes.FETCH_NEWS,
			});
			const response = await axios.get('http://localhost:3001/news');
			dispatch({
				type: NewsActionTypes.FETCH_NEWS_SUCCESS,
				payload: response.data,
			});
		} catch (error) {
			dispatch({
				type: NewsActionTypes.FETCH_NEWS_ERROR,
				payload: String(error),
			});
		}
	};
};
export const addNews = (newList: NewsItem) => {
	return async (dispatch: Dispatch<NewsAction>) => {
		try {
			dispatch({
				type: NewsActionTypes.ADD_NEWS,
			});
			const response = await axios.post('http://localhost:3001/news', newList);
			dispatch({
				type: NewsActionTypes.ADD_NEWS_SUCCESS,
				payload: response.data,
			});
		} catch (error) {
			dispatch({
				type: NewsActionTypes.ADD_NEWS_ERROR,
				payload: String(error),
			});
		}
	};
};
export const updateNews = (newsItem: NewsItem) => {
	return async (dispatch: Dispatch<NewsAction>) => {
		try {
			dispatch({ type: NewsActionTypes.UPDATE_NEWS });
			const response = await axios.put(
				`http://localhost:3001/news/${newsItem.id}`,
				newsItem
			);
			dispatch({
				type: NewsActionTypes.UPDATE_NEWS_SUCCESS,
				payload: response.data,
			});
		} catch (error) {
			dispatch({
				type: NewsActionTypes.UPDATE_NEWS_ERROR,
				payload: String(error),
			});
		}
	};
};
export const deleteNews = (id: number) => {
	return async (dispatch: Dispatch<NewsAction>) => {
		try {
			dispatch({ type: NewsActionTypes.DELETE_NEWS });
			await axios.delete(`http://localhost:3001/news/${id}`);
			dispatch({
				type: NewsActionTypes.DELETE_NEWS_SUCCESS,
				payload: id,
			});
		} catch (error) {
			dispatch({
				type: NewsActionTypes.DELETE_NEWS_ERROR,
				payload: String(error),
			});
		}
	};
};
