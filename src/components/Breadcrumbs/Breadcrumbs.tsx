import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss'; // Стилі для компонента

const Breadcrumbs = () => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter(x => x);

	if (pathnames.length === 0) {
		return null; // Не рендеримо компонент для головної сторінки
	}

	return (
		<div className={styles.breadcrumbs}>
			<Link to='/'>Головна</Link> {/* Стартовий пункт шляху */}
			{pathnames.map((value, index) => {
				const last = index === pathnames.length - 1;
				const to = `/${pathnames.slice(0, index + 1).join('/')}`;

				return last ? (
					<span key={to}>
						{' > '} {decodeURIComponent(value)}
					</span> // Останній елемент як текст
				) : (
					<span key={to}>
						{' > '} <Link to={to}>{decodeURIComponent(value)}</Link>
					</span> // Проміжні елементи як посилання
				);
			})}
		</div>
	);
};

export default Breadcrumbs;
