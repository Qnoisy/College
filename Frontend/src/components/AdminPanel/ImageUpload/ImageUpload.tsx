import React, { useState } from 'react';
import { useAction } from '../../../hooks/useAction';
import styles from './ImageUpload.module.scss';

const ImageUpload: React.FC = () => {
	const [files, setFiles] = useState<FileList | null>(null);

	const { uploadImages } = useAction();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFiles(event.target.files);
	};

	const handleUpload = () => {
		if (files) {
			uploadImages(files);
		}
	};

	return (
		<div className={styles.imageUpload}>
			<input type='file' onChange={handleChange} multiple />
			<button onClick={handleUpload}>Upload</button>
		</div>
	);
};

export default ImageUpload;
