const path = require('path');
const fs = require('fs');
const multer = require('multer');
const knexConfig = require('../config/knexfile');
const knex = require('knex')(knexConfig.development);

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../assets/'));
	},
	filename: (req, file, cb) => {
		cb(null, `image-${Date.now()}${path.extname(file.originalname)}`);
	},
});

const upload = multer({ storage });

const getNews = async (req, res) => {
	try {
		const news = await knex('news').select('*');
		res.json(news);
	} catch (error) {
		console.error('Error fetching news:', error);
		res.status(500).json({ error: 'Ошибка при получении новостей' });
	}
};

const addNews = async (req, res) => {
	const { title, description, category, path } = req.body;
	const imageUrl = req.file ? req.file.filename : 'no-image.png';

	try {
		const [id] = await knex('news').insert({
			title,
			description,
			imageUrl,
			category,
			path,
		});
		res.status(201).json({ id, title, description, imageUrl, category, path });
	} catch (error) {
		console.error('Error adding news:', error);
		res.status(500).json({ error: 'Ошибка при добавлении новости' });
	}
};

const updateNews = async (req, res) => {
	const { title, description, category, path: newsPath } = req.body;
	let imageUrl = req.body.imageUrl || 'no-image.png';

	try {
		const oldNews = await knex('news').where({ id: req.params.id }).first();

		if (req.file) {
			const oldImagePath = path.join(__dirname, '../assets', oldNews.imageUrl);
			if (
				oldNews.imageUrl &&
				oldNews.imageUrl !== 'no-image.png' &&
				fs.existsSync(oldImagePath)
			) {
				fs.unlinkSync(oldImagePath);
			}
			imageUrl = req.file.filename;
		}

		await knex('news').where({ id: req.params.id }).update({
			title,
			description,
			imageUrl,
			category,
			path: newsPath,
		});

		res.json({ message: 'Новость обновлена', imageUrl });
	} catch (error) {
		console.error('Error updating news:', error);
		res.status(500).json({ error: 'Ошибка при обновлении новости' });
	}
};

const deleteNews = async (req, res) => {
	try {
		const news = await knex('news').where({ id: req.params.id }).first();
		if (news && news.imageUrl && news.imageUrl !== 'no-image.png') {
			const imagePath = path.join(__dirname, '../assets', news.imageUrl);
			if (fs.existsSync(imagePath)) {
				fs.unlinkSync(imagePath);
			}
		}
		await knex('news').where({ id: req.params.id }).del();
		res.status(204).send();
	} catch (error) {
		console.error('Error deleting news:', error);
		res.status(500).json({ error: 'Ошибка при удалении новости' });
	}
};

module.exports = {
	upload,
	getNews,
	addNews,
	updateNews,
	deleteNews,
};
