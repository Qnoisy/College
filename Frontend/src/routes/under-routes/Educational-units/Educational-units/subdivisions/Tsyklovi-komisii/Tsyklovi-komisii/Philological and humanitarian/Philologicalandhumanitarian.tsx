import Page from '../../../../../../../../Page/Page';
import DropUpMenu from '../../../../../../../../components/DropUpMenu/DropUpMenu';
import Block from '../../../../../../../../components/sample/Block/Block';
import Title from '../../../../../../../../components/sample/Title/Title';

export const Philologicalandhumanitarian = () => {
	const list = [
		{
			text: 'Екскурсія в Черкаський обласний краєзнавчий музей',
			url: 'https://drive.google.com/file/d/1S8Vvpn7939iruPspGzIaYgUcQCuCJcq3/view',
		},
		{
			text: 'Вікторина з іноземної мови',
			url: 'https://drive.google.com/file/d/1c_yjIRezUMDieOeLnXzOqv7fjQyJyNBL/view',
		},
		{
			text: 'Квест з іноземної мови "Ukraine is The Best"',
			url: 'https://drive.google.com/file/d/1C7VM5XBcVIqBG7oVQ0YA0X9qz_CeuJiY/view',
		},
		{
			text: 'Олімпіада з іноземної мови',
			url: 'https://drive.google.com/file/d/1oTOWOsA_l2ZUMB1DpHJMKroqiaMQEnDr/view',
		},
		{
			text: 'Заходи по відзначенню 210-річчя від дня народження Тараса Шевченка',
			url: 'https://drive.google.com/file/d/19Gk1SLM0WkNg0IjknfBD-Dh9X4u5SQKk/view',
		},
		{
			text: 'Олімпіада з географії',
			url: 'https://drive.google.com/file/d/1GuiCiewav9_tOS0em0FuXluVrosHkOvh/view',
		},
		{
			text: 'Показове заняття з іноземної мови',
			url: 'https://drive.google.com/file/d/1SCQ-gfHella84Ih-Lm07tn_wk3N2YVDr/view',
		},
		{
			text: 'Конкурс творів–есе на тему: «Штучний інтелект: користь чи шкода?»',
			url: 'https://drive.google.com/file/d/1zIx3Ii5cmh4RuKAb6dNQSKjGG8LNH_XC/view',
		},
		{
			text: 'Відкрите заняття з іноземної мови',
			url: 'https://drive.google.com/file/d/1ahkRPyl6ylKF_XiySnBPPirByN8jZyaQ/view',
		},
		{
			text: 'Показове заняття з дисципліни «Зарубіжна література»',
			url: 'https://drive.google.com/file/d/1p8T9BHf95pOK-XQUjrxsgP623T-dHJbN/view',
		},
		{
			text: 'Інтелектуальна гра "Українська мова - наша зброя"',
			url: 'https://drive.google.com/file/d/1vnWbJPtssYzcMoM5VfU3cx694T0cb3aM/view',
		},
		{
			text: 'Екскурсії для першокурсників у музейній кімнаті коледжу',
			url: 'https://drive.google.com/file/d/1BSoFigxJRD063onXwb5x_42A8TJO_8FG/view',
		},
		{
			text: 'Екскурсія "Історія нашого міста"',
			url: 'https://drive.google.com/file/d/1uvQ2z6PQe8_sPiex7y_NCHl4rOnSDzsG/view',
		},
		{
			text: 'Відкрите заняття з іноземної мови',
			url: 'https://drive.google.com/file/d/1qooeSyC5eod-5p4_40IQdxLvWMFVVbJE/view',
		},
		{
			text: 'Флешмоб "Прикрась життя українською"',
			url: 'https://drive.google.com/file/d/1o_T32dITT-SDRDHJPFNg67_Y0Ttle0PF/view',
		},
	];

	const Philologicalandhumanitarian = (
		<div>
			<Title text='Циклова комісія філологічних та гуманітарних дисциплін' />
			<hr className='hr-style' />
			<p>
				Методична проблема, над якою працює Циклова комісія в 2023-2024 н.р. –
				впровадження компетентнісного підходу в освітній процес підготовки за
				освітньо-професійним ступенем "фаховий молодший бакалавр" відповідно до
				вимог стандартів фахової передвищої освіти.
			</p>
			<br />
			<p>
				Викладачі циклової комісії філологічних дисциплін здійснюють підготовку
				майбутніх спеціалістів з таких дисциплін:
			</p>
			<li>українська мова;</li>
			<li>українська література;</li>
			<li>зарубіжна література;</li>
			<li>іноземна мова;</li>
			<li>українська мова за професійним спрямуванням;</li>
			<li>іноземна мова за професійним спрямуванням;</li>
			<li>географія;</li>
			<li>всесвітня історія;</li>
			<li>історія України;</li>
			<li>культурологія.</li>
			<br />

			<Title text='Наші події' />
			<DropUpMenu links={list} name={'2023-2024 н.р.'} />
			<div> </div>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Циклова комісія філологічних та гуманітарних дисциплін - ЧПФК'>
			<Block content={Philologicalandhumanitarian} />
		</Page>
	);
};
