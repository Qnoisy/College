import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Sotsialnyipedahoh = () => {
	
	const sotsialnyipedahohContent = (
		<div>
			<Title text='Соціальний педагог' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Соціальний педагог - ЧПФК'>
			<Block content={sotsialnyipedahohContent} />
		</Page>
	);
};
