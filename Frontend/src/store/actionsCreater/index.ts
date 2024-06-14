import * as ImageActionCreators from './imageActions';
import * as NewsActionCreators from './newsActions';

export default {
	...NewsActionCreators,
	...ImageActionCreators,
};
