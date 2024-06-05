import classNames from 'classnames';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeButton.module.scss';
interface ThemeButtonProps {
	className?: string;
}

export const ThemeButton = ({ className }: ThemeButtonProps) => {
	const { theme, setTheme } = useTheme();
	const handleClickTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	return (
		<button onClick={handleClickTheme} className={styles.theme}>
			{theme === 'light' ? (
				<span className={classNames(styles.theme__btn, className)}>
					<MdOutlineLightMode />
				</span>
			) : (
				<span className={classNames(styles.theme__btn, className)}>
					<MdLightMode />
				</span>
			)}
		</button>
	);
};
