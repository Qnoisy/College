import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Starshoklasnykam = () => {
	const starshoklasnykamContent = (
		<div>
			<Title text='Старшокласникам' />
			<hr className='hr-style' />
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Старшокласникам - ЧПФК'>
			<Block content={starshoklasnykamContent} />
		</Page>
	);
};
