import { PiListChecksLight } from 'react-icons/pi';
import Page from '../../../Page/Page';
import { Button } from '../../../components/Button';
import Block from '../../../components/sample/Block/Block';
import Subtitle from '../../../components/sample/Subtitle/Subtitle';
import Title from '../../../components/sample/Title/Title';
import styles from './Schedule.module.scss';

export const Schedule = () => {
	const handleClick = () => {
		window.open(
			'https://drive.google.com/drive/folders/1A1agQ-_fHK8XaVhjVit8FE3QtFnFHm4A?usp=drive_link',
			'_blank'
		);
	};

	const accreditationContent = (
		<div>
			<Title text='Розклад дзвінків' />
			<div className={styles.schedule__block}>
				<img
					src='./img/rozklad/Розклад.png'
					alt='Расписание'
					className={styles.schedule__img}
				/>
				<Subtitle text='Зміни в розкладі' />
				<Button onClick={handleClick} className={styles.schedule__btn}>
					<PiListChecksLight className={styles.schedule__btn_content} />
					Завантажити розклад
				</Button>
			</div>
		</div>
	);

	return (
		<Page title='Розклад - ЧПФК'>
			<Block content={accreditationContent} />
		</Page>
	);
};
