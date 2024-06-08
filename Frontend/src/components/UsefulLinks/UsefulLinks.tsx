import { usefulLinks } from '../../data/data';
import { NewsSlider } from '../NewsSlider';

export const UsefulLinks = () => {
	return (
		<NewsSlider newsItems={usefulLinks} target={true} objectFit='contain' />
	);
};
