import Page from '../../../../../Page/Page'
import DropUpMenu from '../../../../../components/DropUpMenu/DropUpMenu'
import Block from '../../../../../components/sample/Block/Block'
import Title from '../../../../../components/sample/Title/Title'

export const Sotsialnopsykholohichnapidtrymka = () => {
	const list = [
		{
			text: '1 семестр 2023-2024 н.р.',
			url: 'https://drive.google.com/file/d/13Rd1uAI7yrWV8qoFUZHZJ1zdlN6SXTQb/view',
		},
	]
	const sotsialnopsykholohichnapidtrymkaContent = (
		<div>
		<Title text='Соціально-психологічна підтримка' />
		<hr className='hr-style' />
		<p><strong>СОЦІАЛЬНО-ПСИХОЛОГІЧНА СЛУЖБА</strong></p>
		<p>
				З метою надання комплексної допомоги особам, які у зв’язку з війною постраждали від насильства, зокрема сексуального, на виконання підписаної Рамкової програми співробітництва між Урядом України та ООН щодо запобігання і протидії сексуальному насильству, пов’язаному з конфліктом,
		</p>
		<p>
				інформуємо про надання послуг соціально-психологічної підтримки особам, постраждалим від війни і насильства, пов’язаного зі збройною агресією Російської Федерації на території України («Центри допомоги врятованим»):
		</p>
		<p>
				Отримати безоплатну правову допомогу в умовах воєнного стану онлайн можна за номером 0 800 213 103 (консультації та роз’яснення з правових питань, додаткові відомості про надання безоплатної правової допомоги тощо).
		</p>
		<p>
				Дзвінки зі стаціонарних та мобільних телефонів у межах України безкоштовні; номер для дзвінків з-за кордону: +38 (044) 363 10 41 (вартість дзвінка з-за кордону за тарифами вашого оператора зв’язку);
		</p>
		<p>
				у мобільних застосунках «Безоплатна правова допомога»: <a href="https://bit.ly/3hwwgqR" target="_blank" rel="noopener noreferrer">https://bit.ly/3hwwgqR</a> або «Твоє право»: <a href="https://bit.ly/3iorbkE" target="_blank" rel="noopener noreferrer">https://bit.ly/3iorbkE</a>;
		</p>
		<p>
				у месенджерах Телеграм: <a href="http://legalaid.gov.ua/telegram.html" target="_blank" rel="noopener noreferrer">http://legalaid.gov.ua/telegram.html</a> та Вайбер: <a href="http://legalaid.gov.ua/viber.html" target="_blank" rel="noopener noreferrer">http://legalaid.gov.ua/viber.html</a>;
		</p>
		<p>
				у кабінеті клієнта на сайті системи надання безоплатної правової допомоги: <a href="https://cabinet.legalaid.gov.ua/" target="_blank" rel="noopener noreferrer">https://cabinet.legalaid.gov.ua/</a>;
		</p>
		<p>
				«Правова допомога протидії насильству»: <a href="https://t.me/Non_Violence_Bot" target="_blank" rel="noopener noreferrer">https://t.me/Non_Violence_Bot</a>;
		</p>
		<p>
				Консультації також можна переглянути на довідково-інформаційній платформі «WikiLegalAid», що розміщена за адресою: <a href="https://wiki.legalaid.gov.ua" target="_blank" rel="noopener noreferrer">https://wiki.legalaid.gov.ua</a>
		</p>
		<p>
				Для отримання безоплатної правової допомоги в умовах воєнного стану офлайн необхідно звернутися за адресою: <a href="https://bit.ly/bpd_buro" target="_blank" rel="noopener noreferrer">https://bit.ly/bpd_buro</a>
		</p>
		<p><strong>Куди звертатися у випадках домашнього насильства:</strong></p>
		<p>• до Національної поліції за номером 102 та повідомити про факт насильства;</p>
		<p>• на Урядовий контактний центр 15-47, де цілодобово надаються інформаційні, психологічні та юридичні консультації чоловікам та жінкам, які постраждали від домашнього насильства, насильства за ознакою статі, насильства стосовно дітей, або з питань загрози вчинення такого насильства та психологічної допомоги потерпілим від домашнього насильства жінкам, чоловікам, дітям;</p>
		<p>• до безкоштовного номеру системи безоплатної правової допомоги 0 800-213-103;</p>
		<p>• до національної «гарячої лінії» з питань запобігання домашнього насильства, торгівлею людьми та гендерної дискримінації 0-800-500-335 або 116-123 (короткий номер з мобільного).</p>
		<hr className='hr-style' />
		<DropUpMenu links={list} name={'2023-2024'} />
</div>
	);

	return (
		<Page title='Соціально-психологічна підтримка - ЧПФК'>
			<Block content={sotsialnopsykholohichnapidtrymkaContent} />
		</Page>
	);
};
