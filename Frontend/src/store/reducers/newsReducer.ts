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
			return { ...state, loading: true, error: null };
		case NewsActionTypes.FETCH_NEWS_SUCCESS:
			return { ...state, loading: false, error: null, news: action.payload };
		case NewsActionTypes.FETCH_NEWS_ERROR:
			return { ...state, loading: false, error: action.payload };
		case NewsActionTypes.ADD_NEWS:
			return { ...state, loading: true, error: null };
		case NewsActionTypes.ADD_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				news: [...state.news, action.payload],
			};
		case NewsActionTypes.ADD_NEWS_ERROR:
			return { ...state, loading: false, error: action.payload };
		case NewsActionTypes.UPDATE_NEWS:
			return { ...state, loading: true, error: null };
		case NewsActionTypes.UPDATE_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				news: state.news.map(news =>
					news.id === action.payload.id ? action.payload : news
				),
			};
		case NewsActionTypes.UPDATE_NEWS_ERROR:
			return { ...state, loading: false, error: action.payload };
		case NewsActionTypes.DELETE_NEWS:
			return { ...state, loading: true, error: null };
		case NewsActionTypes.DELETE_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				news: state.news.filter(news => news.id !== action.payload),
			};
		case NewsActionTypes.DELETE_NEWS_ERROR:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
