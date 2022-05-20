import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActivePlayers from "../TeamProfilePage/ActivePlayers";

export default function MatchPlayers({ teamA, teamB, page }) {
	return (
		<Row className="match-players">
			<h4>Players</h4>
			<Row className="center-players">
				<Col s={5}>
					<ActivePlayers players={teamA} page={page} />
				</Col>
				<Col s={1} className="versus">
					<h3>VS</h3>
				</Col>
				<Col s={5}>
					<ActivePlayers players={teamB} page={page} />
				</Col>
			</Row>
		</Row>
	);
}
