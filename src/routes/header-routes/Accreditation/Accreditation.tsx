import { FiLock } from 'react-icons/fi';
import Page from '../../../Page/Page';
import DemoBlock from '../../../components/DemoBlock/DemoBlock';
import DropdownMenu from '../../../components/DropdownMenu/DropdownMenu';
import Subtitle from '../../../components/Subtitle/Subtitle';
import Title from '../../../components/Title/Title';
import UnorderedList from '../../../components/UnorderedList/UnorderedList';

export const Accreditation = () => {
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
			<Title text='Сектор акредитації та ліцензування' />
			<Subtitle text='Основные задачи' />
			<UnorderedList items={['Пункт первый', 'Пункт второй', 'Пункт третий']} />
			Lorem ipsum dolor sit amet.
		</div>
	);

	return (
		<Page title='Сектор акредитації та ліцензування - ЧПФК'>
			<DemoBlock
				routes={accreditationRoutes}
				content={accreditationContent}
				additionalLinks={accreditationLinks}
			/>
			<DropdownMenu items={accreditationLinks} />
		</Page>
	);
};
