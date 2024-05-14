// Wrapper.jsx
import { Route, Routes, useLocation } from 'react-router-dom';
import '../common/generall.scss';
import '../common/reset.scss';
import { Accreditation } from '../routes/header-routes/Accreditation';
import { Schedule } from '../routes/header-routes/Schedule';
import { Library } from '../routes/header-routes/Library';
import { News } from '../routes/subMenu-routes/News';
import { College } from '../routes/subMenu-routes/College';
import { Education } from '../routes/subMenu-routes/Education';
import { Quality } from '../routes/subMenu-routes/Quality';
import { Contacts } from '../routes/subMenu-routes/Сontacts';
import { Entrycompany } from '../routes/under-routes/Entry-company';
import { Educationalunits } from '../routes/under-routes/Educational-units';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { Container } from './Container';
import { BigMenu } from './Menu/BigMenu';
import { Copyright } from './sections/Copyright';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Main } from './sections/Main';
import SubMenu from './sections/SubMenu/SubMenu';
import { VideoPlayer } from './sections/VideoPlayer';

const Wrapper = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	return (
		<div className='wrapper'>
			<Container className='header'>
				<Header />
			</Container>
			<SubMenu />
			{isHomePage && <VideoPlayer />}
			<Container className='bg'>
				<BigMenu />
			</Container>
			<Breadcrumbs />
			<Container className='main'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/accreditation' element={<Accreditation />} />
					<Route path='/schedule' element={<Schedule />} />
					<Route path='/library' element={<Library />} />
					<Route path='/news' element={<News />} />
					<Route path='/college' element={<College />} />
					<Route path='/education' element={<Education />} />
					<Route path='/quality' element={<Quality />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/entry-company' element={<Entrycompany />} />
					<Route path='/educational-units' element={<Educationalunits />} />
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
