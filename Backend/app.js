require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { login, verifyToken } = require('./controllers/authController');
const newsRoutes = require('./routes/newsRoutes');
const uploadRoutes = require('./routes/uploadRoutes'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets'))); 

app.post('/login', login);
app.get('/protected', verifyToken, (req, res) => {
	res.send('This is a protected route');
});

app.use('/api', newsRoutes);

app.use('/api', uploadRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
