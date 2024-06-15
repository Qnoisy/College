const express = require('express');
const router = express.Router();
const {
	upload,
	getNews,
	addNews,
	updateNews,
	deleteNews,
} = require('../controllers/newsController');

router.get('/news', getNews);
router.post('/news', upload.single('image'), addNews);
router.put('/news/:id', upload.single('image'), updateNews);
router.delete('/news/:id', deleteNews);

module.exports = router;
