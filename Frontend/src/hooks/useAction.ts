import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../store/actionsCreater'; // Обновите путь к файлу действий

export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actionCreators, dispatch);
};
