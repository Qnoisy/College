import styles from './MapComponent.module.scss'
const MapComponent = () => {
	return (
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1542.6809340190157!2d32.053784768446555!3d49.43783828494974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b7d896dc7fb%3A0x806ebc3140621696!2z0KfQtdGA0LrQsNGB0YzQutC40Lkg0L_QvtC70ZbRgtC10YXQvdGW0YfQvdC40Lkg0YTQsNGF0L7QstC40Lkg0LrQvtC70LXQtNC2!5e0!3m2!1suk!2sus!4v1717084827828!5m2!1suk!2sus'
			className={styles.mapComponent}
			loading='lazy'
		></iframe>
	);
};

export default MapComponent;