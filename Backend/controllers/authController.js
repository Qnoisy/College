const jwt = require('jsonwebtoken');

const generateToken = user => {
	const payload = {
		username: user.username,
		id: user.id,
	};
	const secret = process.env.JWT_SECRET;
	const options = { expiresIn: '1h' };

	return jwt.sign(payload, secret, options);
};

// Функция для обработки входа в систему
exports.login = (req, res) => {
	const { username, password } = req.body;
	if (username === 'admin' && password === 'password') {
		const user = { username, id: 1 };
		const token = generateToken(user);
		res.json({ token });
	} else {
		res.status(401).send('Authentication failed');
	}
};

// Функция для проверки токена
exports.verifyToken = (req, res, next) => {
	const token = req.headers.authorization?.split(' ')[1];
	if (!token) {
		return res.status(403).send('A token is required for authentication');
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(401).send('Invalid Token');
	}
};
