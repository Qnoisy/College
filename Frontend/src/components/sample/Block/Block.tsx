import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Block.module.scss';

interface Route {
	name: string;
	path: string;
	icon?: JSX.Element;
}

interface BlockProps {
	routes?: Route[];
	content?: React.ReactNode;
	additionalLinks?: Route[];
}

const Block: React.FC<BlockProps> = ({
	routes = [],
	content = null,
	additionalLinks = [],
}) => {
	return (
		<div className={classNames(styles['block'])}>
			<div className={classNames(styles['block__main-content'])}>
				{content && (
					<div className={classNames(styles['block__text-content'])}>
						{content}
					</div>
				)}
			</div>
			{additionalLinks.length > 0 && (
				<div className={classNames(styles['block__links'])}>
					{additionalLinks.map(link => (
						<Link
							key={link.path}
							to={link.path}
							className={classNames(styles['block__link'])}
						>
							<div className={classNames(styles['block__link-text'])}>
								{link.icon && (
									<span className={classNames(styles['block__icon'])}>
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
	);
};

export default Block;
