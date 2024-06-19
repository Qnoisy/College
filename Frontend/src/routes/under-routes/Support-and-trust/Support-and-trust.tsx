import { HiOutlineUsers, HiUsers } from 'react-icons/hi2';
import { TiInfoLargeOutline } from 'react-icons/ti';
import Page from '../../../Page/Page';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../components/sample/Title/Title';
import UnorderedList from '../../../components/sample/UnorderedList/UnorderedList';

export const Supportandtrust = () => {
	const supportandtrustRoutes = [
		{
			name: 'Соціальний педагог',
			path: '/support-and-trust/sotsialnyi-pedahoh',
			icon: <HiOutlineUsers />,
		},
		{
			name: 'Практичний психолог',
			path: '/support-and-trust/praktychnyi-psykholoh',
			icon: <HiUsers />,
		},
		{
			name: 'Загальна інформація',
			path: '/support-and-trust/sotsialno-psykholohichna-pidtrymka',
			icon: <TiInfoLargeOutline />,
		},
	];

	const supportandtrustContent = (
		<div>
			<Title text='Підтримка та довіра' />
			<hr className='hr-style' />
			<p>
				Ви відчуваєте себе пригніченим і вам складно описати, що
				відбувається?Пам’ятайте, не варто соромитися своїх почуттів. Якщо вам
				складно, зникло бажання жити й розвиватися, не соромтеся. Телефонуйте на
				гарячу лінію телефону довіри. Анонімно ви завжди зможете отримати
				безкоштовну консультацію.
			</p>
			<br />
			<UnorderedList
				items={[
					'Національна гаряча лінія з питань захисту прав дітей: 0-800-500-225 або 772 з мобільного (з 12:00 до 16:00)',
					'Національна гаряча лінія з питань насильства та захисту прав дітей: 0-800-500-335',
					'Центр соціальної допомоги сім’ям: 044-566-15-48 — допоможе в ситуаціях домашнього насильства і при складних сімейних обставинах',
					'Всеукраїнська дитяча лінія «Телефон Довіри»: 0-800-500-21-80',
					'У Черкасах телефон довіри 330-900 працює цілодобово (Черкаський міський центр соціальних служб для сім’ї, дітей та молоді) у будні з 8-00 до 20-00',
				]}
			/>
			<p>
				<a href='http://chmr.gov.ua' target='_blank' rel='noopener noreferrer'>
					chmr.gov.ua
				</a>{' '}
				068-822-05-92 або (0472)38-38-54 (Черкаська приймальня Української
				Гельсінської спілки з прав людини){' '}
				<a
					href='https://helsinki.org.ua'
					target='_blank'
					rel='noopener noreferrer'
				>
					helsinki.org.ua
				</a>
			</p>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Підтримка та довіра - ЧПФК'>
			<DemoBlock
				routes={supportandtrustRoutes}
				content={supportandtrustContent}
				additionalLinks={supportandtrustRoutes}
			/>
		</Page>
	);
};
