import { FaBookAtlas } from "react-icons/fa6"
import Page from '../../../../Page/Page'
import DemoBlock from '../../../../components/sample/DemoBlock/DemoBlock'
import Title from '../../../../components/sample/Title/Title'



export const Resource = () => {
	const resourceRoutes = [
		{ name: 'Провідні бібліотеки світу', path: '/library/resources/leadingLibraries' },
	];

	const resourceLinks = [
		{
			name: 'Провідні бібліотеки світу',
			path: '/library/resources/leadingLibraries',
			icon: <FaBookAtlas />, 
		},
	];

	const resourceContent = (<p>
		<div>
		<Title text='Бібліотечні ресурси' />
		<p>Бібліотечні ресурси є невід'ємною частиною освітнього процесу та дослідницької роботи. Наша бібліотека пропонує доступ до різноманітних електронних видань України та провідних бібліотек світу, щоб забезпечити наших користувачів найсучаснішими джерелами інформації та навчальними матеріалами.</p>
		<br />
		<p>У розділі "Провідні бібліотеки світу" ви знайдете інформацію про найвідоміші та найвпливовіші бібліотеки різних країн, які становлять важливий ресурс для досліджень у різних галузях знань.</p>
		<br />
	</div>
	</p>);

	return (
		<Page title='Бібліотечні ресурси'>
			<DemoBlock
				routes={resourceRoutes}
				content={resourceContent}
				additionalLinks={resourceLinks}
			/>
		</Page>
	);
};
