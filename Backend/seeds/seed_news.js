/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
	return knex('news')
		.del()
		.then(function () {
			return knex('news').insert([
				{
					title: 'Новость 1',
					description: 'Описание новости 1',
					imageUrl: 'url_to_image',
					category: 'ACTUAL',
				},
				{
					title: 'Новость 2',
					description: 'Описание новости 2',
					imageUrl: 'url_to_image',
					category: 'ACTUAL',
				},
			]);
		});
};
