import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LeagueInfo({ league, joinLeague }) {
	return (
		<Row className="league-info py-3">
			<Col>
				<p className={league?.reward ?? "invalid"}>Reward: {league?.reward ?? "UNDECIDED"}</p>
				<p>Stage: {league?.stage}</p>
			</Col>
			<Col>
				<p>Season {league?.season}</p>
				<button className="grey-btn btn join-league" onClick={joinLeague}>
					<i className="bi bi-people-fill" />Join League
				</button>
			</Col>
			<Col>
				<p className={league?.platform ?? "invalid"}>Platform: {league?.platform ?? "UNDECIDED"}</p>
				<p>Max Teams: {league?.maxTeams}</p>
			</Col>
		</Row>
	)
}