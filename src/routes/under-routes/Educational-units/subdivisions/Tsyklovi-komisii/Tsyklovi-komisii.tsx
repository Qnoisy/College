import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Tsyklovikomisii = () => {
	
	const tsyklovikomisiiContent = (
		<div>
			<Title text='Циклова комісія' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Циклова комісія - ЧПФК'>
			<Block content={tsyklovikomisiiContent} />
		</Page>
	);
};
