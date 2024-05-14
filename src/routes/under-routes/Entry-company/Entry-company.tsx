import { FiLock } from 'react-icons/fi';
import Page from '../../../Page/Page';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import DropdownMenu from '../../../components/sample/DropdownMenu/DropdownMenu';
import Subtitle from '../../../components/sample/Subtitle/Subtitle';
import Title from '../../../components/sample/Title/Title';
import UnorderedList from '../../../components/sample/UnorderedList/UnorderedList';

export const Entrycompany = () => {
	const accreditationRoutes = [
		{ name: 'Наші спеціальності', path: '/accreditation/nashi-spetsialnosti' },
		{ name: 'ОПС Фаховий Молодший Бакалавр', path: '/accreditation/ops-fakhovyi-molodshyi-bakalavr' },
		{ name: 'Вступна кампанія', path: '/accreditation/vstup' },
		{ name: 'Архів', path: '/accreditation/arkhiv' },
	];

	

	const accreditationContent = (
		<div>
			<Title text='Вступна компанія' />
			<hr className='hr-style' />
			
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Вступна компанія - ЧПФК'>
			<DemoBlock
				routes={accreditationRoutes}
				content={accreditationContent}
			/>
		</Page>
	);
};
