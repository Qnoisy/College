import { NewsAction, NewsActionTypes, NewsState } from '../../types/newsTypes';

const initialState: NewsState = {
	news: [],
	loading: false,
	error: null,
};

export const newsReducer = (
	state = initialState,
	action: NewsAction
): NewsState => {
	switch (action.type) {
		case NewsActionTypes.FETCH_NEWS:
		case NewsActionTypes.ADD_NEWS:
		case NewsActionTypes.UPDATE_NEWS:
		case NewsActionTypes.DELETE_NEWS:
			return { ...state, loading: true, error: null };
		case NewsActionTypes.FETCH_NEWS_SUCCESS:
			return { ...state, loading: false, news: action.payload };
		case NewsActionTypes.ADD_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				news: [...state.news, action.payload],
			};
		case NewsActionTypes.UPDATE_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				news: state.news.map(item =>
					item.id === action.payload.id ? action.payload : item
				),
			};
		case NewsActionTypes.DELETE_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				news: state.news.filter(item => item.id !== action.payload),
			};
		case NewsActionTypes.FETCH_NEWS_ERROR:
		case NewsActionTypes.ADD_NEWS_ERROR:
		case NewsActionTypes.UPDATE_NEWS_ERROR:
		case NewsActionTypes.DELETE_NEWS_ERROR:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
