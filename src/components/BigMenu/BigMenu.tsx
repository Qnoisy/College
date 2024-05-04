import {
	GrBook,
	GrCatalog,
	GrCertificate,
	GrCli,
	GrCluster,
	GrGroup,
} from 'react-icons/gr';
import styles from './BigMenu.module.scss';
// interface BigMenuProps {}

export const BigMenu = () => {
	return (
		<ul className={styles.bigMenu}>
			<li className={styles.bigMenu__item}>
				<GrCertificate className={styles.bigMenu__icon} />
				<p>Вступна компанія</p>
			</li>
			<li className={styles.bigMenu__item}>
				<GrCluster className={styles.bigMenu__icon} />
				<p>Освітні підрозділи</p>
			</li>
			<li className={styles.bigMenu__item}>
				<GrBook className={styles.bigMenu__icon} />
				<p>Наукова діяльність</p>
			</li>
			<li className={styles.bigMenu__item}>
				<GrGroup className={styles.bigMenu__icon} />
				<p>Студентське життя</p>
			</li>
			<li className={styles.bigMenu__item}>
				<GrCatalog className={styles.bigMenu__icon} />
				<p>Бібліотека</p>
			</li>
			<li className={styles.bigMenu__item}>
				<GrCli className={styles.bigMenu__icon} />
				<p>Підтримка та довіра</p>
			</li>
		</ul>
	);
};
