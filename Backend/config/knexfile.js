// knexfile.js
const knex = require('knex');

const knexConfig = {
	client: 'sqlite3',
	connection: {
		filename: __dirname + '/dev.sqlite3',
	},
	migrations: {
		directory: __dirname + '/migrations',
	},
	useNullAsDefault: true,
};

module.exports = knex(knexConfig); // Возвращает инстанс knex
