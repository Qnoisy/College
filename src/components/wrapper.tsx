import { Route, Routes } from 'react-router-dom';
import '../common/generall.scss';
import '../common/reset.scss';
import { Accreditation } from '../routes/header-routes/Accreditation';
import { Login } from '../routes/header-routes/Login';
import { Publichne } from '../routes/header-routes/Publichne';
import { Rozklad } from '../routes/header-routes/Rozklad';
import { Unit } from '../routes/header-routes/Unit';
import { College } from '../routes/subMenu-routes/College';
import { Cooperation } from '../routes/subMenu-routes/Cooperation';
import { News } from '../routes/subMenu-routes/News';
import { Quality } from '../routes/subMenu-routes/Quality';
import { Contacts } from '../routes/subMenu-routes/Сontacts';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { SubMenu } from './SubMenu';

const Wrapper = () => {
	return (
		<div className='wrapper'>
			<div className='header'>
				<Container>
					<Header />
				</Container>
			</div>
			<Container>
				<SubMenu />
			</Container>
			<div className='main'>
				<Container>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/publichne-obhovorennia' element={<Publichne />} />
						<Route path='/acredetation-op' element={<Accreditation />} />
						<Route path='/pidrozdily' element={<Unit />} />
						<Route path='/rozklad' element={<Rozklad />} />
						<Route path='/login' element={<Login />} />
						<Route path='/news' element={<News />} />
						<Route path='/college' element={<College />} />
						<Route path='/cooperation' element={<Cooperation />} />
						<Route path='/quality' element={<Quality />} />
						<Route path='/contacts' element={<Contacts />} />
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
