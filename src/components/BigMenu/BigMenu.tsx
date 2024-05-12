import {
	GrBook,
	GrCatalog,
	GrCertificate,
	GrCli,
	GrCluster,
	GrGroup,
} from 'react-icons/gr';
import { Link } from 'react-router-dom';
import styles from './BigMenu.module.scss';
// interface BigMenuProps {}

export const BigMenu = () => {
	return (
		<ul className={styles.bigMenu}>
			<Link to={'/entry-company'}>
				<li className={styles.bigMenu__item}>
					<GrCertificate className={styles.bigMenu__icon} />
					<p>Вступна компанія</p>
				</li>
			</Link>
			<Link to={'/educational-units'}>
				<li className={styles.bigMenu__item}>
					<GrCluster className={styles.bigMenu__icon} />
					<p>Освітні підрозділи</p>
				</li>
			</Link>
			<Link to={'/research-activities'}>
				<li className={styles.bigMenu__item}>
					<GrBook className={styles.bigMenu__icon} />
					<p>Наукова діяльність</p>
				</li>
			</Link>
			<Link to={'/student-life'}>
				<li className={styles.bigMenu__item}>
					<GrGroup className={styles.bigMenu__icon} />
					<p>Студентське життя</p>
				</li>
			</Link>
			<Link to={'/library'}>
				<li className={styles.bigMenu__item}>
					<GrCatalog className={styles.bigMenu__icon} />
					<p>Бібліотека</p>
				</li>
			</Link>
			<Link to={'/support-and-trust'}>
				<li className={styles.bigMenu__item}>
					<GrCli className={styles.bigMenu__icon} />
					<p>Підтримка та довіра</p>
				</li>
			</Link>
		</ul>
	);
};
