const knex = require('../config/knexfile');

class News {
	static async getAll() {
		return knex('news').select('*');
	}

	static async create(data) {
		return knex('news').insert(data);
	}

	static async update(id, data) {
		return knex('news').where({ id }).update(data);
	}

	static async delete(id) {
		return knex('news').where({ id }).del();
	}
}

module.exports = News;
