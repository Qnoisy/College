import axios from 'axios';
import { Dispatch } from 'redux';
import { ImageAction, ImageActionTypes } from '../../types/imageTypes';

export const uploadImages = (files: FileList) => {
	return async (dispatch: Dispatch<ImageAction>) => {
		dispatch({ type: ImageActionTypes.UPLOAD_IMAGES });
		const formData = new FormData();
		for (let i = 0; i < files.length; i++) {
			formData.append('images', files[i]);
		}

		try {
			const response = await axios.post(
				'http://localhost:3001/api/upload',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
			dispatch({
				type: ImageActionTypes.UPLOAD_IMAGES_SUCCESS,
				payload: response.data.imageUrls,
			});
		} catch (error) {
			dispatch({
				type: ImageActionTypes.UPLOAD_IMAGES_ERROR,
				payload: String(error),
			});
		}
	};
};
