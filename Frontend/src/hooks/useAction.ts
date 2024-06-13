import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewsActionCreators from '../store/actionsCreater';

export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(NewsActionCreators, dispatch);
};
