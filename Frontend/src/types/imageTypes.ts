export enum ImageActionTypes {
	UPLOAD_IMAGES = 'UPLOAD_IMAGES',
	UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS',
	UPLOAD_IMAGES_ERROR = 'UPLOAD_IMAGES_ERROR',
}

export interface ImageState {
	imageUrls: string[];
	loading: boolean;
	error: string | null;
}

interface UploadImagesAction {
	type: typeof ImageActionTypes.UPLOAD_IMAGES;
}

interface UploadImagesSuccessAction {
	type: typeof ImageActionTypes.UPLOAD_IMAGES_SUCCESS;
	payload: string[];
}

interface UploadImagesErrorAction {
	type: typeof ImageActionTypes.UPLOAD_IMAGES_ERROR;
	payload: string;
}

export type ImageAction =
	| UploadImagesAction
	| UploadImagesSuccessAction
	| UploadImagesErrorAction;
