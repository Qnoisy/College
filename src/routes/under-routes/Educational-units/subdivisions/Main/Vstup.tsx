import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Vstup = () => {
	
	const vstupContent = (
		<div>
			<Title text='Вступна кампанія' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Вступна кампанія - ЧПФК'>
			<Block content={vstupContent} />
		</Page>
	);
};
