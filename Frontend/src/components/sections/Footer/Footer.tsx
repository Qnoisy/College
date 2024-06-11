import { AiOutlinePhone } from 'react-icons/ai';
import { GrYoutube } from 'react-icons/gr';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { BigMenuRoutes, headerRoutes } from '../../../data/data';
import { IsubRoutes } from '../../../types/CommonInterface';
import ContactLink from '../../ContactLink/ContactLink';
import { Logo } from '../../Logo';
import styles from './Footer.module.scss';
// interface FooterProps {}

export const Footer = () => {
	const mergeItems = BigMenuRoutes.concat(headerRoutes);
	const mapItems = mergeItems.map((route: IsubRoutes, index: number) => {
		return (
			<Link to={route.link} key={index}>
				<li className={styles.footer__map_li}>{route.name}</li>
			</Link>
		);
	});
	return (
		<div className={styles.footer}>
			<div className={styles.footer__block}>
				<Logo customStyle={styles.footer__img} />
				<div className={styles.footer__block_link}>
					<ContactLink
						url='https://bit.ly/4c0kssT'
						text='Адреса: 18001, м. Черкаси, вул. Надпільна, 226'
					/>
					<p>
						Єдиним офіційним сайтом Черкаський політехнічний фіховий коледж
						(ЧПФК)
						<a href='/'>polytechnic.ck.ua</a>
					</p>
				</div>
			</div>
			<div className={styles.footer__block}>
				<div className={styles.footer__block_title}>
					Карта сайту
					<hr className='hr-style' />
				</div>
				<ul className={styles.footer__map}>{mapItems}</ul>
			</div>
			<div className={styles.footer__block}>
				<div className={styles.footer__block_title}>
					Зв’язатися з нами
					<hr className='hr-style' />
				</div>
				<div>
					<div className={styles.footer__block_phones}>
						<ContactLink
							url='tel:+380988307608'
							icon={AiOutlinePhone}
							text='+38(098)8307608'
						/>
						<ContactLink
							url='tel:+380634584192'
							icon={AiOutlinePhone}
							text='+38(063)4584192'
						/>
					</div>
					<span className={styles.footer__block_text}>Приймальна комісія</span>
				</div>
				<div>
					<div className={styles.footer__block_phones}>
						<ContactLink
							url='tel:+380472360729'
							icon={AiOutlinePhone}
							text='38(047)2360729'
						/>
						<ContactLink
							url='tel:+380472360725'
							icon={AiOutlinePhone}
							text='38(047)2360725'
						/>
					</div>
					<span className={styles.footer__block_text}>
						Контактні телефони коледжу
					</span>
				</div>
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
		</div>
	);
};
