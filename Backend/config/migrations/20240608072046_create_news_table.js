/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable('news', table => {
		table.increments('id').primary(); // Автоматически увеличивающийся ID для каждой новости
		table.string('title').notNullable(); // Заголовок новости
		table.text('description'); // Описание новости
		table.string('imageUrl'); // URL изображения новости
		table.string('category'); // Категория новости
		table.timestamps(true, true); // Столбцы для времени создания и обновления
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('news'); // Удаление таблицы, если миграция откатывается
};
