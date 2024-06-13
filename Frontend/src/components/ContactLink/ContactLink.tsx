import classNames from 'classnames';
import React from 'react';
import { IconType } from 'react-icons'; // Updated import path
import styles from './ContactLink.module.scss';

interface ContactLinkProps {
	url: string;
	icon?: IconType; // icon is optional
	text: string;
	className?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({
	url,
	icon: Icon,
	text,
	className,
}) => {
	return (
		<a
			href={url}
			target={'_blank'}
			rel='noreferrer'
			className={classNames(styles.header__link, className, 'row')}
		>
			{Icon && <Icon className={styles.header__icon} />}
			<span>{text}</span>
		</a>
	);
};

export default ContactLink;
