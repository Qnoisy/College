import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes } from '../../types/newsTypes';

export const fetchNews = () => {
	return async (dispatch: Dispatch<NewsAction>) => {
		try {
			dispatch({
				type: NewsActionTypes.FETCH_NEWS,
			});
			const response = await axios.get('http://localhost:3000/posts');
			dispatch({
				type: NewsActionTypes.FETCH_NEWS_SUCCESS,
				payload: response.data,
			});
		} catch (e) {
			dispatch({
				type: NewsActionTypes.FETCH_NEWS_ERROR,
				payload: String(e + 'Помилка при загуженні інформації з бази данних'),
			});
		}
	};
};

export const getPageNews = (page: number): NewsAction => ({
	type: NewsActionTypes.SET_NEWS_PAGE,
	payload: page,
});
