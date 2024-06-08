import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const MainSub = () => {
	
	const mainsubContent = (
		<div>
			<Title text='Основні підрозділи' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Основні підрозділи - ЧПФК'>
			<Block content={mainsubContent} />
		</Page>
	);
};
