import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LeagueCreationPage from "./components/LeagueCreationPage/LeagueCreationPage";
import MatchInfoPage from "./components/MatchInfoPage/MatchInfoPage";
import TeamCreationPage from "./components/TeamCreationPage/TeamCreationPage";
import TeamProfilePage from "./components/TeamProfilePage/TeamProfilePage";
import LeagueProfilePage from "./components/LeagueProfilePage/LeagueProfilePage";
import SupportPage from "./components/SupportPage/SupportPage";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
import MainNav from "./components/utils/MainNav";
import Footer from "./components/utils/Footer";
import "./App.css";

function App() {
	return (
		<div className="App app-container df-dark-background-2">
			<MainNav />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/league/create" element={<LeagueCreationPage />} />
				<Route path="/leagues/:id" element={<LeagueProfilePage />} />
				<Route path="/matches/:id" element={<MatchInfoPage />} />
				<Route exact path="/support" element={<SupportPage />} />
				<Route exact path="/team/create" element={<TeamCreationPage />} />
				<Route path="/teams/:id" element={<TeamProfilePage />} />
				<Route path="/users/:id" element={<UserProfilePage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
