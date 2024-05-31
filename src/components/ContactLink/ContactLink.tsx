import classNames from 'classnames';
import React from 'react';
import { IconType } from 'react-icons'; // Updated import path
import styles from './ContactLink.module.scss';

interface ContactLinkProps {
	url: string;
	icon?: IconType; // icon is optional
	text: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ url, icon: Icon, text }) => {
	return (
		<a href={url} className={classNames(styles.header__link, 'row')}>
			{Icon && <Icon className={styles.header__icon} />}
			<span>{text}</span>
		</a>
	);
};

export default ContactLink;
