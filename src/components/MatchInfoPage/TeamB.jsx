import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import defaultTeam from "../../assets/img/default-team.png";

export default function TeamB({ name }) {
	return (
		<Row>
			<Col s={4} className="match-team-name">
				<h4 className="right">{name}</h4>
			</Col>
			<Col s={4}>
				<img
					className="match-team-pic"
					src={defaultTeam}
					alt="this is the team logo for teamA"
				/>
			</Col>
		</Row>
	);
}
