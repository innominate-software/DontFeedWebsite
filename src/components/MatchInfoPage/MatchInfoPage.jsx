import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MatchTitle from "./MatchTitle";
import MatchBanner from "./MatchBanner";
import TeamA from "./TeamA";
import TeamB from "./TeamB";
import MatchInfo from "./MatchInfo";
import MatchPlayers from "./MatchPlayers";
import { match } from "../../assets/dummydata/DummyMatch.json";

function MatchInfoPage(props) {
	const page = "MatchInfoPage";
	return (
		<Container fluid className="app-container df-dark-background-2">
			{/* <MatchBanner game={match.game} /> */}
			<Row>
				<Col sm={2} />
				<Col sm={8}>
					<MatchTitle
						eventName={match.event}
						victor={match.victor}
						score={match.score}
					/>
				</Col>
				<Col sm={2} />
			</Row>
			<Row className="df-light-grey-text">
				<Col sm={6}>
					<TeamA name={match.teamA.name} />
				</Col>
				<Col sm={6}>
					<TeamB name={match.teamB.name} />
				</Col>
			</Row>
			<div className="player-container df-light-grey-text">
				<MatchInfo
					id={match.id}
					duration={match.duration}
					game={match.game}
					matchId={match.gameMatchId}
					matchDate={match.matchDate}
					matchTime={match.matchTime}
				/>
				<MatchPlayers
					teamA={match.teamA.players}
					teamB={match.teamB.players}
					page={page}
				/>
			</div>
		</Container>
	);
}

export default MatchInfoPage;
