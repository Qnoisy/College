import Page from '../../../../Page/Page'
import DropUpMenu from '../../../../components/DropUpMenu/DropUpMenu'
import Block from '../../../../components/sample/Block/Block'
import Title from '../../../../components/sample/Title/Title'


export const Activity = () => {
	const list = [
		{
			text: 'Тематична виховна година "День українського добровольця"',
			url: 'https://drive.google.com/file/d/1c-gNzbLE98P4A7D3VF_MO7DJ7oPoQohk/view',
		},
		{
			text: 'Виховна година "Нас єднає Шевченкове слово"',
			url: 'https://drive.google.com/file/d/1qdl6h_ZNYH_Nu4P_zxEm0_gFYWFCRZOC/view',
		},
		{
			text: 'Виховна година: « О мово, музика, калина бальзам цілющий для душі»',
			url: 'https://drive.google.com/file/d/1edmOl9bLObGk0vtebq1YagiCm8dDVRhj/view',
		},
		{
			text: 'Виховна година "Правила етикету"',
			url: 'https://drive.google.com/file/d/1p4UZ9uRjDY7bmRsP3oLZ-iEe_kXdYXqE/view',
		},
		{
			text: 'Виховна година "Пам`ятай про Крути"',
			url: 'https://drive.google.com/file/d/1ufqkper_Q2-e975gafUoroBseMkKfP5q/view',
		},
		{
			text: 'Тематична презентація «День Соборності України»',
			url: 'https://drive.google.com/file/d/1vsh8jffx1YUvD9G-rZ4IQp1MU65PtqM0/view',
		},
		{
			text: 'Тематична виховна година «Толерантність – як запорука людяності»',
			url: 'https://drive.google.com/file/d/1dewtHEQVXktjPZuup6tyhJIxOGADXfgl/view',
		}
	];


	const activityContent = (
		<div>
			<Title text='Діяльність бібліотеки' />
			<hr className='hr-style' />
			<DropUpMenu links={list} name={'2023-2024'} />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Діяльність бібліотеки- ЧПФК'>
			<Block content={activityContent} />
		</Page>
	);
};
