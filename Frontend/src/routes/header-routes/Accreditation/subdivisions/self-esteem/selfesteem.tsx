import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Selfesteem = () => {
	const selfesteemContent = (
		<div>
			<Title text='Відомості про самооцінювання' />
			<hr className='hr-style' />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Відомості про самооцінювання - ЧПФК'>
			<Block content={selfesteemContent} />
		</Page>
	);
};
