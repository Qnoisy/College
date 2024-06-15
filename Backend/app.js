require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { login, verifyToken } = require('./controllers/authController');
const newsRoutes = require('./routes/newsRoutes');
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

// Маршруты для новостей
app.use('/api', newsRoutes);

// Маршруты для загрузки изображений
app.use('/api', uploadRoutes);

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
