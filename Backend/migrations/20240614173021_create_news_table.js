exports.up = function (knex) {
	return knex.schema.hasTable('news').then(exists => {
		if (!exists) {
			return knex.schema.createTable('news', function (table) {
				table.increments('id').primary();
				table.string('title').notNullable();
				table.text('description').notNullable();
				table.string('imageUrl').notNullable();
				table.string('path').notNullable();
				table.string('category').notNullable();
			});
		}
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('news');
};
