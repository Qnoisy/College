import classNames from 'classnames';
import React from 'react';
import styles from './Subtitle.module.scss';

interface SubtitleProps {
	text: string;
	className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
	return (
		<div className={classNames(styles.subTitle, styles.className)}>{text}</div>
	);
};

export default Subtitle;
