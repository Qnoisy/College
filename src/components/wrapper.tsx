import { Route, Routes } from 'react-router-dom';
import '../common/generall.scss';
import '../common/reset.scss';
import { Accreditation } from '../routes/Accreditation';
import { Login } from '../routes/Login';
import { Publichne } from '../routes/Publichne';
import { Rozklad } from '../routes/Rozklad';
import { Unit } from '../routes/Unit';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
const Wrapper = () => {
	return (
<<<<<<< HEAD
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
						<Route path='/acredetation-op' element={<Accreditation />} />
						<Route path='/pidrozdily' element={<Unit />} />
						<Route path='/rozklad' element={<Rozklad />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</Container>
			</div>
			<div className='footer'>
				<Container>
					<Footer />
				</Container>
			</div>
		</div>
=======
		<div>!!!!!! BLack neger its max !!!!!!</div>
>>>>>>> Tolik
	);
};
export default Wrapper;
