import { NewsAction, NewsActionTypes, NewsState } from '../../types/newsTypes';

const initialState: NewsState = {
	news: [],
	loading: false,
	error: null,
	page: 1,
	limit: 10,
};

export const newsReducer = (
	state = initialState,
	action: NewsAction
): NewsState => {
	switch (action.type) {
		case NewsActionTypes.FETCH_NEWS:
			return { ...state, loading: true };
		case NewsActionTypes.FETCH_NEWS_SUCCESS:
			return { ...state, loading: false, news: action.payload };
		case NewsActionTypes.FETCH_NEWS_ERROR:
			return { ...state, loading: false, error: action.payload };
		case NewsActionTypes.SET_NEWS_PAGE:
			return { ...state, page: action.payload };
		default:
			return state;
	}
};

// export const FetchNewsAction = payload => ({
// 	type: NewsActionTypes.FETCH_NEWS,
// 	payload,
// });
// export const FetchNewsSeccessAction = () => ({
// 	type: NewsActionTypes.FETCH_NEWS,
// });
// export const FetchNewsErrorAction = () => ({
// 	type: NewsActionTypes.FETCH_NEWS,
// });
// export const getPageNewsAction = () => ({
// 	type: NewsActionTypes.FETCH_NEWS,
// });
