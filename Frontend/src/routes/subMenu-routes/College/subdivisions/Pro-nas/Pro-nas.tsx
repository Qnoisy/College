import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Pronas = () => {
	const pronasContent = (
		<div>
			<Title text='Про нас' />
			<hr className='hr-style' />

			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Про нас - ЧПФК'>
			<Block content={pronasContent} />
		</Page>
	);
};
