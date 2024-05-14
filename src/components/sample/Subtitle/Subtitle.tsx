import React from 'react';
import styles from './Subtitle.module.scss';

interface SubtitleProps {
	text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
	return <h3 className={styles.subTitle}>{text}</h3>;
};

export default Subtitle;
