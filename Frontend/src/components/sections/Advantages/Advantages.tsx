import classNames from 'classnames';
import { DiModernizr } from 'react-icons/di';
import { FaChalkboardTeacher, FaHistory } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';
import { GiDiploma, GiMaterialsScience } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Container } from '../../Container';
import styles from './Advantages.module.scss';
// interface AdvantagesProps {}

export const Advantages = () => {
	return (
		<div className={styles.advantages}>
			<div className={styles.advantages__wrapper}>
				<Container section>
					<div className={styles.advantages__title}>
						<h2>Переваги коледжу</h2>
						<hr className={'hr-style'} />
					</div>
					<ul className={styles.advantages__list}>
						<li className={styles.advantages__li}>
							<div className={styles.advantages__li_img}>
								<GiDiploma />
							</div>
							<div className={styles.advantages__li_text}>
								Визнання дипломів у більшості країн світу
							</div>
						</li>
						<li className={styles.advantages__li}>
							<div className={styles.advantages__li_img}>
								<FaHistory />
							</div>
							<div className={styles.advantages__li_text}>
								200+ років високої якості освіти
							</div>
						</li>
						<li className={styles.advantages__li}>
							<div className={styles.advantages__li_img}>
								<FaChalkboardTeacher />
							</div>
							<div className={styles.advantages__li_text}>
								Викладання на сучасному рівні
							</div>
						</li>
						<li className={styles.advantages__li}>
							<div className={styles.advantages__li_img}>
								<GiMaterialsScience />
							</div>
							<div className={styles.advantages__li_text}>
								Потужний науково - професійний склад
							</div>
						</li>
						<li className={styles.advantages__li}>
							<div className={styles.advantages__li_img}>
								<FaEarthAmericas />
							</div>
							<div className={styles.advantages__li_text}>1000+ студентів</div>
						</li>
						<li className={styles.advantages__li}>
							<div className={styles.advantages__li_img}>
								<DiModernizr />
							</div>
							<div className={styles.advantages__li_text}>
								Участь у наукових проєктах та програмах
							</div>
						</li>
					</ul>
				</Container>
			</div>
			<Container offPadding className={styles.advantages__block_color}>
				<div className={classNames(styles.advantages__block, 'row')}>
					<div className={styles.advantages__block_content}>
						Станьте частиною наукового світу разом з Черкаський політехнічний
						фаховий коледж
					</div>
					<Link to={'/contacts'} className={styles.advantages__block_btn}>
						<div
							className={classNames(styles.advantages__block_btn_text, 'row')}
						>
							<img src='/img/logo.png' alt='' />
							Стати частиною коледжу
						</div>
					</Link>
				</div>
			</Container>
		</div>
	);
};
