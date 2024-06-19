import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Certification = () => {
	const certificationContent = (
		<div>
			<Title text='Сертифікати про акредитацію' />
			<hr className='hr-style' />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Сертифікати про акредитацію - ЧПФК'>
			<Block content={certificationContent} />
		</Page>
	);
};
