import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DemoBlock.module.scss';

interface Route {
	name: string;
	path: string;
	icon?: JSX.Element;
}

interface DemoBlockProps {
	routes?: Route[]; // Routes тепер можуть бути не передані
	content?: React.ReactNode; // Content тепер може бути не переданий
	additionalLinks?: Route[];
}

const DemoBlock: React.FC<DemoBlockProps> = ({
	routes = [],
	content = null,
	additionalLinks = [],
}) => {
	return (
		<div className={classNames(styles['demo-block'])}>
			<div className={classNames(styles['demo-block__main-content'])}>
				{content && (
					<div className={classNames(styles['demo-block__text-content'])}>
						<div className={styles['demo-block__text-content-text']}>
							{content}
						</div>
						{additionalLinks.length > 0 && (
							<div className={classNames(styles['demo-block__links'])}>
								{additionalLinks.map(link => (
									<Link
										key={link.path}
										to={link.path}
										className={classNames(styles['demo-block__link'])}
									>
										<div
											className={classNames(styles['demo-block__link-text'])}
										>
											{link.icon && (
												<span
													className={classNames(styles['demo-block__icon'])}
												>
													{link.icon}
												</span>
											)}
											{link.name}
										</div>
									</Link>
								))}
							</div>
						)}
					</div>
				)}

				<div className={classNames(styles['demo-block__navigation'])}>
					<div className={styles['demo-block__title']}>Підрозділи</div>
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
		</div>
	);
};

export default DemoBlock;
