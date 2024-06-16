const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
	addNews,
	updateNews,
	getNews,
	deleteNews,
} = require('../controllers/newsController');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../assets'));
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const upload = multer({ storage });

router.post('/news', upload.single('image'), addNews);
router.put('/news/:id', upload.single('image'), updateNews);
router.get('/news', getNews);
router.delete('/news/:id', deleteNews);

module.exports = router;
