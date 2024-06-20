import Page from '../../../../../../../Page/Page';
import DropUpMenu from '../../../../../../../components/DropUpMenu/DropUpMenu';
import Block from '../../../../../../../components/sample/Block/Block';
import Title from '../../../../../../../components/sample/Title/Title';

export const DisciplinesofGenera = () => {
	const list = [
		{
			text: 'Олімпіада з математики серед студентів першого курсу',
			url: 'https://drive.google.com/file/d/1Eb5TKBiwMOolEx5ZQ6EvbbUJro3-WGmC/view',
		},
		{
			text: 'ІV Всеукраїнська студентська науково-практична конференція «ЕКОБЕЗПЕКА ЛЮДИНИ В УМОВАХ ГЛОБАЛЬНОЇ ЕКОЛОГІЧНОЇ КРИЗИ» (2024)',
			url: 'https://drive.google.com/file/d/1nWYonILG2Ielq_y7LbSh3rSm0lBmpl2v/view',
		},
		{
			text: 'Вікторина-подорож «CHEMISTRY VICTORYна 3»',
			url: 'https://www.facebook.com/chpt.edu.ua/videos/939351921237828/',
		},
		{
			text: 'Масштабний онлайн-урок до Дня Соборності України',
			url: 'https://www.facebook.com/chpt.edu.ua/videos/1461366548140945/',
		},
		{
			text: 'ІV Всеукраїнська учнівська онлайн-олімпіада «Хімія продовольчих та непродовольчих товарів»',
			url: 'https://drive.google.com/file/d/1EtXVBKDzUtqa5BMCmOyYCyBdnuwi_dGq/view',
		},
		{
			text: 'Турнір “Весняні хімічні перегони”',
			url: 'https://www.facebook.com/reel/403719939059453',
		},
		{
			text: 'Відкрита виховна година "СТОП - БУЛІНГ"',
			url: 'https://www.facebook.com/chpt.edu.ua/videos/894373242427431/',
		},
		{
			text: 'Зустріч з представниками штурмової бригади ЗСУ',
			url: 'https://drive.google.com/file/d/1opeB23XKlcrUv_Zi-rMrqAmMnP6-AYhT/view',
		},
		{
			text: 'Захід "Фізична показуха"',
			url: 'https://drive.google.com/file/d/1nCqrqP3PJuaHpUhaOsaAThonPViB9ddG/view',
		},
		{
			text: 'Інженерний тиждень',
			url: 'https://www.facebook.com/chpt.edu.ua/videos/1071856527259513',
		},
		{
			text: 'Олімпіада з математики',
			url: 'https://drive.google.com/file/d/1fbBgAGSa2N_Xfm4Gt7Bc-v8WF8zTbzEP/view',
		},
		{
			text: 'Відкрите заняття з предмету «Фізика і астрономія»',
			url: 'https://drive.google.com/file/d/11MV0cF7S19WKbph3dgRxkwOT59SD7UdW/view',
		},
		{
			text: 'Конференція "Екологія автотранспорту"',
			url: 'https://drive.google.com/file/d/1gQsvXdJ0ghhAD54Px2R0VAmrbWzRz3K_/view',
		},
		{
			text: 'Екскурсія в астрономічну обсерваторію',
			url: 'https://drive.google.com/file/d/1XHodYmhhq4hMhN3TW5pRatm74i4WAzRN/view',
		},
		{
			text: 'Фізкультурно-патріотичний фестиваль "Козацькому роду нема переводу"',
			url: 'https://drive.google.com/file/d/17qhpnS7bT8g3BonqZFFirXLdd6nGaqE7/view',
		},
		{
			text: 'Тренінг "Право на повагу"',
			url: 'https://drive.google.com/file/d/1rNleWGS7xYQVJ5zEvwwuYhDkZiXKKgEF/view',
		},
		{
			text: 'Засідання циклової комісії на 2023-2024 н.р.',
			url: 'https://drive.google.com/file/d/1m2eP532yjxBUVItLlhZChkTp8U443zVD/view',
		},
	];
	const DisciplinesofGenera = (
		<div>
			<Title text='Циклова комісія дисциплін загальноосвітньої підготовки' />
			<hr className='hr-style' />

			<p>
				Успішне розв’язання складних завдань навчання і виховання молоді
				вирішальною мірою залежить від учителя, його ідейної переконаності,
				професійної майстерності, ерудиції та культури.
			</p>
			<br />
			<p>
				Циклова комісія в 2023-2024 н.р. працює над вирішенням методичної
				проблеми "Впровадження компетентнісного підходу в освітній процес
				підготовки за освітньо-професійним ступенем "фаховий молодший бакалавр"
				при викладанні загальноосвітніх дисциплін.
			</p>
			<br />
			<Title text='Наші події' />
			<DropUpMenu links={list} name={'2023-2024 н.р.'} />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Циклова комісія дисциплін загальноосвітньої підготовки - ЧПФК'>
			<Block content={DisciplinesofGenera} />
		</Page>
	);
};
