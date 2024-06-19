import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Licence = () => {
	const licenceContent = (
		<div>
			<Title text='Ліцензії' />
			<hr className='hr-style' />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Ліцензії - ЧПФК'>
			<Block content={licenceContent} />
		</Page>
	);
};
