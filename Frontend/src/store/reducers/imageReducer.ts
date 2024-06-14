import {
	ImageAction,
	ImageActionTypes,
	ImageState,
} from '../../types/imageTypes';

const initialState: ImageState = {
	imageUrls: [],
	loading: false,
	error: null,
};

export const imageReducer = (
	state = initialState,
	action: ImageAction
): ImageState => {
	switch (action.type) {
		case ImageActionTypes.UPLOAD_IMAGES:
			return { ...state, loading: true, error: null };
		case ImageActionTypes.UPLOAD_IMAGES_SUCCESS:
			return {
				...state,
				loading: false,
				imageUrls: action.payload,
				error: null,
			};
		case ImageActionTypes.UPLOAD_IMAGES_ERROR:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
