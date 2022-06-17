import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import defaultTeam from "../../assets/img/default-team.png";

export default function TeamA({ name }) {
	return (
		<Row>
			<Col sm={4}>
				<img
					className="match-team-pic"
					src={defaultTeam}
					alt="this is the team logo for teamA"
				/>
			</Col>
			<Col sm={8} className="match-team-name">
				<h4 className="left">{name}</h4>
			</Col>
		</Row>
	);
}
