const knexConfig = require('./config/knexfile');
const knex = require('knex')(knexConfig.development);

const clearDatabase = async () => {
	try {
		await knex('news').truncate(); // очищення таблиці новин
		console.log('Database cleared');
	} catch (error) {
		console.error('Error clearing database:', error);
	} finally {
		knex.destroy();
	}
};

clearDatabase();
