import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaSchool, FaTable } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi2';
import { IoMailOutline } from 'react-icons/io5';
import Page from '../../../Page/Page';
import DropUpMenu from '../../../components/DropUpMenu/DropUpMenu';
import DemoBlock from '../../../components/sample/DemoBlock/DemoBlock';
import Subtitle from '../../../components/sample/Subtitle/Subtitle';
import Title from '../../../components/sample/Title/Title';

export const Entrycompany = () => {
	const entrycompanyRoutes = [
		{
			name: 'ОПС Фаховий Молодший Бакалавр',
			path: '/entry-company/ops-fakhovyi-molodshyi-bakalavr',
			icon: <FaTable />,
		},
		{
			name: 'Вступна кампанія',
			path: '/entry-company/vstup',
			icon: <HiAcademicCap />,
		},
		{
			name: 'Старшокласникам',
			path: '/entry-company/starshoklasnykam',
			icon: <FaSchool />,
		},
	];
	const list = [
		{
			text: 'Правила прийому до черкаського політехнічного фахового коледжу для здобуття освітньо-професійного ступеня фахового молодшого бакалаρα у 2024 році',
			url: 'https://drive.google.com/file/d/1-tX6_kKSorvcdhhXvJzcyEyj5VnLfZxD/view?usp=sharing',
		},
		{
			text: 'Перелік документів для вступників',
			url: 'https://drive.google.com/file/d/15tReOSJffret8Vhog96-R_j0GqIXhCxw/view?usp=sharing',
		},
		{
			text: 'Етапи вступної кампанії',
			url: 'https://drive.google.com/file/d/1h0FZYvQQebsA2oozLp6ZFHjpvFhyapm-/view?usp=sharing',
		},
		{
			text: 'Вимоги до написання мотиваційного листа',
			url: 'https://drive.google.com/file/d/1AYDIfKQ8hqS__lkD8BWPoOOZQY7iKI59/view?usp=sharing',
		},
	];

	const list1 = [
		{
			text: 'Положення про приймальну комісію черкаського політехнічного фахового коледжу у 2024 році',
			url: 'https://drive.google.com/file/d/1zqZEcLOUcjpOKR6c6DKZ-uu6mnPQ0sVW/view?usp=sharing',
		},
		{
			text: 'Договір про надання освітніх послуг',
			url: 'https://drive.google.com/file/d/1bhUus5Je9kv8gIwuZNM9CgCVbv-ekQaH/view?usp=sharing',
		},
		{
			text: 'Договір про надання платної освітньої послуги для підготовки фахівців в Черкаському політехнічному фаховому коледжі',
			url: 'https://drive.google.com/file/d/1iI5f-Ip5FC9JQXSmj5hkKZBkg-K5R6TP/view?usp=sharing',
		},
		{
			text: 'Наказ про внесення змін до складу Приймальної комісії',
			url: 'https://drive.google.com/file/d/1goL-B5MO59G_oApwutoj113FMBnZICnn/view',
		},
		{
			text: 'Наказ про створення Приймальної комісії на 2023 рік',
			url: 'https://drive.google.com/file/d/1rPzdFnANx95GlbL41PKLJiBbc6EzRoWc/view',
		},
	];

	const list2 = [
		{
			text: 'Перейти до реєстрації кабінету',
			url: 'https://vstup.edbo.gov.ua/',
		},
	];

	const list3 = [
		{
			text: 'Наказ про зарахування на навчання денної форми здобуття освіти за кошти державного (регіонального) бюджету но основі ПЗСО (11 класів)',
			url: 'https://drive.google.com/file/d/1q2WkiKbe6ePv_Xl0iw4ZcvtdY99aRZSL/view?usp=sharing',
		},
		{
			text: 'Наказ про зарахування на навчання денної форми здобуття освіти за кошти фізичних та/або юридичних осіб на основі ПЗСО (11 класів)',
			url: 'https://drive.google.com/file/d/1B8jo4EC_Jx48dz_Muyn4HmsJY4eqDhMx/view?usp=sharing',
		},
		{
			text: 'Наказ про зарахування на навчання денної форми здобуття освіти за кошти державного (регіонального) бюджету на основі БСО (9 класів)',
			url: 'https://drive.google.com/file/d/1C-xRkuAxPaR4LYziaBs1vAYEruFUqUQT/view?usp=sharing',
		},
		{
			text: 'Наказ про зарахування на навчання денної форми здобуття освіти за кошти фізичних та/або юридичних осіб на основі БСО (9 класів)',
			url: 'https://drive.google.com/file/d/1uPfDmqLO0A0Z4pWnGF0mLfW6thc6lMVx/view?usp=sharing',
		},
		{
			text: 'Наказ про зарахування на навчання денної форми здобуття освіти за кошти фізичних та/або юридичних осіб на основі БСО (9 класів)',
			url: 'https://drive.google.com/file/d/10qkJ7QqnNtalICsqYRNKrQEs44AoFFul/view?usp=sharing',
		},
	];

	const list4 = [
		{
			text: 'Рейтинг вступників на основ ПЗСО(11 класів):Розробка програмного забезпечення',
			url: 'https://vstup.edbo.gov.ua/offer/1137421/',
		},
		{
			text: 'Рейтинг вступників на основ ПЗСО(11 класів):Економіка підприємства',
			url: 'https://vstup.edbo.gov.ua/offer/1137308/',
		},
		{
			text: 'Рейтинг вступників на основ ПЗСО(11 класів):Обслуговування верстатів з програмним управлінням і робототехнічних комплексів',
			url: 'https://vstup.edbo.gov.ua/offer/1140552/',
		},
		{
			text: 'Рейтинг вступників на основ ПЗСО(11 класів):Обслуговування та ремонт автомобілів і двигунів',
			url: 'https://vstup.edbo.gov.ua/offer/1132758/',
		},
		{
			text: 'Рейтинг вступників на основ ПЗСО(11 класів):Монтаж і експлуатація електроустаткування підприємств і цивільних споруд',
			url: 'https://vstup.edbo.gov.ua/offer/1132644/',
		},
		{
			text: 'Рейтинг вступників на основ ПЗСО(11 класів):Монтаж, обслуговування та ремонт електротехнічних установок в агропромисловому комплексі',
			url: 'https://vstup.edbo.gov.ua/offer/1132643/',
		},
		{
			text: 'Рейтинг вступників на основ ПЗСО(11 класів):Обслуговування та ремонт електроустаткування автомобілів і тракторів',
			url: 'https://vstup.edbo.gov.ua/offer/1132642/',
		},
		{
			text: 'Рейтинг вступників на основ БСО(9 класів):Розробка програмного забезпечення',
			url: 'https://vstup.edbo.gov.ua/offer/1211854/',
		},
		{
			text: 'Рейтинг вступників на основ БСО(9 класів):Обслуговування верстатів з програмним управлінням і робототехнічних комплексів',
			url: 'https://vstup.edbo.gov.ua/offer/1140554/',
		},
		{
			text: 'Рейтинг вступників на основ БСО(9 класів):Технологія обробки матеріалів на верстатах і автоматичних лініях',
			url: 'https://vstup.edbo.gov.ua/offer/1138357/',
		},
		{
			text: 'Рейтинг вступників на основ БСО(9 класів):Обслуговування та ремонт обладнання підприємств хімічної і нафтогазопереробної промисловості',
			url: 'https://vstup.edbo.gov.ua/offer/1139130/',
		},
		{
			text: 'Рейтинг вступників на основ БСО(9 класів):Монтаж і експлуатація електроустаткування підприємств і цивільних споруд',
			url: 'https://vstup.edbo.gov.ua/offer/1132647/',
		},
		{
			text: 'Рейтинг вступників на основ БСО(9 класів):Монтаж, обслуговування та ремонт електротехнічних установок в агропромисловому комплексі',
			url: 'https://vstup.edbo.gov.ua/offer/1132648/',
		},
		{
			text: 'Рейтинг вступників на основ БСО(9 класів):Обслуговування і ремонт електроустаткування автомобілів і тракторів',
			url: 'https://vstup.edbo.gov.ua/offer/1132646/',
		},
		{
			text: 'Рейтинг вступників на основ БСО(9 класів):Обслуговування та ремонт автомобілів і двигунів',
			url: 'https://vstup.edbo.gov.ua/offer/1132757/',
		},
	];

	const entrycompanyContent = (
		<div>
			<Title text='Приймальна комісія' />
			<hr className='hr-style' />
			<div className='text-align'>
				<Subtitle text={'Графік роботи :'} />
				<Subtitle text={'Понеділок – п’ятниця 09.00 – 18.00'} />
				<Subtitle text={'Субота 09.00 – 13.00'} />
				<Subtitle text={'Перерва з 13.00 до 14.00'} />
			</div>
			<hr className='hr-style' />
			<DropUpMenu links={list} name={'Правила прийому'} />
			<DropUpMenu links={list1} name={'Документи приймальної комісії'} />
			<DropUpMenu links={list2} name={'Електронний кабінет вступника'} />
			<DropUpMenu links={list3} name={'Списки зарахованих'} />
			<DropUpMenu links={list4} name={'Рейтингові списки'} />
			<hr className='hr-style' />
			<p>
				<div className='row'>
					<FaMapMarkerAlt className='icon-gap' />
					<Subtitle text='АДРЕСА: 18001, м. Черкаси, вул. Надпільна, 226. Приміщення четвертого корпусу Черкаського політехнічного фахового коледжу, 1 корпус, 1 поверх. кабінет 109' />
				</div>
			</p>
			<p>
				<div className='row'>
					<IoMailOutline className='icon-gap' />
					<Subtitle
						text='Електронна адреса : info@chpt.edu.ua
'
					/>
				</div>
			</p>
			<p>
				<div className='row'>
					<BsFillTelephoneFill className='icon-gap' />
					<Subtitle
						text='Контактні телефони : +38(098)8307608,
+38(063)4584192, 38(047)2360729, 38(047)2360725'
					/>
				</div>
			</p>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Приймальна комісія - ЧПФК'>
			<DemoBlock
				routes={entrycompanyRoutes}
				content={entrycompanyContent}
				additionalLinks={entrycompanyRoutes}
			/>
		</Page>
	);
};
