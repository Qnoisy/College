import Page from '../../../../../../../Page/Page';
import DropUpMenu from '../../../../../../../components/DropUpMenu/DropUpMenu';
import Block from '../../../../../../../components/sample/Block/Block';
import Title from '../../../../../../../components/sample/Title/Title';

export const GTDandIME = () => {
	const list = [
		{
			text: 'Практичне заняття щодо надання першої медичної допомоги у разі отримання поранення',
			url: 'https://drive.google.com/file/d/1jQPhft2zebHIDaI_O7C5_kVza_xRy9Yq/view',
		},
		{
			text: 'Екскурсія у місто Львів',
			url: 'https://drive.google.com/file/d/1Wsb7X6bZKfM9aPnWXYdq5O4IurvUK40d/view',
		},
		{
			text: 'Тиждень загальнотехнічних дисциплін',
			url: 'https://drive.google.com/file/d/1ZigxlI-Inh3tSgea6ESlCeQlj0ZlFtFx/view',
		},
		{
			text: 'Відкрита виховна година «Алкоголь і наркотики в житті студентської молоді»',
			url: 'https://drive.google.com/file/d/1RZe5I6vD-P7rXejuAzak3O76f10n_tn0/view',
		},
		{
			text: 'Зустріч учнів Черкаської гімназії №31 з провідними викладачами-практиками',
			url: 'https://drive.google.com/file/d/1Iw60uD09DopE6w3Tt7O6vgqdR2icS51y/view',
		},
		{
			text: 'Виробниче заняття на ТОВ "Бестеплюс"',
			url: 'https://drive.google.com/file/d/1OJD4q6wkGWt3FhWfmlbd5FxD-x9fg1qV/view',
		},
		{
			text: 'Майстер-клас по програмуванню верстату з ЧПК',
			url: 'https://drive.google.com/file/d/19cl0x6XoAVtd-PVGj4KHdAqCL1ecnUKX/view',
		},
		{
			text: 'Виробниче заняття на ТОВ "Бестеплюс"',
			url: 'https://drive.google.com/file/d/17ODOcXF42wqNtKNJqlwrojA2q8yQ-6_C/view',
		},
		{
			text: 'Конференція "Моя майбутня професія"',
			url: 'https://drive.google.com/file/d/19cl0x6XoAVtd-PVGj4KHdAqCL1ecnUKX/view',
		},
		{
			text: 'Екскурсія в місто Київ',
			url: 'https://drive.google.com/file/d/1QPE5JCVWmGRlInE9RW1TDyb7UF9eBXp7/view',
		},
	];

	const GTDandIME = (
		<div>
			<Title text='Циклова комісія загальнотехнічних дисциплін та галузевого машинобудування' />
			<Title text='Наші події' />
			<DropUpMenu links={list} name={'2023-2024 н.р.'} />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Циклова комісія загальнотехнічних дисциплін та галузевого машинобудування - ЧПФК'>
			<Block content={GTDandIME} />
		</Page>
	);
};
