import Page from '../../../../../Page/Page';
import Block from '../../../../../components/sample/Block/Block';
import Title from '../../../../../components/sample/Title/Title';

<<<<<<< HEAD:src/routes/under-routes/Entry-company/subdivisions/Nashi-spetsialnosti/Nashi-spetsialnosti.tsx
 const Nashispetsialnosti = () => {
	const nashispetsialnostiContent = (
=======
export const Starshoklasnykam = () => {
	const starshoklasnykamContent = (
>>>>>>> 53d60207cb7f7d55c54211b6c40a0347cb02cfdd:src/routes/under-routes/Entry-company/subdivisions/Starshoklasnykam/Starshoklasnykam.tsx
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

export default Nashispetsialnosti