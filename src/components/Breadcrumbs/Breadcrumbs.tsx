import { Link, useLocation } from 'react-router-dom';

import { allRoutes } from '../../data/data';
import styles from './Breadcrumbs.module.scss'; // Стилі для компонента

const Breadcrumbs = () => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter(x => x);

	if (pathnames.length === 0) {
		return null; // Не рендеримо компонент для головної сторінки
	}

	const breadcrumbLinks = pathnames.map((value, index) => {
		const routePath = `/${pathnames.slice(0, index + 1).join('/')}`;
		const route = allRoutes.find(r => r.link === routePath);
		const name = route ? route.name : decodeURIComponent(value);
		const isLast = index === pathnames.length - 1;
		return { name, routePath, isLast };
	});

	return (
		<div className={styles.breadcrumbs}>
			<div className={styles.breadcrumbs__container}>
				<Link to='/'>Головна</Link> {/* Стартовий пункт шляху */}
				{breadcrumbLinks.map(({ name, routePath, isLast }) =>
					isLast ? (
						<span key={routePath}>
							{' > '}
							{name}
						</span>
					) : (
						<span key={routePath}>
							{' > '}
							<Link to={routePath}>{name}</Link>
						</span>
					)
				)}
			</div>
		</div>
	);
};

export default Breadcrumbs;
