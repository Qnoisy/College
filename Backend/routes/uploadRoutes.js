const express = require('express');
const { uploadImages, upload } = require('../controllers/uploadController');

const router = express.Router();

router.post('/upload', upload.array('images', 10), uploadImages);

module.exports = router;
