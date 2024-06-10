import Page from '../../../../../../Page/Page'
import Block from '../../../../../../components/sample/Block/Block'
import Title from '../../../../../../components/sample/Title/Title'


export const EK = () => {

	const ekContent = (
		<div>
  <Title text='Економіка підприємства' />
		<hr className='hr-style' />
		<br />
		<p>Код та найменування спеціальності: 051 Економіка</p>
		<br />
		<p>Шифр галузь знань: 05 Соціальні та поведінкові науки</p>
		<br />
		<p>Кваліфікація: економіст</p>
		<br />
		<p>Термін навчання:</p>
		<br />
		<li>на основі базової загальної середньої освіти - 2 роки 10 місяців;</li>
		<li>на основі повної загальної середньої освіти - 1 рік 10 місяців.</li>
		<br />
		<p>Ліцензований обсяг прийому: 30 осіб денна форма навчання</p>
		<br />
		<p>Підготовка за спеціалізацією проводиться з 1996 року.</p>
		<p>
				Майбутні економісти опановують сучасні принципи і методи ринково-економічної, організаційно-управлінської, фінансово-інвестиційної, бухгалтерсько-облікової та інших видів діяльності підприємства.
		</p>
		<br />
		<Title text='Провідні дисципліни фахової підготовки Спеціалізації «Економіка підприємства»:' />
		<li>Планування та організація діяльності підприємства</li>
		<li>Фінансовий облік</li>
		<li>Інформаційні системи і технології на підприємствах</li>
		<li>Економіка і нормування праці</li>
		<li>Управління витратами</li>
		<li>Податкова система</li>
		<li>Економічний аналіз</li>
		<li>Менеджмент</li>
		<li>Основи маркетингу</li>
		<br />
		<p>
				Отримані знання та практичні навички дозволяють нашим випускникам:
		</p>
				<li>обґрунтовувати стратегічні напрями розвитку підприємства, бізнес-проекти;</li>
				<li>прогнозувати та планувати соціально-економічну діяльність підприємства з наступним комплексним аналізом;</li>
				<li>розробляти нормативну базу, складати кошториси витрат, калькуляції собівартості, визначати ціни на продукцію та тарифи на послуги;</li>
				<li>вести фінансовий, бухгалтерський, статистичний облік;</li>
				<li>володіти питаннями права, фінансово-економічної, грошово-кредитної, інвестиційної, зовнішньоекономічної діяльності;</li>
				<li>використовувати інформаційні технології в економічній діяльності підприємства, в тому числі і комп’ютерну програму «1С: Підприємство»</li>
				<li>вільно володіти персональним комп’ютером.</li>
		<p>
				Можливості працевлаштування: на посадах економіста, бухгалтера, касира, диспетчера, контролера, спеціаліста страхових, аудиторських та банківських установ.
		</p><br />
		<p>
				Випускники спеціалізації коледжу продовжують навчання за скороченим терміном в Київському національному університеті ім. Т. Шевченка, Київському національному економічному університеті ім. Вадима Гетьмана, Національному аерокосмічному університеті ім. М. Є. Жуковського «Харківський авіаційний інститут», Черкаському державному технологічному університеті, Черкаському національному університеті ім. Б. Хмельницького.
		</p>
    <hr className='hr-style' />
</div>
	);

	return (
		<Page title='Економіка підприємства - ЧПФК'>
			<Block
				content={ekContent}
			/>
		</Page>
	);
};