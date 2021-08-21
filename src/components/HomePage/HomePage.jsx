import React from 'react';
import NewsCarousel from "./NewsCarousel";
import OnlinePlayers from "./OnlinePlayers";
import LeagueCreateButton from "./LeagueCreateButton";
import LeaguesWithOpenRegistration from "./LeaguesWithOpenRegistration";
import MostRecentLeagues from "./MostRecentLeagues";
import LoginCard from "./LoginCard";
import GameBubbles from "./GameBubbles";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage(props) {
	const { auth } = props;
	return (
		<Container fluid className="app-container df-dark-background-2 px-0">
			<Row>
				<GameBubbles />
				<NewsCarousel />
				<Row className="p-3">
					<Col xs={0} lg={2} />
					<Col xs={true} lg={7} className="m-3">
						{!auth.isLoggedIn
							? <LoginCard />
							: null
						}
						<MostRecentLeagues />
						<LeaguesWithOpenRegistration />
						<LeagueCreateButton />
					</Col>
					<Col xs={0} lg={2} className="info m-3">
						<OnlinePlayers />
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state.authState,
	}
}

export default connect(mapStateToProps)(HomePage);