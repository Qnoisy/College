import { GiMoneyStack, GiPayMoney } from 'react-icons/gi';
import { IoIosLaptop } from 'react-icons/io';
import Page from '../../../../../../../Page/Page';
import { Button } from '../../../../../../../components/Button';
import DemoBlock from '../../../../../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../../../../../components/sample/Title/Title';

export const DEPARTMENTOFBUSINESSEDUCATIONANDKT = () => {
	const DEPARTMENTOFBUSINESSEDUCATIONANDKTLinks = [
		{
			name: 'Економіка підприємства',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ek',
			icon: <GiMoneyStack />,
		},
		{
			name: 'Оціночна діяльність',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/od',
			icon: <GiPayMoney />,
		},
		{
			name: 'Розробка програмного забезпечення',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ps',
			icon: <IoIosLaptop />,
		},
	];
	const DEPARTMENTOFBUSINESSEDUCATIONANDKTRoutes = [
		{
			name: 'Економіка підприємства',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ek',
			icon: <GiMoneyStack />,
		},
		{
			name: 'Оціночна діяльність',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/od',
			icon: <GiPayMoney />,
		},
		{
			name: 'Розробка програмного забезпечення',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr/ps',
			icon: <IoIosLaptop />,
		},
	];
	const departmentContent = (
		<div>
			<Title text="Бізнес-освіти та комп'ютерних технологій" />
			<Button
				onClick={() => {
					window.open(
						'https://drive.google.com/file/d/1s3nrIbJp3AW9wyb6fqmQLvdiceDNNXYe/view',
						'_blank'
					);
				}}
			>
				Презентація відділення
			</Button>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title="Бізнес-освіти та комп'ютерних технологій - ЧПФК">
			<DemoBlock
				additionalLinks={DEPARTMENTOFBUSINESSEDUCATIONANDKTLinks}
				content={departmentContent}
				routes={DEPARTMENTOFBUSINESSEDUCATIONANDKTRoutes}
			/>
		</Page>
	);
};
