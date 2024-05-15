import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Opsfakhovyimolodshyibakalavr = () => {
	
	const arkhivContent = (
		<div>
			<Title text='ОПС Фаховий Молодший Бакалавр' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='ОПС Фаховий Молодший Бакалавр - ЧПФК'>
			<Block content={arkhivContent} />
		</Page>
	);
};
