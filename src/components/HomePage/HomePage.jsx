import React from "react";
import NewsCarousel from "./NewsCarousel";
import OnlinePlayers from "./OnlinePlayers";
import LeagueCreateButton from "./LeagueCreateButton";
import LeaguesWithOpenRegistration from "./LeaguesWithOpenRegistration";
import MostRecentLeagues from "./MostRecentLeagues";
import LoginCard from "./LoginCard";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { homePage } from "../../assets/dummydata/DummyHomePage.json";

function HomePage(props) {
	const {
		auth,
		errorHandler,
		setErrorHandler,
		setErrorModalShow,
		setLoginModalShow,
		setRegisterModalShow,
	} = props;
	return (
		<Container fluid className="app-container px-0">
			<NewsCarousel stories={homePage.newsStories} />
			<Row className="p-3">
				<Col xs={0} lg={2} />
				<Col xs={12} lg={7} className="m-3">
					{!auth.isLoggedIn ? (
						<LoginCard
							setLoginModalShow={setLoginModalShow}
							setRegisterModalShow={setRegisterModalShow}
						/>
					) : null}
					<MostRecentLeagues leagues={homePage.mostRecentLeagues} />
					<LeaguesWithOpenRegistration
						leagues={homePage.leaguesWithOpenRegistration}
					/>
					<LeagueCreateButton />
				</Col>
				<Col xs={0} lg={2} className="info m-3">
					<OnlinePlayers />
				</Col>
			</Row>
		</Container>
	);
}

const mapStateToProps = state => {
	return {
		auth: state.authState,
	};
};

export default connect(mapStateToProps)(HomePage);
