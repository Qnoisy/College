require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig.development);
const { login, verifyToken } = require('./controllers/authController');
const uploadRoutes = require('./routes/uploadRoutes'); // Импортируем маршруты для загрузки

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets'))); // Делаем папку доступной для сервера

// Аутентификация и защищенные маршруты
app.post('/login', login);
app.get('/protected', verifyToken, (req, res) => {
	res.send('This is a protected route');
});

// Маршруты для загрузки изображений
app.use('/api', uploadRoutes);

// Маршрут для получения всех новостей
app.get('/news', async (req, res) => {
	try {
		const news = await knex('news').select('*');
		res.json(news);
	} catch (error) {
		res.status(500).json({ error: 'Ошибка при получении новостей' });
	}
});

// Маршрут для добавления новой новости
app.post('/news', async (req, res) => {
	const { title, description, imageUrl, category, images } = req.body;
	try {
		const [id] = await knex('news').insert({
			title,
			description,
			imageUrl,
			category,
			images: JSON.stringify(images),
		});
		res
			.status(201)
			.json({ id, title, description, imageUrl, category, images });
	} catch (error) {
		res.status(500).json({ error: 'Ошибка при добавлении новости' });
	}
});

// Маршрут для обновления новости
app.put('/news/:id', async (req, res) => {
	const { title, description, imageUrl, category, images } = req.body;
	try {
		await knex('news')
			.where({ id: req.params.id })
			.update({
				title,
				description,
				imageUrl,
				category,
				images: JSON.stringify(images),
			});
		res.json({ message: 'Новость обновлена' });
	} catch (error) {
		res.status(500).json({ error: 'Ошибка при обновлении новости' });
	}
});

// Маршрут для удаления новости
app.delete('/news/:id', async (req, res) => {
	try {
		await knex('news').where({ id: req.params.id }).del();
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: 'Ошибка при удалении новости' });
	}
});

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
