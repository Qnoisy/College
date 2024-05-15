import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Dninauky = () => {
	
	const dninaukyContent = (
		<div>
			<Title text='Дні науки' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Дні науки - ЧПФК'>
			<Block content={dninaukyContent} />
		</Page>
	);
};
