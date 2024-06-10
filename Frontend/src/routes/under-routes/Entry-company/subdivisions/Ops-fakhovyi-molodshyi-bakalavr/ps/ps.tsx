import Page from '../../../../../../Page/Page'
import Block from '../../../../../../components/sample/Block/Block'
import Title from '../../../../../../components/sample/Title/Title'


export const PS = () => {

	const psContent = (
		<div>
    <Title text='Розробка програмного забезпечення' />
        <hr className='hr-style' />
        <br />
        <p>Код та найменування спеціальності: 121 Інженерія програмного забезпечення.​</p>
        <br />
        <p>Шифр та галузь знань: 12 Інформаційні технології.</p>
        <br />
        <p>Кваліфікація: технік-програміст.</p>
        <br />
        <p>Термін навчання:</p>
        <br />
        <li>на основі базової загальної середньої освіти - 3 роки 10 місяців;</li>
        <li>на основі повної загальної середньої освіти - 2 роки 10 місяців.</li>
        <br />
        <p>Ліцензований обсяг прийому: 30 осіб денна форма навчання.</p>
        <br />
        <p>Підготовка за спеціалізацією проводиться з 2001 року.</p>
        <p>Майбутні програмісти опановують мови програмування, сучасні системи автоматизованої обробки інформації, технологію розробки програмного забезпечення, технологію комп’ютерних мереж, комп’ютерну графіку.</p>
        <br />
        <Title text='Провідні дисципліни фахової підготовки спеціалізації «Розробка програмного забезпечення»:' />
        <li>Основи програмування та алгоритмічні мови;</li>
        <li>Основи програмної інженерії;</li>
        <li>Інструментальні програмні засоби;</li>
        <li>Об’єктно-орієнтоване програмування;</li>
        <li>Бази даних;</li>
        <li>Алгоритми і структури даних;</li>
        <li>Операційні системи;</li>
        <li>Інструментальні засоби візуального програмування;</li>
        <li>Конструювання програмного забезпечення;</li>
        <li>Web – програмування.</li><br />
        <p>Отримані знання та практичні навички дозволяють нашим випускникам:</p>
        <li>вирішувати проектно-технологічні та виробничо-організаційні завдання,</li>
        <li>виконувати постановку задач для розробки програм;</li>
        <li>визначати обсяги інформації, її структуру і схеми вводу, методи контролю, порядок обробки і збереження;</li>
        <li>здійснювати вибір мови програмування, засобів програмування, технічних засобів,</li>
        <li>розробляти програми; впроваджувати та супроводжувати їх;</li>
        <li>визначати можливість використання готових програмних засобів; проводити внесення змін в розроблені програми;</li>
        <li>надавати методичну та практичну допомогу працівникам, які експлуатують обчислювальну техніку.</li>
        <p>Можливості працевлаштування: на посадах програміста, системного адміністратора, техніка ІТ - підрозділу підприємств та організацій різних форм власності.</p><br />
        <p>Випускники спеціалізації коледжу продовжують навчання за скороченим терміном в Київському національному університеті ім. Т. Г. Шевченка, Черкаському державному технологічному університеті, Черкаському національному університеті ім. Б. Хмельницького.</p>
        <hr className='hr-style' />
    </div>
	);

	return (
		<Page title='Розробка програмного забезпечення - ЧПФК'>
			<Block
				content={psContent}
			/>
		</Page>
	);
};