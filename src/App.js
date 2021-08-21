import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import LeagueCreationPage from "./components/LeagueCreationPage/LeagueCreationPage";
import MatchInfoPage from "./components/MatchInfoPage/MatchInfoPage";
import TeamCreationPage from "./components/TeamCreationPage/TeamCreationPage";
import TeamProfilePage from "./components/TeamProfilePage/TeamProfilePage"
import LeagueProfilePage from "./components/LeagueProfilePage/LeagueProfilePage"
import SupportPage from "./components/SupportPage/SupportPage";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
import Test from "./components/Test";
import MainNav from "./components/utils/MainNav";
import Footer from "./components/utils/Footer";

function App() {
	// const [errorHandler, setErrorHandler] = useState({
	// 	hasError: false,
	// 	message: "",
	// });
	return (
		<div className="App app-container df-dark-background-2">
			<Router>
				<MainNav />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/TEST" exact component={Test} />
					<Route path="/leagues/create" component={LeagueCreationPage} />
					<Route path="/league/:id" component={LeagueProfilePage} />
					<Route path="/teams/create" component={TeamCreationPage} />
					<Route path="/team/:id" component={TeamProfilePage} />
					<Route path="/match/:id" component={MatchInfoPage} />
					<Route path="/user/:id" component={UserProfilePage} />
					<Route path="/support" component={SupportPage} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
