// config/knexfile.js
module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: __dirname + '/../dev.sqlite3',
		},
		migrations: {
			directory: __dirname + '/../migrations',
		},
		seeds: {
			directory: __dirname + '/../seeds',
		},
		useNullAsDefault: true,
	},
};
