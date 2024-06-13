import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes } from '../../types/newsTypes';
export const fetchNews = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<NewsAction>) => {
		try {
			dispatch({
				type: NewsActionTypes.FETCH_NEWS,
			});
			const response = await axios.get('http://localhost:3000/posts', {
				params: { _page: page, _limit: limit },
			});
			setTimeout(() => {
				dispatch({
					type: NewsActionTypes.FETCH_NEWS_SUCCESS,
					payload: response.data,
				});
			}, 1000);
		} catch (error) {
			dispatch({
				type: NewsActionTypes.FETCH_NEWS_ERROR,
				payload: String(error),
			});
		}
	};
};

export const getPageNews = (page: number): NewsAction => ({
	type: NewsActionTypes.SET_NEWS_PAGE,
	payload: page,
});
