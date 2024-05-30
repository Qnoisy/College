import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import Subtitle from '../Subtitle/Subtitle';
import styles from './DemoBlock.module.scss';

interface Route {
	name: string;
	path: string;
	icon?: JSX.Element;
}

interface DemoBlockProps {
	routes: Route[];
	content: React.ReactNode;
	additionalLinks?: Route[];
}

const DemoBlock: React.FC<DemoBlockProps> = ({
	routes,
	content,
	additionalLinks,
}) => {
	return (
		<div className={classNames(styles['demo-block'])}>
			<div className={classNames(styles['demo-block__main-content'])}>
				<div className={classNames(styles['demo-block__text-content'])}>
					{content}
				</div>
				<div className={classNames(styles['demo-block__navigation'])}>
					<Subtitle text='Підрозділи' />
					{routes.map((route, index) => (
						<div key={index}>
							<Link
								to={route.path}
								className={classNames(styles['demo-block__nav-item'])}
							>
								{route.icon && (
									<span className={classNames(styles['demo-block__icon'])}>
										{route.icon}
									</span>
								)}
								{route.name}
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className={classNames(styles['demo-block__links'])}>
				{additionalLinks &&
					additionalLinks.map(link => (
						<Link
							key={link.path} // Moved here from the div inside
							to={link.path}
							className={classNames(styles['demo-block__link'])}
						>
							<div className={classNames(styles['demo-block__link-text'])}>
								{link.icon && (
									<span className={classNames(styles['demo-block__icon'])}>
										{link.icon}
									</span>
								)}
								{link.name}
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default DemoBlock;
