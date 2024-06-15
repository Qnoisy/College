exports.up = function (knex) {
	return knex.schema.createTable('news', table => {
		table.increments('id').primary();
		table.string('title').notNullable();
		table.text('description').notNullable();
		table.string('imageUrl').notNullable();
		table.string('path').notNullable();
		table.string('category').notNullable();
		table.json('images').notNullable();
		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('news');
};
