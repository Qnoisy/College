import Page from '../../../../../../../Page/Page';
import DropUpMenu from '../../../../../../../components/DropUpMenu/DropUpMenu';
import Block from '../../../../../../../components/sample/Block/Block';
import Title from '../../../../../../../components/sample/Title/Title';

export const RoadTransport = () => {
	const list = [
		{
			text: 'Навчально-польові збори',
			url: 'https://drive.google.com/file/d/1w56i3PlNC-2dyWeCt61BcI38cJFX6lu4/view',
		},
		{
			text: 'Отримання посвідчення Національного судді ІІІ ступеня Всеукраїнських заходів',
			url: 'https://drive.google.com/file/d/1eFfoHT_Gy5-FFeVAxRN9L2OowdIIjnKf/view',
		},
		{
			text: 'Зустріч учнів Черкаської гімназії №31 з провідними викладачами-практиками',
			url: 'https://drive.google.com/file/d/1Iw60uD09DopE6w3Tt7O6vgqdR2icS51y/view',
		},
		{
			text: 'Зустріч з представниками Військового інституту танкових військ національного технічного університету "Харківський політехнічний інститут"',
			url: 'https://drive.google.com/file/d/1B2jbLlFUn7NRtSj0GYVbIFpKw6fjO4g1/view',
		},
		{
			text: 'Бінарний урок з дисципліни "Захист України" на тему "Міни. Комп\'ютерне моделювання будови та принцип функціонування"',
			url: 'https://drive.google.com/file/d/1ljGRgaIFyoJk5U-aXUbxGKKBpQRQiTiD/view',
		},
		{
			text: 'Тиждень до Дня автомобіліста та дорожника',
			url: 'https://drive.google.com/file/d/1WrXl1QO6RX99OQSErhxLi5XhMWkz3qcf/view',
		},
		{
			text: 'Засідання циклової комісії',
			url: 'https://drive.google.com/file/d/1pQn2I6ojQUPvZ-6fT0GserM8eOv6ZhLU/view',
		},
		{
			text: 'Конкурс "Кращий за професією"',
			url: 'https://drive.google.com/file/d/1rcS11S-BEizX3RBKPxSWaANHZ5cpNTRW/view',
		},
	];

	const RoadTransport = (
		<div>
			<Title text='Циклова комісія дисциплін автомобільного транспорту' />
			<Title text='Наші події' />
			<DropUpMenu links={list} name={'2023-2024 н.р.'} />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Циклова комісія дисциплін автомобільного транспорту - ЧПФК'>
			<Block content={RoadTransport} />
		</Page>
	);
};
