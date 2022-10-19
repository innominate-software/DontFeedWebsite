// import authReducer from "./features/auth.feature";
import changePasswordModalReducer from "./features/change-password-modal.feature";
import errorModalReducer from "./features/error-modal.feature";
import forgottenCredentialsModalReducer from "./features/forgotten-credentials-modal.feature";
// import homePageReducer from "./features/home-page.feature";
import leagueReducer from "./features/league-profile.feature";
import leagueCreationReducer from "./features/league-creation.feature";
import loginModalReducer from "./features/login-modal.feature";
import matchReducer from "./features/match-info.feature";
// import navbarReducer from "./features/navbar.feature";
import registerModalReducer from "./features/register-modal.feature";
import reportCheaterModalReducer from "./features/report-cheater-modal.feature";
import searchModalReducer from "./features/search-modal.feature";
import submitFeedbackModalReducer from "./features/submit-feedback-modal.feature";
import teamReducer from "./features/team-profile.feature";
// import teamCreationReducer from "./features/team-creation.feature";
import userReducer from "./features/user-profile.feature";

const rootReducer = {
	// auth: authReducer,
	changePasswordModal: changePasswordModalReducer,
	errorModal: errorModalReducer,
	forgottenCredentialsModal: forgottenCredentialsModalReducer,
	// homePage: homePageReducer
	league: leagueReducer,
	leagueCreation: leagueCreationReducer,
	loginModal: loginModalReducer,
	match: matchReducer,
	// navbar: navbarReducer,
	registerModal: registerModalReducer,
	reportCheaterModal: reportCheaterModalReducer,
	searchModal: searchModalReducer,
	submitFeedbackModal: submitFeedbackModalReducer,
	team: teamReducer,
	// teamCreation: teamCreationReducer,
	user: userReducer,
};
export default rootReducer;
