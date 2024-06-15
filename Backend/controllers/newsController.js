const multer = require('multer');
const path = require('path');
const knexConfig = require('../config/knexfile'); // Измененный путь
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
	const imageUrl = req.file ? req.file.filename : 'no-image.png'; // Убедимся, что есть значение для imageUrl
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
	const { title, description, category, path } = req.body;
	const imageUrl = req.file
		? req.file.filename
		: req.body.imageUrl || 'no-image.png'; // Убедимся, что есть значение для imageUrl
	try {
		await knex('news').where({ id: req.params.id }).update({
			title,
			description,
			imageUrl,
			category,
			path,
		});
		res.json({ message: 'Новость обновлена' });
	} catch (error) {
		console.error('Error updating news:', error);
		res.status(500).json({ error: 'Ошибка при обновлении новости' });
	}
};

const deleteNews = async (req, res) => {
	try {
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
