const express = require('express');
const {
	uploadImage,
	uploadImageHandler,
} = require('../controllers/uploadController');

const router = express.Router();

router.post('/upload', uploadImage, uploadImageHandler);

module.exports = router;
