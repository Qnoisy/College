import classNames from 'classnames';
import { Button } from '../../Button';
import styles from './AboutCollege.module.scss';

// interface AboutCollegeProps {}

export const AboutCollege = () => {
	return (
		<div className={classNames(styles.aboutCollege, 'row')}>
			<img className={styles.aboutCollege__img} src='img/chpt.jpg' alt='' />
			<div className={styles.aboutCollege__content}>
				<h1 className={styles.aboutCollege__title}>Про коледж</h1>
				<h2 className={styles.aboutCollege__h2}>
					Черкаський політехнічний фаховий коледж
					<p>Надаємо якісні освітні послуги з 1922р</p>
				</h2>
				<div className={styles.aboutCollege__text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id quas
					doloremque quod repellat expedita delectus, aliquid quos a velit
					perspiciatis reprehenderit inventore fuga doloribus labore cumque,
					aspernatur deleniti magnam et assumenda! Iste, voluptatum dolore magni
					dolorum vero facere quasi perspiciatis illum explicabo aperiam omnis
					quos quae iusto hic vitae sit. Provident hic rem, autem praesentium
					nesciunt molestiae architecto atque! Doloremque nihil adipisci odio
					earum dolore. Assumenda ipsam eligendi corporis dignissimos eveniet
					quia, ut officiis nesciunt ab iste harum ipsa mollitia corrupti
					laboriosam doloremque odit deleniti quidem, repellendus, ratione
					nostrum neque animi iure? Voluptatibus fugiat ullam, dignissimos error
					sequi perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Ullam id quas doloremque quod repellat expedita delectus,
					aliquid quos a velit perspiciatis reprehenderit inventore fuga
					doloribus labore cumque, aspernatur deleniti magnam et assumenda!
					Iste, voluptatum dolore magni dolorum vero facere quasi perspiciatis
					illum explicabo aperiam omnis quos quae iusto hic vitae sit. Provident
					hic rem, autem praesentium nesciunt molestiae architecto atque!
					Doloremque nihil adipisci odio earum dolore. Assumenda ipsam eligendi
					corporis dignissimos eveniet quia, ut officiis nesciunt ab iste harum
					ipsa mollitia corrupti laboriosam doloremque odit deleniti quidem,
					repellendus, ratione nostrum neque animi iure? Voluptatibus fugiat
					ullam, dignissimos error sequi perspiciatis?
				</div>
				<div className={styles.aboutCollege__btn}>
					<Button>Детальніше</Button>
				</div>
			</div>
		</div>
	);
};
