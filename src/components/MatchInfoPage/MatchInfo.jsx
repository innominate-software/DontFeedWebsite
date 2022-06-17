import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MatchInfo({
	duration,
	game,
	id,
	matchId,
	matchDate,
	matchTime,
}) {
	switch (game) {
		case "DOTA2":
			game = "Dota 2";
			break;
		default:
			break;
	}
	return (
		<Row>
			<Col sm={4}>
				<div>match duration</div>
				<h4>{duration}</h4>
			</Col>
			<Col sm={4}>
				<div>{game} match id</div>
				<h4>{matchId}</h4>
				<div>Don't Feed match id</div>
				<h4>{id}</h4>
			</Col>
			<Col sm={4}>
				<div>match date & time</div>
				<h4>
					{matchDate} {matchTime}
				</h4>
			</Col>
		</Row>
	);
}
