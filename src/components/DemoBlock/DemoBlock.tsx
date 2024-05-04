import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DemoBlock.module.scss';

interface Route {
	name: string;
	path: string;
	icon?: JSX.Element;
}

interface DemoBlockProps {
	routes: Route[];
	content: React.ReactNode;
	additionalLinks: Route[];
}

const DemoBlock: React.FC<DemoBlockProps> = ({
	routes,
	content,
	additionalLinks,
}) => {
	return (
		<div className={styles['demo-block']}>
			<div className={styles['demo-block__main-content']}>
				<div className={styles['demo-block__text-content']}>{content}</div>
				<div className={styles['demo-block__navigation']}>
					{routes.map((route, index) => (
						<div key={index}>
							<Link to={route.path} className={styles['demo-block__nav-item']}>
								{route.icon && (
									<span className={styles['demo-block__icon']}>
										{route.icon}
									</span>
								)}
								{route.name}
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className={styles['demo-block__links']}>
				{additionalLinks.map((link, index) => (
					<div key={index} className={styles['demo-block__link']}>
						<Link to={link.path} className={styles['demo-block__link-text']}>
							{link.icon && (
								<span className={styles['demo-block__icon']}>{link.icon}</span>
							)}
							{link.name}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default DemoBlock;
