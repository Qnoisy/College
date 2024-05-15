import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

export const Sotsialnopsykholohichnapidtrymka = () => {
	
	const sotsialnopsykholohichnapidtrymkaContent = (
		<div>
			<Title text='Соціально-психологічна підтримка' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Соціально-психологічна підтримка - ЧПФК'>
			<Block content={sotsialnopsykholohichnapidtrymkaContent} />
		</Page>
	);
};
