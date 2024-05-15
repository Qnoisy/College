import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Naukovadiialnistvykladachiv = () => {
	
	const naukovadiialnistvykladachivContent = (
		<div>
			<Title text='Наукова діяльність викладачів' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Наукова діяльність викладачів - ЧПФК'>
			<Block content={naukovadiialnistvykladachivContent} />
		</Page>
	);
};
