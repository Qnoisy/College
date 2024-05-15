import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Praktychnyipsykholoh = () => {
	
	const praktychnyipsykholohContent = (
		<div>
			<Title text='Практичний психолог' />
			<hr className='hr-style' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Практичний психолог - ЧПФК'>
			<Block content={praktychnyipsykholohContent} />
		</Page>
	);
};
