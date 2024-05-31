import styles from './Advantages.module.scss';

// interface AdvantagesProps {}

export const Advantages = () => {
	return (
		<div className={styles.advantages}>
			<div className={styles.advantages__title}>
				<h2>Переваги коледжу</h2>
				<hr className={'hr-style'} />
			</div>
			<ul className={styles.advantages__list}>
				<li className={styles.advantages__li}>
					<div className={styles.advantages__li_img}></div>
					<div className={styles.advantages__li_text}>
						Визнання дипломів у більшості країн світу
					</div>
				</li>
				<li className={styles.advantages__li}>
					<div className={styles.advantages__li_img}></div>
					<div className={styles.advantages__li_text}>
						200+ років високої якості освіти
					</div>
				</li>
				<li className={styles.advantages__li}>
					<div className={styles.advantages__li_img}></div>
					<div className={styles.advantages__li_text}>
						Викладання на сучасному рівні
					</div>
				</li>
				<li className={styles.advantages__li}>
					<div className={styles.advantages__li_img}></div>
					<div className={styles.advantages__li_text}>
						Потужний науково- професійний склад
					</div>
				</li>
				<li className={styles.advantages__li}>
					<div className={styles.advantages__li_img}></div>
					<div className={styles.advantages__li_text}>
						8000+ студентів, з яких 4000+ іноземних громадян із 70+ країн світу
					</div>
				</li>
				<li className={styles.advantages__li}>
					<div className={styles.advantages__li_img}></div>
					<div className={styles.advantages__li_text}>
						Участь у наукових проєктах та програмах
					</div>
				</li>
			</ul>
		</div>
	);
};
