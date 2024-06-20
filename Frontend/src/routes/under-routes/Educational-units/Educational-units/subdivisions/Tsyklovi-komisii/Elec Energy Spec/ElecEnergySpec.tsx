import Page from '../../../../../../../Page/Page';
import DropUpMenu from '../../../../../../../components/DropUpMenu/DropUpMenu';
import Block from '../../../../../../../components/sample/Block/Block';
import Title from '../../../../../../../components/sample/Title/Title';

export const ElecEnergySpec = () => {
	const list = [
		{
			text: 'Перемога у конкурсі навчальних посібників з інфомедійним компонентом',
			url: 'https://drive.google.com/file/d/1HMw937ggBJJYB0enbo0l48wReTt6Uq68/view',
		},
		{
			text: 'Співпраця з ДП «SIЕMENS–УКРАЇНА»',
			url: 'https://drive.google.com/file/d/14K4YAcGG4bQJ1wxz4LL-vp7hy16TJhYi/view',
		},
		{
			text: 'Фотовиставка "МА-ти"',
			url: 'https://drive.google.com/file/d/1xUzQZHGv00WmS3kbIgyxzQlPj3Y2RIu6/view',
		},
		{
			text: 'Заняття на виробничих майданчиках ТОВ «ЧЕРКАСИЕЛЕВАТОРМАШ»',
			url: 'https://drive.google.com/file/d/1jxYHpyCOmGafvwrvqZqoV4PiYHLSIQl-/view',
		},
		{
			text: 'Зустріч з представниками штурмової бригади ЗСУ',
			url: 'https://drive.google.com/file/d/1opeB23XKlcrUv_Zi-rMrqAmMnP6-AYhT/view',
		},
		{
			text: "До Дня пам'яті Героїв Небесної сотні",
			url: 'https://drive.google.com/file/d/1Ao3YuIBWzBwc_6dTdTzs7Q06GEP6a3ko/view',
		},
		{
			text: '27 січня – Міжнародний день пам’яті жертв Голокосту',
			url: 'https://drive.google.com/file/d/1jhTOvJDbLozjzq2y32JquJFGu-9go3dP/view',
		},
		{
			text: 'Науково-практичний семінар «Підготовка конкурентоспроможних фахівців електроенергетичної галузі. Теорія і практика»',
			url: 'https://drive.google.com/file/d/1YHBN_NTuwlmvpVEtflHnaPgqIy-SfmVl/view',
		},
		{
			text: 'Заняття на заводі покрівельних матеріалів ТОВ «СтройДом Україна»',
			url: 'https://drive.google.com/file/d/1FvlC8WonJ_XtHy66PCveSSpvZoaaimWX/view',
		},
		{
			text: 'Тематична виховна година «Гідність і Свобода України»',
			url: 'https://drive.google.com/file/d/1efjEVdZVzCH-FPm4aDk2VXfG08J3czqS/view',
		},
		{
			text: 'Екскурсія на поліграфічне підприємство компанії "ІМПРЕС"',
			url: 'https://drive.google.com/file/d/1Zefzq79Kxa62k7jdEmxRoU-9Pir5-hwW/view',
		},
		{
			text: 'Екскурсія на ТОВ «ARAMIS»',
			url: 'https://drive.google.com/file/d/1Lzv4aUxBLpvYennuMQ89gmUDzR0AEf3a/view',
		},
		{
			text: 'Підсумкова конференція за результатами проходження виробничої технологічної практики',
			url: 'https://drive.google.com/file/d/1igdKo2P_roysg6q-0UOCFLpM0ejh8a6k/view',
		},
	];

	const ElecEnergySpec = (
		<div>
			<Title text='Циклова комісія дисциплін професійно-практичної підготовки електроенергетичних спеціальностей' />
			<p>
				Циклова комісія дисциплін професійно – практичної підготовки
				електроенергетичних спеціальностей є випусковою комісією фахових
				молодших бакалаврів, що навчаються за спеціальністю 141 «
				Електроенергетика, електротехніка та електромеханіка». Підготовка
				здійснюється за двома освітніми програмами: «Монтаж і експлуатація
				електроустаткування підприємств і цивільних споруд» та «Монтаж,
				експлуатація та ремонт електротехнічних установок в агропромисловому
				комплексі».
			</p>
			<br />
			<p>
				Викладачі циклової комісії мають глибокі теоретичні знання та значний
				практичний досвід роботи на підприємствах, що забезпечує належний рівень
				підготовки фахівців.
			</p>
			<p>
				Методична проблема над якою працює циклова комісія в 2023-2024 н.р. -
				впровадження компетентнісного підходу в освітній процес підготовки за
				освітньо-професійним ступенем "фаховий молодший бакалавр" відповідно до
				вимог стандартів фахової передвищої освіти.{' '}
			</p>

			<Title text='Наші події' />
			<DropUpMenu links={list} name={'2023-2024 н.р.'} />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Циклова комісія дисциплін професійно-практичної підготовки електроенергетичних спеціальностей - ЧПФК'>
			<Block content={ElecEnergySpec} />
		</Page>
	);
};
