import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../../hooks/useAction';
import { RootState } from '../../../store';

const ImageUpload: React.FC = () => {
	const [files, setFiles] = useState<FileList | null>(null);
	const { uploadImages } = useAction();
	const { imageUrls, loading, error } = useSelector(
		(state: RootState) => state.images
	);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFiles(event.target.files);
		}
	};

	const handleUpload = () => {
		if (files) {
			uploadImages(files);
		}
	};

	return (
		<div>
			<input type='file' multiple onChange={handleFileChange} />
			<button onClick={handleUpload} disabled={loading}>
				{loading ? 'Uploading...' : 'Upload'}
			</button>
			{error && <div>Error: {error}</div>}
			{imageUrls.length > 0 && (
				<div>
					{imageUrls.map((url, index) => (
						<img key={index} src={url} alt={`Uploaded ${index + 1}`} />
					))}
				</div>
			)}
		</div>
	);
};

export default ImageUpload;
