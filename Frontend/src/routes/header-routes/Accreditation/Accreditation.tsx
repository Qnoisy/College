import { CgPlayListSearch } from 'react-icons/cg';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { RiFileListLine } from 'react-icons/ri';
import Page from '../../../Page/Page';
import DropUpMenu from '../../../components/DropUpMenu/DropUpMenu';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import Subtitle from '../../../components/sample/Subtitle/Subtitle';
import Title from '../../../components/sample/Title/Title';
import UnorderedList from '../../../components/sample/UnorderedList/UnorderedList';

export const Accreditation = () => {
	const accreditationRoutes = [
		{
			name: 'Ліцензії',
			path: '/accreditation/licence',
			icon: <MdOutlineFeaturedPlayList />,
		},
		{
			name: 'Сертифікати про акредитацію',
			path: '/accreditation/certification',
			icon: <RiFileListLine />,
		},
		{
			name: 'Відомості про самооцінювання',
			path: '/accreditation/self-esteem',
			icon: <CgPlayListSearch />,
		},
	];
	const list = [
		{
			text: 'Акредитація 2022',
			url: 'https://uk.wikipedia.org/wiki',
		},
	];
	const list1 = [
		{
			text: 'Акредитація 2023',
			url: 'https://uk.wikipedia.org/wiki',
		},
	];

	const accreditationContent = (
		<div>
			<Title text='Сектор акредитації та ліцензування' />
			<DropUpMenu links={list} name={'2022-2023'} />
			<DropUpMenu links={list1} name={'2023-2024'} />
			<hr className='hr-style' />
			<strong className={'strong-style'}>Мета роботи відділу - </strong>полягає
			у проведенні ряду заходів, пов'язаних із плануванням та організацією
			процесів ліцензування та акредитації різних напрямків підготовки
			(спеціальностей), за якими коледж здійснює підготовку фахівців.
			<Subtitle text='Основними завданнями Відділу є:' />
			<UnorderedList
				items={[
					'організація методичної роботи, спрямованої на підготовку документації для ліцензування освітньої діяльності та акредитації освітніх програм за відповідними спеціальностями в Коледжі.',
					'координація взаємодії з іншими структурними підрозділами Коледжу щодо підготовки документів для ліцензування освітньої діяльності та акредитації освітніх програм.',
					'супровід документів для ліцензування освітньої діяльності та акредитації освітніх програм у Єдиній державній базі з питань освіти (ЄДЕБО), Міністерстві освіти і науки України, Національному агентстві з забезпечення якості вищої освіти та інших акредитаційних установах.',
					'надання методичної та інформаційно-консультативної підтримки у підготовці матеріалів для ліцензування та акредитації освітніх програм.',
					'здійснення контролю за своєчасним видачею та оновленням ліцензій та сертифікатів про акредитацію освітніх програм.',
					'проведення аналізу нормативно-правових змін, що стосуються ліцензування освітньої діяльності та акредитації, та інформування про ці зміни відповідних підрозділів Коледжу.',
					'аналіз пропозицій від зацікавлених сторін щодо потреби відкриття нових спеціальностей в Коледжі та узагальнення цих рекомендацій для адміністрації.',
					'зберігання ліцензійних та акредитаційних документів спеціальностей, що є в наявності в Коледжі, відповідно до чинного законодавства.',
				]}
			/>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Сектор акредитації та ліцензування - ЧПФК'>
			<DemoBlock
				routes={accreditationRoutes}
				content={accreditationContent}
				additionalLinks={accreditationRoutes}
			/>
		</Page>
	);
};
