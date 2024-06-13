import Page from '../../../../../../../../Page/Page';
import DropUpMenu from '../../../../../../../../components/DropUpMenu/DropUpMenu';
import Block from '../../../../../../../../components/sample/Block/Block';
import Title from '../../../../../../../../components/sample/Title/Title';

export const SoftwareandSocEco = () => {
	const list = [
		{
			text: 'Навчальна практика з комп’ютеризації бухгалтерського обліку',
			url: 'https://drive.google.com/file/d/17uGa21zOFiUZNRtHcvV6K84hL7gyiDpX/view',
		},
		{
			text: 'Участь в інформаційно-консультативному вебінарі на тему: «Тренди споживання 2024. Ціни. Роздрібні мережі ЄС. Умови входу»',
			url: 'https://drive.google.com/file/d/1IDLGlAi7bKmXiqWK79Q_5fHOS5mJeZb0/view',
		},
		{
			text: 'Всесвітній тиждень грошей',
			url: 'https://drive.google.com/file/d/1CMNzhpKpH6AAEHM6pDz5wqnc2qF3WktU/view',
		},
		{
			text: 'Музей грошей',
			url: 'https://drive.google.com/file/d/1_W0s-E4DEZXYB1I0xVbzRwpeeLDDCyFZ/view',
		},
		{
			text: 'Зустріч з представниками Харківського авіаційного інституту',
			url: 'https://drive.google.com/file/d/1PuMBUSd49XDKoIzrOuuP-LUgL5jXKV3R/view',
		},
		{
			text: 'Онлайн-конференція "Система електронного документообігу"',
			url: 'https://drive.google.com/file/d/14Mt3X1n8DpmgmVCVYnTU_dlfSaD02yZO/view',
		},
		{
			text: 'День заощаджень',
			url: 'https://drive.google.com/file/d/11BW80mBk3aEThN3l5QKCRHDUW0PG-6MQ/view',
		},
		{
			text: 'Всеукраїнський онлайн-урок із кібербезпеки',
			url: 'https://drive.google.com/file/d/1G_27zBItAM_jUjWyyXWCnT8RAIwzzuM9/view',
		},
		{
			text: 'Науково-практична конференція "Економіка України і курс гривні"',
			url: 'https://drive.google.com/file/d/1hogcp4XtVnL3V4C5ktQIGrx4HvRY_nYt/view',
		},
		{
			text: 'Лекція від ІТ-компанії TRIARE',
			url: 'https://drive.google.com/file/d/1LVBVAzYwo2i4Z5m31kRxjNgiX_ZPyDpJ/view',
		},
		{
			text: 'Перший відбірковий етап міжнародної студентської олімпіади з програмування ICPC',
			url: 'https://drive.google.com/file/d/1YWStT4wePyfypRM8rFECcwiiFvNNz0GO/view',
		},
		{
			text: 'MEET UP від IT-компанії InterLink LLC',
			url: 'https://drive.google.com/file/d/1CYf6ghNTwR18iADMInYF64mWIIIEkKUF/view',
		},
		{
			text: 'День відкритих дверей від ІТ-компанії Triare',
			url: 'https://drive.google.com/file/d/1LVBVAzYwo2i4Z5m31kRxjNgiX_ZPyDpJ/view',
		},
		{
			text: 'Відкрите заняття з дисципліни «Бухгалтерський облік»',
			url: 'https://drive.google.com/file/d/1DCRDTiQYe3s_u3dazM-yTfjz9fBOLO20/view',
		},
		{
			text: 'Онлайн-конференція з адміністрацією та викладачами економічного факультету Національного університету біоресурсів та природокористування України',
			url: 'https://drive.google.com/file/d/1JFE2dktDqeRHvYxD_EyAlbmzKBEjD6i3/view',
		},
	];

	const SoftwareandSocEco = (
		<div>
			<Title text='Циклова комісія програмного забезпечення та соціально-економічних дисциплін' />

			<Title text='Наші події' />
			<DropUpMenu links={list} name={'2023-2024 н.р.'} />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Циклова комісія програмного забезпечення та соціально-економічних дисциплін - ЧПФК'>
			<Block content={SoftwareandSocEco} />
		</Page>
	);
};
