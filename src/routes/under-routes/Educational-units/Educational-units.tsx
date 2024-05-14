import { FiLock } from 'react-icons/fi';
import Page from '../../../Page/Page';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import DropdownMenu from '../../../components/sample/DropdownMenu/DropdownMenu';
import Subtitle from '../../../components/sample/Subtitle/Subtitle';
import Title from '../../../components/sample/Title/Title';
import UnorderedList from '../../../components/sample/UnorderedList/UnorderedList';

export const Educationalunits = () => {
	const accreditationRoutes = [
		{ name: 'Обзор', path: '/accreditation/overview' },
		{ name: 'Документы', path: '/accreditation/documents' },
		{ name: 'Контакты', path: '/accreditation/contacts' },
	];

	const accreditationLinks = [
		{
			name: 'Формы документов',
			path: '/accreditation/forms',
			icon: <FiLock />, // Иконка для документов
		},
		{
			name: 'Политика конфиденциальности',
			path: '/accreditation/privacy',
			icon: <FiLock />, // Иконка для конфиденциальности
		},
	];

	const accreditationContent = (
		<div>
			<Title text='Освітні підрозіділи' />
			<hr className='hr-style' />
			<DropdownMenu title='2022-2023' items={accreditationLinks} />
			<DropdownMenu title='2023-2024' items={accreditationLinks} />
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
				additionalLinks={accreditationLinks}
			/>
		</Page>
	);
};
