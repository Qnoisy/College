const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../assets/'));
	},
	filename: (req, file, cb) => {
		cb(null, `image-${Date.now()}${path.extname(file.originalname)}`);
	},
});

const upload = multer({ storage });

exports.uploadImages = (req, res) => {
	try {
		const files = req.files;
		if (!files) {
			return res.status(400).send('No files were uploaded.');
		}

		const imageUrls = files.map(file => file.filename);
		res.status(200).json({ imageUrls });
	} catch (error) {
		res.status(500).send('Error uploading file');
	}
};

exports.upload = upload;
