require('dotenv').config();
console.log('JWT_SECRET:', process.env.JWT_SECRET);

const express = require('express');
const cors = require('cors');
const knex = require('./config/knexfile.js'); // Подключение knex инстанса
const { login, verifyToken } = require('./controllers/authController'); // Импорт контроллеров

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Получение всех новостей
app.get('/news', async (req, res) => {
	try {
		const news = await knex('news').select('*');
		res.json(news);
	} catch (error) {
		res.status(500).json({ error: 'Ошибка при получении новостей' });
	}
});

// Добавление новости
app.post('/news', async (req, res) => {
	const { title, description, imageUrl, category } = req.body;
	try {
		const [id] = await knex('news').insert({
			title,
			description,
			imageUrl,
			category,
		});
		res.status(201).json({ id, title, description, imageUrl, category });
	} catch (error) {
		res.status(500).json({ error: 'Ошибка при добавлении новости' });
	}
});

// Обновление новости
app.put('/news/:id', async (req, res) => {
	const { title, description, imageUrl, category } = req.body;
	try {
		await knex('news')
			.where({ id: req.params.id })
			.update({ title, description, imageUrl, category });
		res.json({ message: 'Новость обновлена' });
	} catch (error) {
		res.status(500).json({ error: 'Ошибка при обновлении новости' });
	}
});

// Удаление новости
app.delete('/news/:id', async (req, res) => {
	try {
		await knex('news').where({ id: req.params.id }).del();
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: 'Ошибка при удалении новости' });
	}
});

// Аутентификация и защищенные маршруты
app.post('/login', login);
app.get('/protected', verifyToken, (req, res) => {
	res.send('This is a protected route');
});

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
