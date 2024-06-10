import Page from '../../../../../Page/Page';
import DemoBlock from '../../../../../components/sample/DemoBlock/DemoBlock';
import Title from '../../../../../components/sample/Title/Title';
import UnorderedList from '../../../../../components/sample/UnorderedList/UnorderedList';

export const Starshoklasnykam = () => {
	const StarshoklasnykamRoutes = [
		{
			name: 'Вибери професію',
			path: '/entry-company/starshoklasnykam/choose-profesion',
		},
	];
	const starshoklasnykamContent = (
		<div>
			<Title text='Старшокласникам' />
			<hr className='hr-style' />
			<h1>Плюси переходу в КОЛЕДЖ замість «просиджування штанів» в школі:</h1>
			<UnorderedList
				items={[
					'Виявляється, можна прожити без батьківських зборів, вирішуючи всі питання, коли вони виникають у батьків, і в час, зручний для батьків.',
					'Виявляється, прибирають в коледжі ті, хто за це отримує зарплату, а не діти, «заохочені» прикладом невідомих японських дітей.',
					'Виявляється, що якщо про форму не згадувати – діти голими не ходять.',
					'Виявляється, що програму навчання можна побудувати таким чином, щоб все робити на парах, а вдома лише зрідка витрачати час на завдання в рамках пів години-година.',
					'Виявляється, що підручники, звичайно, формально існують, але якщо педагог знає матеріал, любить предмет і не працює за принципом «відкрили підручник та прочитали параграф» – підручники нікому в принципі і не потрібні.',
					'Виявляється, що дитина, яка чітко професійно зорієнтована, може займатись професією з задоволенням.',
					'Виявляється, що відсутність фіксованих класів є певною запорукою проти булінгу, бо немає фіксованих колективів з усіма мінусами.',
					'Виявляється, що класний керівник і куратор курсу – це різні речі. І виявляється, що кураторства достатньо для керування процесом, але без одягання маски «гуру» та «беззаперечного авторитета».',
					'Виявляється, що цілком можна обійтись без лінійок та такого подібного, а замінити все це гарним концертом.',
					'Виявляється, що цілком можна жити, не збираючи на штори, фарбу та шпалери, бо це проблема навчального закладу, до якої батьки і діти жодного стосунку не мають.',
					'Виявляється, що чим дорослішими і конкретнішими є задачі, які ставлять перед дітьми, – тим відповідальнішими вони стають.',
					'Ми вже ідемо до професії, а ті, хто залишився, лише думають, чи йти до дороги, яка веде до професії.',
				]}
			/>
			<hr className='hr-style' />
		</div>
	);

	return (
		<Page title='Старшокласникам - ЧПФК'>
			<DemoBlock
				content={starshoklasnykamContent}
				routes={StarshoklasnykamRoutes}
			/>
		</Page>
	);
};