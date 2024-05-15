import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Arkhiv = () => {
	
	const arkhivContent = (
		<div>
			<Title text='Архів' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Архів - ЧПФК'>
			<Block content={arkhivContent} />
		</Page>
	);
};
