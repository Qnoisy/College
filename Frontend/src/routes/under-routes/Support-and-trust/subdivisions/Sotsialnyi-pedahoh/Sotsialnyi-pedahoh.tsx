import Page from '../../../../../Page/Page'
import DropUpMenu from '../../../../../components/DropUpMenu/DropUpMenu'
import Block from '../../../../../components/sample/Block/Block'
import Title from '../../../../../components/sample/Title/Title'

export const Sotsialnyipedahoh = () => {
	const list = [
		{
			text: 'ПЛАН РОБОТИ СОЦІАЛЬНОГО ПЕДАГОГА ЧЕРКАСЬКОГО ПОЛІТЕХНІЧНОГО ФАХОВОГО КОЛЕДЖУ НА 2023-2024 н.р.',
			url: 'https://drive.google.com/file/d/1XNBM46u1Sa2m0QXOYFugXi6Z9t8rM3Br/view',
		},
	]
	const sotsialnyipedahohContent = (
		<div>
  <Title text='Соціальний педагог' />
  <hr className='hr-style' />
  <p>Ви можете скористатися послугами соціального педагога коледжу:</p>
  <p>• Якщо вам необхідно отримати соціальну підтримку чи захист ваших прав, врегулювати питання отримання соціальних пільг;</p>
  <p>• Якщо ви зазнаєте чи є свідком насильства чи булінгу в родині чи в закладі освіти, і бажаєте захистити себе чи однолітків;</p>
  <p>• Якщо ви бажаєте долучитись до благодійних справ чи волонтерства</p>
  <p>Соціальний педагог коледжу: Лелека Ірина Петрівна - 096-699-02-51</p>
  <hr className='hr-style' />
	<DropUpMenu links={list} name={'2023-2024'} />
</div>

	);

	return (
		<Page title='Соціальний педагог - ЧПФК'>
			<Block content={sotsialnyipedahohContent} />
		</Page>
	);
};
