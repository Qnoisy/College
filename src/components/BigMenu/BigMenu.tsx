import {
	AiFillBook,
	AiFillCaretLeft,
	AiFillCaretRight,
	AiFillRead,
	AiOutlineAudit,
	AiOutlineBulb,
	AiOutlineCluster,
} from 'react-icons/ai';
import { FiCommand } from 'react-icons/fi';
import {
	GrBook,
	GrCatalog,
	GrCertificate,
	GrCli,
	GrCluster,
	GrFormViewHide,
	GrGroup,
} from 'react-icons/gr';
import { IoLibrary } from 'react-icons/io5';
import { SiAwsorganizations } from 'react-icons/si';
import styles from './BigMenu.module.scss';
// interface BigMenuProps {}

export const BigMenu = () => {
	return (
		<div className={styles.bigMenu}>
			<AiFillBook className={styles.bigMenu__icon} />
			<AiFillCaretLeft className={styles.bigMenu__icon} />
			<AiFillCaretRight className={styles.bigMenu__icon} />
			<AiOutlineCluster className={styles.bigMenu__icon} />
			<AiOutlineBulb className={styles.bigMenu__icon} />
			<AiOutlineAudit className={styles.bigMenu__icon} />
			<AiFillRead className={styles.bigMenu__icon} />
			<FiCommand className={styles.bigMenu__icon} />
			<GrBook className={styles.bigMenu__icon} />
			<GrCatalog className={styles.bigMenu__icon} />
			<GrCertificate className={styles.bigMenu__icon} />
			<GrCli className={styles.bigMenu__icon} />
			<GrCluster className={styles.bigMenu__icon} />
			<GrGroup className={styles.bigMenu__icon} />
			<GrFormViewHide className={styles.bigMenu__icon} />
			<IoLibrary className={styles.bigMenu__icon} />
			<SiAwsorganizations className={styles.bigMenu__icon} />
		</div>
	);
};
