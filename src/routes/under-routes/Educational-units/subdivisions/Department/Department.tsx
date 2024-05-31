import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Department = () => {
	const departmentContent = (
		<div>
			<Title text='Відділення' />
			<hr className='hr-style' />

			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Відділення - ЧПФК'>
			<Block content={departmentContent} />
		</Page>
	);
};
