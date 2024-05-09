// Wrapper.jsx
import { Route, Routes, useLocation } from 'react-router-dom';
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
import { BigMenu } from './BigMenu';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { Container } from './Container';
import { Copyright } from './sections/Copyright';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Main } from './sections/Main';
import { SubMenu } from './sections/SubMenu';
import { VideoPlayer } from './sections/VideoPlayer';

const Wrapper = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	return (
		<div className='wrapper'>
			<Container className='header'>
				<Header />
			</Container>
			<Container>
				<SubMenu />
			</Container>
			{isHomePage && <VideoPlayer />}
			<Container className='bg'>
				<BigMenu />
			</Container>
			<Breadcrumbs />
			<Container className='main'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/publichne-obhovorennia' element={<Publichne />} />
					<Route path='/accreditation' element={<Accreditation />} />
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
			<Container className='footer'>
				<Footer />
			</Container>
			<Container className='dark-bg'>
				<Copyright />
			</Container>
		</div>
	);
};

export default Wrapper;
