import { Route, Routes, useLocation } from 'react-router-dom';
import '../common/generall.scss';
import '../common/reset.scss';
import { Accreditation } from '../routes/header-routes/Accreditation';
import { Library } from '../routes/header-routes/Library';
import { Activity } from '../routes/header-routes/Library/activity';
import { Resource } from '../routes/header-routes/Library/resources';
import { LeadingLibraries } from '../routes/header-routes/Library/resources/leadingLibraries';
import { Schedule } from '../routes/header-routes/Schedule';
import { College } from '../routes/subMenu-routes/College';
import { Pronas } from '../routes/subMenu-routes/College/subdivisions/Pro-nas';
import { Education } from '../routes/subMenu-routes/Education';
import { News } from '../routes/subMenu-routes/News';
import { Quality } from '../routes/subMenu-routes/Quality';
import { Contacts } from '../routes/subMenu-routes/Сontacts';
import { Educationalunits } from '../routes/under-routes/Educational-units';
import { Department } from '../routes/under-routes/Educational-units/subdivisions/Department';
import { MainSub } from '../routes/under-routes/Educational-units/subdivisions/MainSub';
import { Tsyklovikomisii } from '../routes/under-routes/Educational-units/subdivisions/Tsyklovi-komisii';
import { Entrycompany } from '../routes/under-routes/Entry-company';
import { Opsfakhovyimolodshyibakalavr } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr';
import { EA } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/ea';
import { EK } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/ek';
import { EP } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/ep';
import { ES } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/es';
import { OD } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/od';
import { OM } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/om';
import { OV } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/ov';
import { PS } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/ps';
import { RA } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/ra';
import { ZM } from '../routes/under-routes/Entry-company/subdivisions/Ops-fakhovyi-molodshyi-bakalavr/zm';
import { Starshoklasnykam } from '../routes/under-routes/Entry-company/subdivisions/Starshoklasnykam';
import { Chooseprofesion } from '../routes/under-routes/Entry-company/subdivisions/Starshoklasnykam/choose-profesion';
import { Vstup } from '../routes/under-routes/Entry-company/subdivisions/Vstup';
import { Researchactivities } from '../routes/under-routes/Research-activities';
import { Dninauky } from '../routes/under-routes/Research-activities/subdivisions/Dni-nauky';
import { Naukavkoledzhi } from '../routes/under-routes/Research-activities/subdivisions/Nauka-v-koledzhi';
import { Naukovadiialnistvykladachiv } from '../routes/under-routes/Research-activities/subdivisions/Naukova-diialnist-vykladachiv';
import { Naukovodoslidnarobotastudentiv } from '../routes/under-routes/Research-activities/subdivisions/Naukovodoslidna-robota-studentiv';
import { Supportandtrust } from '../routes/under-routes/Support-and-trust';
import { Praktychnyipsykholoh } from '../routes/under-routes/Support-and-trust/subdivisions/Praktychnyi-psykholoh';
import { Sotsialnopsykholohichnapidtrymka } from '../routes/under-routes/Support-and-trust/subdivisions/Sotsialno-psykholohichna-pidtrymka';
import { Sotsialnyipedahoh } from '../routes/under-routes/Support-and-trust/subdivisions/Sotsialnyi-pedahoh';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { Container } from './Container';
import { BigMenu } from './Menu/BigMenu';
import { UsefulLinks } from './UsefulLinks';
import { AboutCollege } from './sections/AboutCollege';
import { Advantages } from './sections/Advantages';
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
			<Container className='blue-decor'>
				<Header />
			</Container>
			<SubMenu />
			{isHomePage && <VideoPlayer />}
			<Container className='blue-decor'>
				<BigMenu />
			</Container>
			<Container className='light-bg' offPadding>
				<Breadcrumbs />
			</Container>
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
					<Route path='/research-activities' element={<Researchactivities />} />
					<Route path='/support-and-trust' element={<Supportandtrust />} />
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr'
						element={<Opsfakhovyimolodshyibakalavr />}
					/>
					<Route path='/entry-company/vstup' element={<Vstup />} />
					<Route
						path='/entry-company/starshoklasnykam'
						element={<Starshoklasnykam />}
					/>
					<Route
						path='/educational-units/department'
						element={<Department />}
					/>
					<Route path='/educational-units/mainsub' element={<MainSub />} />
					<Route
						path='/educational-units/tsyklovi-komisii'
						element={<Tsyklovikomisii />}
					/>
					<Route path='/research-activities/dni-nauky' element={<Dninauky />} />
					<Route
						path='/research-activities/nauka-v-koledzhi'
						element={<Naukavkoledzhi />}
					/>
					<Route
						path='/research-activities/naukovodoslidna-robota-studentiv'
						element={<Naukovodoslidnarobotastudentiv />}
					/>
					<Route
						path='/research-activities/naukova-diialnist-vykladachiv'
						element={<Naukovadiialnistvykladachiv />}
					/>
					<Route path='/college/pro-nas' element={<Pronas />} />
					<Route path='/library/activity' element={<Activity />} />
					<Route path='/library/resources' element={<Resource />} />
					<Route
						path='/library/resources/leadingLibraries'
						element={<LeadingLibraries />}
					/>
					<Route
						path='/support-and-trust/sotsialnyi-pedahoh'
						element={<Sotsialnyipedahoh />}
					/>
					<Route
						path='/support-and-trust/praktychnyi-psykholoh'
						element={<Praktychnyipsykholoh />}
					/>
					<Route
						path='/support-and-trust/sotsialno-psykholohichna-pidtrymka'
						element={<Sotsialnopsykholohichnapidtrymka />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/es'
						element={<ES />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/ep'
						element={<EP />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/ov'
						element={<OV />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/ek'
						element={<EK />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/ps'
						element={<PS />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/ea'
						element={<EA />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/ra'
						element={<RA />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/od'
						element={<OD />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/zm'
						element={<ZM />}
					/>
					<Route
						path='/entry-company/ops-fakhovyi-molodshyi-bakalavr/om'
						element={<OM />}
					/>
					<Route
						path='/entry-company/starshoklasnykam/choose-profesion'
						element={<Chooseprofesion />}
					/>
				</Routes>
			</Container>
			{isHomePage && <Advantages />}
			{isHomePage && (
				<Container>
					<AboutCollege />
				</Container>
			)}
			{isHomePage && (
				<Container>
					<UsefulLinks />
				</Container>
			)}
			<Container className='blue-decor'>
				<Footer />
			</Container>
			<Container className='dark-bg'>
				<Copyright />
			</Container>
		</div>
	);
};

export default Wrapper;
