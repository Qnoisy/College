import Page from '../../../../../Page/Page'
import DropUpMenu from '../../../../../components/DropUpMenu/DropUpMenu'
import Block from '../../../../../components/sample/Block/Block'
import Title from '../../../../../components/sample/Title/Title'

export const Vstup = () => {
	const list = [
		{
			text: 'Етапи вступної кампанії',
			url: 'https://drive.google.com/file/d/18YCXXGAtF7Dv8AOaUus0L833q1AeuCar/view',
		},
		{
			text: 'Перелік документів для вступу',
			url: 'https://drive.google.com/file/d/1M6AtgjuC_cZYxDsfxO7spGxUupe9WCnD/view',
		},
		{
			text: 'Вимоги до мотиваційного листа',
			url: 'https://drive.google.com/file/d/1lEHh7pl2mglONj4hPfmIcF071tY-se7X/view',
		},
	];
	const vstupContent = (
		<div>
			<Title text='Вступна кампанія' />
			<hr className='hr-style' />
			<DropUpMenu links={list} name={'ВСТУП 2024'} />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Вступна кампанія - ЧПФК'>
			<Block content={vstupContent} />
		</Page>
	);
};
