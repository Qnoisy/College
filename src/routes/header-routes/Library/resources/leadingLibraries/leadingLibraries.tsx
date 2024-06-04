import Page from '../../../../../Page/Page'
import DropUpMenu from '../../../../../components/DropUpMenu/DropUpMenu'
import Block from '../../../../../components/sample/Block/Block'
import Title from '../../../../../components/sample/Title/Title'



export const LeadingLibraries = () => {

const list = [
	{
		text: 'Державна наукова архітектурно-будівельна бібліотека ім. В. Г. Заболотного',
		url: 'http://www.dnabb.org/',
	},
	{
		text: 'Національна наукова медична бібліотека України',
		url: 'https://www.library.gov.ua/',
	},
	{
		text: 'Національна наукова сільськогосподарська бібліотека (Київ) НААН України ',
		url: 'https://dnsgb.com.ua/ ',
	},
	{
		text: 'Одеська національна наукова бібліотека ім. М. Горького ',
		url: 'https://odnb.odessa.ua/',
	},
	{
		text: 'Харківська державна наукова бібліотека імені В.Г.Короленка  ',
		url: 'https://korolenko.kharkov.com/',
	},
	{
		text: 'Державна науково-педагогічна бібліотека України імені В. О. Сухомлинського  ',
		url: 'https://dnpb.gov.ua/ua/',
	},
	{
		text: 'Державна науково-технічна бібліотека України ',
		url: 'https://dntb.gov.ua/',
	},
];

const list1 = [
	{
		text: 'Наукова бібліотека ім. М. Максимовича Київського національного університету ім. Тараса Шевченка',
		url: 'http://www.library.univ.kiev.ua/ukr/title4.php3',
	},
	{
		text: 'Наукова бібліотека Східноукраїнського національного університету імені Володимира Даля',
		url: 'https://library.snu.edu.ua/',
	},
	{
		text: 'Наукова бібліотека Національного юридичного університету ім. Ярослава Мудрого',
		url: 'https://library.nlu.edu.ua/',
	},
	{
		text: 'Наукова бібліотека Львівського національного медичного університету ім. Данила Галицького',
		url: 'https://library.meduniv.lviv.ua/',
	},
	{
		text: 'Науково-технічна бібліотека ім. Г. І. Денисенка КПІ ім. Ігоря Сікорського',
		url: 'https://www.library.kpi.ua/',
	},
	{
		text: 'Наукова бібліотека Національного університету «Чернігівський колегіум» імені Т. Г. Шевченка',
		url: 'https://library.chnpu.edu.ua/',
	},
	{
		text: 'Наукова бібліотека Таврійського державного агротехнологічного університету',
		url: 'http://www.tsatu.edu.ua/biblioteka/',
	},
];

const list2 = [
	{
		text: 'Британська бібліотека',
		url: 'https://www.bl.uk/',
	},
	{
		text: 'Бібліотека Конгресу',
		url: 'https://loc.gov/',
	},
	{
		text: 'Нью-Йоркська публічна бібліотека',
		url: 'https://www.nypl.org/',
	},
	{
		text: 'Національна парламентська бібліотека Японії',
		url: 'https://www.ndl.go.jp/',
	},
	{
		text: 'Національна бібліотека Франції',
		url: 'https://www.bnf.fr/fr',
	},
];

const list3 = [
	{
		text: 'Бібліотека Берлінского університету',
		url: 'https://www.fu-berlin.de/sites/ub',
	},
	{
		text: 'Бібліотека Кембріджського університету',
		url: 'https://www.lib.cam.ac.uk/',
	},
	{
		text: 'Бібліотека Массачусетського технологічного інституту',
		url: 'https://libraries.mit.edu/',
	},
	{
		text: 'Бібліотека Міланського університету',
		url: 'https://www.unimi.it/it',
	},
	{
		text: 'Бібліотека Оксфордського університету',
		url: 'https://www.ox.ac.uk/',
	},
	{
		text: 'Бібліотека Гарвардського університету ',
		url: 'https://library.harvard.edu/',
	},
	{
		text: 'Бібліотека Єльського університету ',
		url: 'https://library.yale.edu/',
	},
];

const leadingLibrariesContent = (
	<div>
		<Title text='Провідні бібліотеки світу' />
		<hr className='hr-style' />
		<DropUpMenu links={list} name={'Бібліотеки загальнодержавного рівня'} />
		<div> </div>
		<DropUpMenu links={list1} name={'Багатогалузеві бібліотеки'} />
		<div> </div>
		<DropUpMenu links={list2} name={'Найбільші бібліотеки в світі'} />
		<div> </div>
		<DropUpMenu links={list3} name={'Провідні бібліотеки світу'} />
		<div> </div>
		<hr className='hr-style' />
	</div>
);

return (
	<Page title='Провідні бібліотеки світу'>
		<Block content={leadingLibrariesContent} />
	</Page>
);
};
