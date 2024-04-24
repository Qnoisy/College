import { Route, Routes } from 'react-router-dom';
import '../common/generall.scss';
import '../common/reset.scss';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Publichne } from './Publichne';
const Wrapper = () => {
	return (
		<div className='wrapper'>
			<div className='header'>
				<Container>
					<Header />
				</Container>
			</div>
			<div className='main'>
				<Container>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/publichne-obhovorennia' element={<Publichne />} />
					</Routes>
				</Container>
			</div>
			<div className='footer'>
				<Container>
					<Footer />
				</Container>
			</div>
		</div>
	);
};
export default Wrapper;
