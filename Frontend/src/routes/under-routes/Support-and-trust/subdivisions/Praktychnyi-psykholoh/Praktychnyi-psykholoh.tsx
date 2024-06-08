import Page from '../../../../../Page/Page'
import DropUpMenu from '../../../../../components/DropUpMenu/DropUpMenu'
import Block from '../../../../../components/sample/Block/Block'
import Title from '../../../../../components/sample/Title/Title'

export const Praktychnyipsykholoh = () => {
	const list = [
		{
			text: 'ПЛАН РОБОТИ ПРАКТИЧНОГО ПСИХОЛОГА ЧЕРКАСЬКОГО ПОЛІТЕХНІЧНОГО ФАХОВОГО КОЛЕДЖУ НА 2023-2024 н.р.',
			url: 'https://drive.google.com/file/d/1XNBM46u1Sa2m0QXOYFugXi6Z9t8rM3Br/view',
		},
	]
	const practychnyipsykhologContent = (
		<div>
  <Title text='Практичний психолог' />
  <hr className='hr-style' />
  <p>Ви можете скористатися послугами практичного психолога коледжу:</p>
  <p>• Якщо вас турбують питання покращення настрою, відновлення емоційної рівноваги, ви хочете розібратися в собі, визначитися у прийнятті важливого для вас рішення; коли ви емоційно страждаєте від наслідків травмівних життєвих подій;</p>
  <p>• Якщо ви зіткнулися з труднощами у навчанні: побоюєтеся виступати перед великою аудиторією, не можете мотивувати чи організувати себе для навчання, вам складно порозумітися з викладачами, адаптуватися у новому колективі;</p>
  <p>• Якщо у вас є непорозуміння з батьками, вам важко знайти спільну мову з друзями чи просто необхідно виговоритися.</p>
  <p>Психолог коледжу: Добровольська Анжеліка Анатоліївна - 063-497-11-63</p>
  <hr className='hr-style' />
	<DropUpMenu links={list} name={'2023-2024'} />
</div>

	);

	return (
		<Page title='Практичний психолог - ЧПФК'>
			<Block content={practychnyipsykhologContent} />
		</Page>
	);
};
