exports.up = function (knex) {
	return knex.schema.table('news', function (table) {
		table.json('images').nullable();
	});
};

exports.down = function (knex) {
	return knex.schema.table('news', function (table) {
		table.dropColumn('images');
	});
};
