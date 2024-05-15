import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Naukavkoledzhi = () => {
	const naukavkoledzhiContent = (
		<div>
			<Title text='Наука в коледжі' />
			<hr className='hr-style' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Наука в коледжі - ЧПФК'>
			<Block content={naukavkoledzhiContent} />
		</Page>
	);
};
