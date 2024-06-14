const multer = require('multer');
const path = require('path');

// Настройка multer
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'assets/');
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage });

exports.uploadImage = upload.single('image');

exports.uploadImageHandler = (req, res) => {
	try {
		console.log(req.file); // Информация о загруженном файле
		res.send('File uploaded successfully');
	} catch (error) {
		res.status(400).send('Error uploading file');
	}
};
