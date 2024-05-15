import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Nashispetsialnosti = () => {
	
	const nashispetsialnostiContent = (
		<div>
			<Title text='Наші спеціальності' />
			<hr className='hr-style' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Наші спеціальності - ЧПФК'>
			<Block content={nashispetsialnostiContent} />
		</Page>
	);
};
