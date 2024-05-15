import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Naukovodoslidnarobotastudentiv = () => {
	
	const naukovodoslidnarobotastudentivContent = (
		<div>
			<Title text='Науково-дослідна робота студентів' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Науково-дослідна робота студентів - ЧПФК'>
			<Block content={naukovodoslidnarobotastudentivContent} />
		</Page>
	);
};
