import { useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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

import { MainSub } from '../routes/subMenu-routes/College/subdivisions/MainSub';
import { Educationalunits } from '../routes/under-routes/Educational-units/Educational-units';
import { Department } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Department';

import { Tsyklovikomisii } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Tsyklovi-komisii/Tsyklovi-komisii';
import { CCElectromechanical } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Tsyklovi-komisii/Tsyklovi-komisii/CCElectromechanical';
import { DisciplinesofGenera } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Tsyklovi-komisii/Tsyklovi-komisii/Disciplines of Genera';
import { ElecEnergySpec } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Tsyklovi-komisii/Tsyklovi-komisii/Elec Energy Spec';
import { GTDandIME } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Tsyklovi-komisii/Tsyklovi-komisii/GTD and IME';
import { Philologicalandhumanitarian } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Tsyklovi-komisii/Tsyklovi-komisii/Philological and humanitarian';
import { RoadTransport } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Tsyklovi-komisii/Tsyklovi-komisii/RoadTransport';
import { SoftwareandSocEco } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Tsyklovi-komisii/Tsyklovi-komisii/Software and Soc-Eco';
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

import { BussEducandKT } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Department/BussEduc and KT';
import { Electricalengineering } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Department/Electrical engineering';
import { Electromechanical } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Department/Electromechanical';
import { Mechanical } from '../routes/under-routes/Educational-units/Educational-units/subdivisions/Department/Mechanical';

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
import { AdminPanel } from './AdminPanel';
import Login from './AdminPanel/Login/Login';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { Container } from './Container';
import { UsefulLinks } from './UsefulLinks';
import { AboutCollege } from './sections/AboutCollege';
import { Advantages } from './sections/Advantages';
import { Copyright } from './sections/Copyright';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { BigMenu } from './sections/Header/Menu/BigMenu';
import { Main } from './sections/Main';
import SubMenu from './sections/SubMenu/SubMenu';
import { VideoPlayer } from './sections/VideoPlayer';

const Wrapper = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLogin = () => {
		setIsAuthenticated(true);
	};

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
					<Route
						path='/educational-units/tsyklovi-komisii'
						element={<Tsyklovikomisii />}
					></Route>
					<Route path='/educational-units/mainsub' element={<MainSub />} />
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
					<Route
						path='/educational-units/tsyklovi-komisii/DisciplinesofGenera'
						element={<DisciplinesofGenera />}
					/>
					<Route
						path='/educational-units/tsyklovi-komisii/CCElectromechanical'
						element={<CCElectromechanical />}
					/>
					<Route
						path='/educational-units/tsyklovi-komisii/ElecEnergySpec'
						element={<ElecEnergySpec />}
					/>
					<Route
						path='/educational-units/tsyklovi-komisii/GTDandIME'
						element={<GTDandIME />}
					/>
					<Route
						path='/educational-units/tsyklovi-komisii/Philologicalandhumanitarian'
						element={<Philologicalandhumanitarian />}
					/>
					<Route
						path='/educational-units/tsyklovi-komisii/RoadTransport'
						element={<RoadTransport />}
					/>
					<Route
						path='/educational-units/tsyklovi-komisii/SoftwareandSoc-Eco'
						element={<SoftwareandSocEco />}
					/>
					<Route
						path='/educational-units/department/BussEducandKT'
						element={<BussEducandKT/>}
					/>
						<Route
						path='/educational-units/department/Electromechanical'
						element={<Electromechanical />}
					/>
						<Route
						path='/educational-units/department/Electricalengineering'
						element={<Electricalengineering />}
					/>
					<Route
						path='/educational-units/department/Mechanical'
						element={<Mechanical />}
					/>
					<Route
						path='/login'
						element={
							isAuthenticated ? (
								<Navigate to='/admin' replace />
							) : (
								<Login onLogin={handleLogin} />
							)
						}
					/>
					<Route
						path='/admin'
						element={
							isAuthenticated ? (
								<AdminPanel />
							) : (
								<Navigate to='/login' replace />
							)
						}
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
