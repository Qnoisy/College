import { GrYoutube } from 'react-icons/gr';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';
import styles from './Footer.module.scss';

// interface FooterProps {}

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<ul className={styles.footer__list}>
				<li className={styles.footer__item}>
					<a
						href='https://www.youtube.com/@user-mv2ji9fj9o'
						target='_blank'
						rel='noopener noreferrer'
					>
						<GrYoutube className={styles.footer__icon} />
					</a>
				</li>
				<li className={styles.footer__item}>
					<a
						href='https://www.facebook.com/chpt.edu.ua'
						target='_blank'
						rel='noopener noreferrer'
					>
						<IoLogoFacebook className={styles.footer__icon} />
					</a>
				</li>
				<li className={styles.footer__item}>
					<a
						href='https://www.instagram.com/chpt.edu.ua/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<IoLogoInstagram className={styles.footer__icon} />
					</a>
				</li>
			</ul>
		</div>
	);
};
