import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import LeagueCreationPage from './components/LeagueCreationPage/LeagueCreationPage';
import MatchInfoPage from './components/MatchInfoPage/MatchInfoPage';
import TeamCreationPage from './components/TeamCreationPage/TeamCreationPage';
import TeamProfilePage from './components/TeamProfilePage/TeamProfilePage';
import LeagueProfilePage from './components/LeagueProfilePage/LeagueProfilePage';
import SupportPage from './components/SupportPage/SupportPage';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';
import Test from './components/Test';
import MainNav from './components/utils/MainNav';
import Footer from './components/utils/Footer';
import UnderMaintenancePopup from './components/UnderMaintenancePopup';

function App() {
	const [errorHandler, setErrorHandler] = useState({
		hasError: false,
		message: '',
	});
	const [loginModalShow, setLoginModalShow] = useState(false);
	const [registerModalShow, setRegisterModalShow] = useState(false);
	const [errorModalShow, setErrorModalShow] = useState(false);
	return (
		<div className='App app-container df-dark-background-2'>
			<Router>
				<UnderMaintenancePopup />
				<MainNav
					errorHandler={errorHandler}
					setErrorHandler={setErrorHandler}
					errorModalShow={errorModalShow}
					setErrorModalShow={setErrorModalShow}
					loginModalShow={loginModalShow}
					setLoginModalShow={setLoginModalShow}
					registerModalShow={registerModalShow}
					setRegisterModalShow={setRegisterModalShow}
				/>
				<Switch>
					<Route
						exact
						path='/'
						render={props => (
							<HomePage
								{...props}
								setErrorHandler={setErrorHandler}
								setErrorModalShow={setErrorModalShow}
								setLoginModalShow={setLoginModalShow}
								setRegisterModalShow={setRegisterModalShow}
							/>
						)}
					/>
					<Route
						exact
						path='/leagues/create'
						render={props => (
							<LeagueCreationPage
								{...props}
								setErrorHandler={setErrorHandler}
							/>
						)}
					/>
					<Route
						path='/league/:id'
						render={props => (
							<LeagueProfilePage {...props} setErrorHandler={setErrorHandler} />
						)}
					/>
					<Route
						exact
						path='/teams/create'
						render={props => (
							<TeamCreationPage {...props} setErrorHandler={setErrorHandler} />
						)}
					/>
					<Route
						path='/team/:id'
						render={props => (
							<TeamProfilePage {...props} setErrorHandler={setErrorHandler} />
						)}
					/>
					<Route
						path='/match/:id'
						render={props => (
							<MatchInfoPage {...props} setErrorHandler={setErrorHandler} />
						)}
					/>
					<Route
						path='/user/:id'
						render={props => (
							<UserProfilePage {...props} setErrorHandler={setErrorHandler} />
						)}
					/>
					<Route
						exact
						path='/support'
						render={props => (
							<SupportPage {...props} setErrorHandler={setErrorHandler} />
						)}
					/>
					<Route exact path='/TEST' component={Test} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
