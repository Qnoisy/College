import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Metodychnikomisii = () => {
	
	const metodychnikomisii = (
		<div>
			<Title text='Методичка комісія' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Методичка комісія - ЧПФК'>
			<Block content={metodychnikomisii} />
		</Page>
	);
};
