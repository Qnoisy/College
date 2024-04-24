import '../common/generall.scss';
import '../common/reset.scss';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
const Wrapper = () => {
<<<<<<< HEAD
	return <div>!!!!!! BLack neger its max !!!!!!</div>;
=======
	return (
		<div className='wrapper'>
			<div className='header'>
				<Container>
					<Header />
				</Container>
			</div>
			<div className='main'>
				<Container>
					<Main />
				</Container>
			</div>
			<div className='footer'>
				<Container>
					<Footer />
				</Container>
			</div>
		</div>
	);
>>>>>>> main
};
export default Wrapper;
