import { GrBook, GrCertificate, GrCli, GrCluster } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { BigMenuRoutes } from '../../../data/data';
import { IsubRoutes } from '../../../types/CommonInterface';
import styles from './BigMenu.module.scss';
// interface BigMenuProps {}

export const BigMenu = () => {
	const BigMenuReactIcons = [
		<GrCertificate className={styles.bigMenu__icon} />,
		<GrCluster className={styles.bigMenu__icon} />,
		<GrBook className={styles.bigMenu__icon} />,
		<GrCli className={styles.bigMenu__icon} />,
	];
	const links = BigMenuRoutes.map((item: IsubRoutes, index: number) => {
		return (
			<Link to={item.link}>
				<li className={styles.bigMenu__item}>
					{BigMenuReactIcons[index]}
					<p>{item.name}</p>
				</li>
			</Link>
		);
	});
	return <ul className={styles.bigMenu}>{links}</ul>;
};
