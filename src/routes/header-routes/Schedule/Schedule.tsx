import Page from '../../../Page/Page'
import { Button } from '../../../components/Button'
import Block from '../../../components/sample/Block/Block'
import Subtitle from '../../../components/sample/Subtitle/Subtitle'

import styles from './Schedule.module.scss'

export const Schedule = () => {
	const handleClick = () => {
		window.open(
			'https://drive.google.com/drive/folders/1A1agQ-_fHK8XaVhjVit8FE3QtFnFHm4A?usp=drive_link',
			'_blank'
		);
	};

	const accreditationContent = (
		<div>
			<img
				src='./img/rozklad/Rozklad.png'
				alt='Расписание'
				className={styles.schedule__img}
			/>
			<Subtitle text='Зміни в розкладі' />
			<Button onClick={handleClick}> Завантажити розклад</Button>
		</div>
	);

	return (
		<Page title='Розклад - ЧПФК'>
			<Block content={accreditationContent} />
		</Page>
	);
};
