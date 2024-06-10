import Page from '../../../Page/Page'
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock'
import Title from '../../../components/sample/Title/Title'

export const Educationalunits = () => {

	const educationalunitsRoutes = [
		{
			name: 'Циклові комісії',
			path: '/educational-units/tsyklovi-komisii',
		},
		{ 
			name: 'Відділення', path: '/educational-units/department',
		},

	];


	const educationalunitsContent = (
		<div>
			<Title text='Освітні підрозділи' />
			<hr className='hr-style' />
			<p>Освітні підрозділи нашого навчального закладу представлені цикловими комісіями та відділеннями. Вони відіграють ключову роль у забезпеченні якісного освітнього процесу та організації навчальної діяльності.</p><br/>
			<p>Циклові комісії та відділення нашого навчального закладу забезпечують систематизацію та ефективне управління навчальним процесом, високий рівень освіти та наукових досліджень, а також сприяють всебічному розвитку студентів та викладачів.</p>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Освітні підрозділи - ЧПФК'>
			<DemoBlock routes={educationalunitsRoutes} content={educationalunitsContent} />
		</Page>
	);
};
